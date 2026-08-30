const recentRequests = new Map();

const response = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });

const clean = (value, max = 500) => String(value || "").trim().slice(0, max);
const escapeHtml = (value) =>
  clean(value, 3000)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

async function resend(env, path, payload) {
  return fetch(`https://api.resend.com/${path}`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      "content-type": "application/json",
      "user-agent": "Lawendowe-Poletko/1.0",
    },
    body: JSON.stringify(payload),
  });
}

export async function onRequestPost({ request, env }) {
  if (!env.RESEND_API_KEY || !env.RESEND_FROM || !env.CONTACT_EMAIL) {
    return response({ message: "Formularz jest jeszcze konfigurowany. Napisz do nas bezpośrednio na kontakt@lawendowepoletko.pl." }, 503);
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 12_000) return response({ message: "Wiadomość jest zbyt długa." }, 413);

  const ip = request.headers.get("cf-connecting-ip") || "unknown";
  const now = Date.now();
  const previous = recentRequests.get(ip) || 0;
  if (now - previous < 20_000) return response({ message: "Odczekaj chwilę przed kolejną wiadomością." }, 429);
  recentRequests.set(ip, now);

  let data;
  try {
    data = await request.json();
  } catch {
    return response({ message: "Nieprawidłowe dane formularza." }, 400);
  }

  if (clean(data.website)) return response({ ok: true });

  const mode = ["contact", "season", "cafe"].includes(data.mode) ? data.mode : "contact";
  const name = clean(data.name, 80);
  const email = clean(data.email, 160).toLowerCase();
  const phone = clean(data.phone, 40);
  const topic = clean(data.topic, 120);
  const message = clean(data.message, 3000);
  const consent = data.consent === "on" || data.consent === true;

  if (!/^\S+@\S+\.\S+$/.test(email) || !consent) {
    return response({ message: "Podaj poprawny e-mail i zaznacz zgodę." }, 400);
  }
  if (mode === "contact" && (!name || message.length < 10)) {
    return response({ message: "Podaj imię i co najmniej 10 znaków wiadomości." }, 400);
  }

  const labels = {
    contact: "Nowa wiadomość ze strony",
    season: "Nowy zapis na sezon 2027",
    cafe: "Nowa osoba zainteresowana kawiarnią",
  };

  if (mode !== "contact") {
    const contactPayload = {
      email,
      unsubscribed: false,
      properties: {
        first_name: name || "Gość",
        source: mode === "cafe" ? "kawiarnia-2027" : "sezon-2027",
      },
      ...(env.RESEND_SEGMENT_ID ? { segments: [{ id: env.RESEND_SEGMENT_ID }] } : {}),
    };
    const contactResult = await resend(env, "contacts", contactPayload);
    if (!contactResult.ok && contactResult.status !== 409) {
      return response({ message: "Nie udało się zapisać adresu. Spróbuj ponownie później." }, 502);
    }
  }

  const ownerEmail = await resend(env, "emails", {
    from: env.RESEND_FROM,
    to: [env.CONTACT_EMAIL],
    reply_to: email,
    subject: `${labels[mode]}${topic ? ` — ${topic}` : ""}`,
    html: `
      <h1>${escapeHtml(labels[mode])}</h1>
      <p><strong>Imię:</strong> ${escapeHtml(name || "—")}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
      <p><strong>Telefon:</strong> ${escapeHtml(phone || "—")}</p>
      <p><strong>Temat:</strong> ${escapeHtml(topic || "—")}</p>
      <p><strong>Wiadomość:</strong><br>${escapeHtml(message || "Zapis na listę zainteresowanych.").replaceAll("\n", "<br>")}</p>
    `,
  });

  if (!ownerEmail.ok) return response({ message: "Nie udało się wysłać wiadomości. Spróbuj ponownie później." }, 502);

  await resend(env, "emails", {
    from: env.RESEND_FROM,
    to: [email],
    subject: mode === "contact" ? "Otrzymaliśmy Twoją wiadomość" : "Witaj na liście Lawendowego Poletka",
    html: `<p>Cześć${name ? ` ${escapeHtml(name)}` : ""},</p><p>${mode === "contact" ? "dziękujemy za wiadomość. Odezwiemy się zwykle w ciągu 1–2 dni." : "dziękujemy za zapis. Damy znać o najważniejszych aktualnościach z pola i przygotowaniach do sezonu 2027."}</p><p>Lawendowe Poletko<br>Skrzetuszewo</p>`,
  });

  return response({ ok: true });
}

export function onRequest() {
  return response({ message: "Metoda niedozwolona." }, 405);
}
