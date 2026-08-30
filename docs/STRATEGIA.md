# Lawendowe Poletko — strategia strony (v1 → pełny serwis)

> Data: 2026-08-30 · Wersja strony: 1.0 (wersja okrojona, gotowa do rozbudowy)
> Domena docelowa: **lawendowepoletko.pl** (Cloudflare Pages — bez zmian przy wdrożeniu)

---

## 1. Rekomendowany stack technologiczny (i dlaczego)

| Warstwa | Wybór | Uzasadnienie |
|---|---|---|
| Framework | **Astro 5** (strona statyczna) | Najlepszy możliwy Core Web Vitals dla strony treściowej: zero JS domyślnie, HTML generowany z góry. Google premiuje szybkość — to fundament pozycjonowania lokalnego. Blog "rośnie" z Astro naturalnie (content collections). |
| Style | **Tailwind CSS 4** | Szybka praca, spójny design system (kolory firmowe w `@theme`), mały CSS produkcyjny. |
| Treść / blog | **Markdown + content collections** | Artykuły to pliki `.md` z frontmatterem — wersjonowane w gicie, łatwe do przeniesienia później do CMS. Schema walidowana (Ty pomyłki w meta zobaczysz na buildzie). |
| Hosting | **Cloudflare Pages** (bez zmian) | Za darmo, globalne CDN, podmiana projektu Pages na nowy build = domena działa dalej bez rekonfiguracji. |
| Analityka | **Cloudflare Web Analytics** lub Plausible | Lekkie, bez zgód RODO (ciasteczka). GA4 tylko jeśli potrzebujesz grup kanałów. |
| Sklep (faza 2) | **Stripe Payment Links** → docelowo **Snipcart** lub **Shoper/Shopify Buy Button** | Start: 5–10 produktów, płatność linkiem Stripe (0 pracy przy koszyku). Skala: Snipcart (nakładka na Astro) albo polski Shoper, jeśli logistyka urośnie. |
| Newsletter (faza 2) | **MailerLite** (polski interfejs, darmowy do 1 000 zapisów) | Embed formularza w sekcji „Dam znać, gdy pole zrobi się fioletowe". |
| Rezerwacje sesji (faza 2/3) | **Cal.com** lub prosty formularz (Formspree/Web3Forms) | Najpierw walidacja popytu telefonem, potem automatyzacja. |

**Czego NIE wybrałem i dlaczego:** WordPress — ciężki, wymaga opieki (updatey, wtyczki, bezpieczeństwo) i będzie wolniejszy; Next.js — świetny, ale to nadmiarowość dla strony, w której 95% treści jest statyczna; kreatory (Wix/Squarespace) — słabsze SEO i koszt miesięczny.

---

## 2. Co mówi konkurencja (rekonesans VIII–IX 2026)

