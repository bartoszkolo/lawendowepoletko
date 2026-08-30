# AUDIT PM — Lawendowe Poletko (lawendowepoletko.pl)
Data: 2026-08-30 · Zakres: design + copywriting + SEO (3 niezależne audyty) · Ton: bez lukru

---

## WERDYKT PM

**Ocena ogólna: 5,5/10.** Rzemiosło jest (typografia, kod, techniczne SEO — top w niszy), ale strona **nie sprzedaje**: nie ma ludzi, cen, dowodów ani zdjęć produktu, który sprzedajecie. Wyglądacie lepiej niż konkurencja i jednocześnie słabiej — oni mają gorsze strony, ale pokazują prawdziwe pole, my pokazujemy kreskówkę i komunikat „w przygotowaniu".

**Teza przewodnia:** macie **ładną ramkę i puste wnętrze**. Każda złotówka/godzina wydana na dalsze szlifowanie designu jest przepalona, dopóki nie wstawicie trzech rzeczy: **zdjęć, ludzi i liczb** (ceny, godziny, opinie).

Oceny cząstkowe:
| Obszar | Ocena | Jednym zdaniem |
|---|---|---|
| Design/UI | 5/10 (rzemiosło 7, skuteczność biznesowa 2) | Jedno zdjęcie na całym serwisie, kreskówka FieldArt przetworzona do granic, identyczne tło hero na 7 podstronach |
| Copywriting | 5/10 (ton 7, sprzedaż 3) | Piękny ton, zero odpowiedzi na pytania gościa: czy mogę przyjechać, ile kosztuję, co kupię |
| SEO technical | 8/10 | Czysty SSG, komplet schema/canonical/sitemap — lepsze niż konkurencja |
| SEO content | 5/10 | 9/9 artykułów to jeden klaster ogrodniczy; zero treści pod frazy lokalne/transakcyjne |
| Local SEO | 3/10 | Serwis komunikuje „nie działamy" („sezon 2027", „w przygotowaniu") — zabija lokalną intencję |

---

## TOP 10 PROBLEMÓW (przekrojowo, wg wagi)