Przeanalizowane serwisy: [lawendowepole.pl](https://lawendowepole.pl/), [plantacjalawendowewzgorze.pl](https://plantacjalawendowewzgorze.pl/), [silnalawenda.pl](https://silnalawenda.pl/), [lawenda.org](https://lawenda.org/) (stowarzyszenie plantatorów).

**Wzorce, które u nich działają:**
- **Dywersyfikacja przychodów** — Lawendowe Pole (Warmia): noclegi + sklep + warsztaty + wydarzenia; Silna Lawenda: sesje + eventy firmowe + agroturystyka. Sam sklep z lawendą nie utrzymuje biznesu — to doświadczenia (warsztaty, sesje, wydarzenia) są głównym motorem.
- **Mocny, lokalny USP w H1** — „Pierwsza plantacja na Warmii". Wasz odpowiednik: **„hektar lawendy 2 km od Pól Lednickich"** (unikalne położenie przy znanym celu wycieczek).
- **Content marketing edukacyjny** — „Zielnik" Silnej Lawendy ciągnie ruch organiczny cały rok, nie tylko w sezonie. Nasz **Poradnik (9 artykułów)** gra tę samą rolę.
- **Storytelling osobisty** — narracja pierwszoosobowa („zaczęło się od kilku rzędów") buduje zaufanie lepiej niż katalogowe „o firmie".
- **Newsletter + aktywny FB/IG** — standard u wszystkich czołowych plantacji.

**Luki, które możemy wykorzystać (ich słabości):**
1. **Brak dowodów społecznych** — Silna Lawenda nie pokazuje opinii. → Zbierajcie opinie Google (profil firmy) i wstawcie je na stronę (faza 2).
2. **Słabe SEO techniczne** — u konkurencji braki w meta/strukturze. → Nasza strona: pełne meta, JSON-LD, sitemap, szybkość.
3. **Mało kto pokazuje status pola na żywo** — chip „Status sezonu" + cotygodniowe zdjęcia to magnes na powracających i idealny content social.
4. **Angielska wersja** — tylko nieliczni mają; Lednica/Gniezno mają ruch zagraniczny (faza 3: `/en/`).

---

## 3. Struktura serwisu (v1 — zrobiona)

```
/               Hero + liczby + historia + 3 filary (odwiedź/sesje/produkty) + lokalizacja + poradnik + social
/o-nas          Historia od 2016, wartości, cytat
/odwiedz        Adres, telefon, okolica, płatności, warsztaty 2027, FAQ (schema FAQPage)
/sesje          Plener: rodziny / pary / marki / fotografowie + proces 3 kroków
/produkty       Sadzonki, bukiety, olejek, hydrolat + „sklep wkrótce"
/kontakt        Telefon, e-mail, adres, social
/poradnik       Blog: 9 artykułów (kwitnienie, cięcie, suszenie, sadzenie, ziemia, podlewanie,
                donica, zima, olejek vs hydrolat)
/poradnik/[slug] Artykuł + „czytaj dalej" + schema BlogPosting
/rss.xml, /sitemap-index.xml, /robots.txt, 404
```

**Świadomie odłożone na później:** sklep z koszykiem, newsletter (formularz), opinie, EN wersja, polityka prywatności/cookies (wymagane przed faktycznym launchem przy analityce!).

---

## 4. Plan SEO (walka o wysokie pozycje)

### Zrobione technicznie (v1)
- semantyczny HTML, jeden H1 na stronę, canonical, meta description unikalne per strona,
- OpenGraph + Twitter Card (og.jpg 1200×630),
- **JSON-LD**: `TouristAttraction` (cała witryna), `FAQPage` (/odwiedz), `BlogPosting` + `BreadcrumbList` (artykuły), `WebSite`,
- sitemap.xml + robots.txt + RSS,
- statyczny HTML, zero zbędnego JS → świetne Core Web Vitals,
- prymitywne URL-e bez końcówek typu `.html`, spójna hierarchia /poradnik/[slug].

### Twoja checklista po wdrożeniu (50% sukcesu robi się poza kodem)
1. **Google Business Profile — NAJWYŻSZY PRIORYTET.** Wizytówka „Lawendowe Poletko" w Skrzetuszewie: kategoria „Atrakcja turystyczna", zdjęcia pola, link do strony, telefon. To decyduje o widoczności w mapach i frazach „pole lawendowe okolice Gniezna". Proś każdego gościa o opinię — np. tabliczka z kodem QR na polu.
2. **Search Console** — zweryfikuj domenę, wyślij sitemap-index.xml, obserwuj frazy (w Playground są już foldery `.tmp-gsc-*`, więc GSC jest wcześniej skonfigurowane).
3. **Bing Webmaster Tools** — import z GSC, 5 minut roboty.
4. **Spójność NAP** (nazwa-adres-telefon) identyczna wszędzie: strona, Facebook, Instagram, Google, katalogi (lawenda.org ma mapę pól — dodaj się!).

### Strategia fraz
| Grupa fraz | Przykłady | Gdzie walczymy | Status |
|---|---|---|---|
| Lokalne „pole lawendowe" | pole lawendowe wielkopolska, lawenda gniezno, pole lawendy poznani vicinity | strona główna + GBP | v1 gotowa |
| Sesje | sesje zdjęciowe lawenda, plener lawenda poznań | /sesje | v1 gotowa |
| Informacyjne (blog) | kiedy kwitnie lawenda, jak przycinać lawendę, lawenda w donicy | /poradnik | **9 artykułów już jest** — to przewaga nad większością konkurencji |
| Transakcyjne | olejek lawendowy sklep, sadzonki lawendy | /produkty → sklep (faza 2) | teaser na razie |

**Rytm publikacji:** 1–2 artykuły/miesiąc przez pierwszy rok. Kolejne tematy: lawenda w kuchni (przepisy), lawenda a zwierzęta, lawandyna vs lawenda — różnice w uprawie, lawenda i pszczoły, wianki i kompozycje DIY, lawenda na ślub (dekoracje i podarunki).

### Link building (prosty, lokalny)
- katalog **lawenda.org** (mapa plantacji), portale regionalne (Poznań/Gniezno — artykuł „gdzie na lawendę w Wielkopolsce"),
- współpraca z fotografami (oni linkują plener), agroturystyki i atrakcje Szlaku Piastowskiego,
- lokalne grupy na Facebooku: „Wielkopolska na weekend" i podobne — post z dobrym zdjęciem pola w sezonie potrafi dać największy pojedynczy skok ruchu.

---

## 5. Social media → strona

Profile już istnieją: FB `lawendowepoletko`, IG `@lawendowe_poletko`, TikTok `@lawendowepoletkoPL`.

- **Zasada kierunku ruchu:** social = bieżący stan pola i życie gospodarstwa; strona = wszystko, co trwałe (oferta, FAQ, artykuły). W bio IG/TikTok link do strony.
- **Filary treści (4×/tydz. w sezonie, 1–2 poza sezonem):** (1) status pola — to samo miejsce, ten sam kadr co tydzień = rozpoznawalny serial; (2) kulisy pracy (zbiory, destylacja); (3) edukacja = skróty z poradnika z linkiem; (4) goście i sesje (za zgodą).
- **Sezon kwitnienia (przełom VI/VII) = 80% ruchu rocznego.** Dwa tygodnie wcześniej: post „pole za 2 tygodnie będzie fioletowe" + piny/relacje z dojazdem. Strona ma chip „Status sezonu" — aktualizuj go (w v1 to edycja jednej linijki w `index.astro`).
- **Hashtagi lokalne:** #wielkopolska #gniezno #lednica #polelawendy + serialowe własne (#lawendowepoletko).

---

## 6. Roadmapa rozbudowy

| Faza | Zakres | Nakład |
|---|---|---|
| **v1 (TERAZ)** | Cały serwis statyczny: 7 podstron + blog 9 artykułów + SEO techniczne | ✅ zrobione |
| **1a — launch** | Podmiana buildu w Cloudflare Pages, GSC + GBP, polityka prywatności (wymóg prawny przy analityce/pikselach) | pół dnia |
| **2 — sklep** | Stripe Payment Links na /produkty → potem Snipcart/Shoper; zdjęcia produktów (największy wpływ na konwersję!), regulamin sklepu, dostawy InPost | 1–2 tygodnie |
| **2b — newsletter** | MailerLite + formularz w sekcji social + lead magnet (PDF „Kalendarz pielęgnacji lawendy") | 1 dzień |
| **3 — dowód społeczny** | Opinie Google na stronie (widget), galeria sesji (za zgodą klientów), licznik sezonów | 1 dzień |
| **3b — rezerwacje** | Formularz/Cal.com na sesje i warsztaty; kalendarz dostępności | 2–3 dni |
| **4 — EN wersja** | `/en/` dla głównych stron (ruch zagraniczny przy Lednicy) | 2–3 dni |
| **5 — automatyka sezonu** | Chip statusu sezonu sterowany z CMS/pliku, auto-posty ze zdjęć, e-mail „pole kwitnie" do newslettera | wg potrzeb |

---

## 7. Jak wdrożyć (cloudflare pages)

1. `npm run build` → katalog `dist/`
2. Cloudflare Dashboard → Workers & Pages → istniejący projekt `lawendowe-poletko` → **Create new deployment** → wrzuć zawartość `dist/` (Direct Upload). Domena lawendowepoletko.pl podmienia się automatycznie.
   - alternatywnie: podłącz repo do Pages (Build command: `npm run build`, output: `dist`) i deployuj automatycznie przy pushu.

## 8. Jak dodać artykuł na bloga

```
src/content/articles/moj-temat.md   ← plik z frontmatterem (tytuł, opis, kategoria, data)
npm run build                        ← artykuł, sitemap, RSS i linkowanie aktualizują się same
```
Frontmatter: `title`, `description` (ważne dla Google!), `category`, `pubDate`, `readTime`.

## 9. Gdzie są rzeczy

- kolory + fonty: `src/styles/global.css` (`@theme`)
- dane firmy (telefon, social, adres): `src/data/site.ts` — **jedno miejsce do zmiany**
- treści stron: `src/pages/*.astro`
- zdjęcia/zamienne grafiki: `public/` (`pole.jpg`, `og.jpg` — podmień na sezonowe!)
- skrypt zrzutów QA: `scripts/capture.mjs` (`node scripts/capture.mjs` przy działającym preview)