1. **[P0] Zero prawdziwych zdjęć poza jednym kadrem z drona.** Ten sam `pole.jpg` jest tłem 7 podstron. Strona SESJI (najdroższy lead!) nie ma ani jednego przykładowego zdjęcia. Produkty sprzedawane ilustracją. *Dowód: PageHero.astro:13, global.css:241, .shots/04-sesje.png, 05-produkty.png.*
2. **[P0] Sprzeczny komunikat o statusie działania pola.** Hero: „przygotowujemy sezon 2027", a FAQ na /odwiedz odpowiada, jakby wizyty były rutyną. Gość po 10 s nie wie, czy może przyjechać. *Dowód: index.astro vs odwiedz.astro FAQ.*
3. **[P0] Fałszywy sklep.** Ceny demonstracyjne + przyciski płatności, które nie działają; meta description wprost przyznaje „kolekcję demonstracyjną". Budzicie intencję zakupu i tudzież jej zbijacie. *Dowód: produkty.astro:22.*
4. **[P0] Zero ludzi.** „Rodzinne gospodarstwo" bez ani jednego imienia, twarzy, faktu. Dla strony sprzedającej sesje zdjęciowe zaufanie = produkt. *Dowód: o-nas.astro.*
5. **[P0] SEO: brak pokrycia fraz lokalnych/transakcyjnych.** 9/9 artykułów to uprawa w ogrodzie (intencja „pielęgnuję rabatkę", nie „jadę na pole"). Zero stron pod „pole lawendowe wielkopolska", „sesja w lawendzie ceny", „atrakcje okolice Gniezna".
6. **[P1] /odwiedz bez godzin, ceny wstępu, parkingu, mapy embed.** Najczęstsze pytania turysty omijane; FAQ odpowiada na „wygodne" pytania, nie prawdziwe (pies, toaleta, pszczoły, dostępność dla wózka).
7. **[P1] Sesje bez oferty i widełek.** „Ceny opublikujemy po dopracowaniu" + złamana obietnica w FAQ („zasady opisujemy na osobnej stronie" — tam ich nie ma).
8. **[P1] Dowody społeczne = zero.** 9 lat działania, aktywne social media — i ani jednej opinii na stronie.
9. **[P1] Performance LCP:** hero 391 KB JPEG bez srcset/AVIF (tło CSS = bez preloadu), Google Fonts render-blocking. Na 4G: LCP 2,5–4 s zamiast <1,5 s. *Naprawa: Astro `<Image />`, self-host fontów.*
10. **[P2] Kreatywne wtórnie:** home to jeden szablon zamka B × 3, blog bez E-E-A-T (brak autora-zdjęcia, brak „u nas w Skrzetuszewie", identyczny szkielet 9 artykułów), kontrasty na granicy WCAG (honey na białym ~3,9:1, marquee lav-400), schemat bez `geo`/`openingHours`, H2 w stopce.

---

## ROADMAPA — kolejność = priorytet

### FAZA 0 · „Przestań kłamać" (1 dzień, kod + decyzje)
Natychmiast, zanim cokolwiek dalej zbudujecie:
- [ ] Jednoznaczny status działania pola na KAŻDEJ stronie (banner, nie chip): albo „przyjedź dziś" + godziny, albo „otwieramy VI 2027 — zapisz się na alert kwitnienia" (LeadForm jest!).
- [ ] Zdjąć demonstracyjne ceny i martwe przyciski płatności z /produkty (lub przenieść do sekcji „plany"). Cenę pokazujemy TYLKO gdy można kupić.
- [ ] Usunąć złamaną obietnicę z FAQ („zasady sesji na osobnej stronie").
- [ ] Zacommitować obecne zmiany (kawiarnia, sklep, polityka prywatności — obecnie niecommitowane w repo).
- **Kryterium ukończenia:** strona nie zawiera ani jednego komunikatu sprzecznego z innym komunikatem.

### FAZA 1 · „Pokaż produkt" (1–2 tygodnie, poza kodem w 80%)
- [ ] **Sesja zdjęciowa pola i produktów** — 40–60 zdjęć: dron, rzędy z bliska, makro kwiatów, LUDZIE, złota godzina, produkty w dłoniach. To projekt nr 1 całego biznesu, przed jakimkolwiek redesignem.
- [ ] Zdjęcia gospodarzy (twarze, imiona, 150 słów historii z jedną porażką, np. „zima 2021/22 przetrzebiła pół rzędu") → /o-nas.
- [ ] 3–5 opinii z Google/FB → strona główna + /odwiedz.
- [ ] W kodzie: parametryzacja `PageHero` (osobne zdjęcie per podstrona), galeria masonry na /sesje (6–10 kadrów; styled shoot z fotografem za barter, jeśli brak własnych), FieldArt zostaje TYLKO jako brand (dividery, 404, ikonografia) — wycinamy z kart produktowych i sekcji treści.
- **Kryterium:** każda podstrona ma min. 1 unikalne prawdziwe zdjęcie; /sesje ma galerię; /o-nas ma twarze.

### FAZA 2 · „Podaj liczby" (3–5 dni)
- [ ] /odwiedz: godziny otwarcia, cena wstępu (lub „wstęp wolny"), parking, toaleta, pies, dostępność, embed mapy, sticky przycisk „zadzwoń" na mobile.
- [ ] /sesje: widełki cenowe („od ~X zł"), zasady (drony, liczba osób, własny fotograf), formularz „zapisz się na pierwsze terminy VI–VII 2027".
- [ ] FAQ przebudowane na prawdziwe obawy: cena, godziny, pies, tłum, pszczoły, wózek, poza sezonem.
- [ ] Zamiast „Mała Prowansja w Wielkopolsce" (oklepane — ma to każdy drugi polodowcowy sad): **„Nie Prowansja. Skrzetuszewo."** + fakty (17 000 krzewów, ręczne cięcie, 2 km od Lednicy).
- **Kryterium:** gość znajduje odpowiedź na „kiedy/ile/jak" bez telefonu.

### FAZA 3 · „Zdominuj lokalny SEO" (2–3 tygodnie treści, przed sezonem 2027)
- [ ] Nowy klaster lokalny (5–7 stron): „Pola lawendowe w Wielkopolsce — mapa", „Sesja zdjęciowa w lawendzie: ceny, terminy, co zabrać", „Lawenda pod Gnieznem i na Pałukach", „pole lawendowe blisko Poznania", lawendowe wesele/event. Linkowanie wewnętrzne z /odwiedz i /sesje.
- [ ] Rozbudować „Kiedy kwitnie lawenda" do 1200+ słów: tabela odmian × terminy, sekcja „w Wielkopolsce", status pola na żywo — jedyny artykuł z realnym potencjałem TOP-3.
- [ ] Title strony głównej z frazą „pole lawendowe" (obecnie go nie ma); dosypać `geo`/`openingHoursSpecification`/`publicAccess` do JSON-LD (po ustaleniu prawdziwych współrzędnych!); `Person` jako autor artykułów + `dateModified`; H2 w stopce → divy; kontrasty WCAG (honey → #9d7026, marquee → lav-500).
- [ ] Perf: `<Image />` dla hero (AVIF/WebP + srcset), self-host fontów (Fontsource), preload LCP.
- [ ] Beyond-code (kluczowe!): **Google Business Profile** z kategorią „Atrakcja turystyczna", cotygodniowe zdjęcia statusu pola w sezonie, NAP spójny wszędzie, zgłoszenie do mapy [lawenda.org](https://lawenda.org/), portal regionalny Gniezno/Poznań, QR na opinie na polu, katalogi PL.
- **Kryterium:** przed 06.2027 klaster lokalny zindeksowany; GBP żywy.

### FAZA 4 · „Sklep, który można pokazać" (po Faza 1–2; wg planu SKLEP-HEADLESS.md)
- [ ] Prawdziwe zdjęcia produktów + realne ceny + status dostępności — dopiero wtedy sklep wraca na /produkty.
- [ ] Stripe uruchamiamy, gdy jest co kupić; do tego czasu strona produktów ma CTA kontaktowe, nie martwy checkout.

### FAZA 5 · Cykl sezonowy (od wiosny 2027)
- 1–2 artykuły/mies. (tematy w STRATEGIA.md §4); status kwitnienia co tydzień (strona + FB/IG) — freshestness + powracalność; alert „pole kwitnie" mailowy z LeadForm; po sezonie: analiza GSC i doprawianie fraz.

---

## PROGNOZA (realistyczna, bez ściemy)

- Frazy ogrodowe (blog): TOP-10 pojedynczych w **3–5 mies.** — niska konkurencja, niski wolumen (1–3 tys./mies. razem).
- „lawenda gniezno": TOP-3 realne w **3–6 mies.** (brand + GBP wystarczą — brak silnego lokalnego gracza).
- „pole lawendowe wielkopolska", „sesje zdjęciowe lawenda": TOP-3 **osiągalne w sezonie 2027** (6–12 mies.), ALE wyłącznie pod warunkiem Faz 1–3 + żywego GBP. Bez zdjęć, opinii i klastera lokalnego — wieczne TOP-20.
- „kiedy kwitnie lawenda" ogólnopolsko: TOP-10–20 po rozbudowie; TOP-3 wymaga linków — SERP trzymają kb.pl/interia.

**Jedno zdanie na koniec:** kod i design są ponad konkurencją, ale strona sprzedaje miejsce, którego nie widać, ludzi, których nie ma, i ceny, których nie podano. Faza 0 i 1 nie wymagają ani jednej linijki kreatywnego kodu — wymagają decyzji i jednego dnia z aparatem. To jest praca na najbliższy tydzień.
