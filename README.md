# Lawendowe Poletko — strona (Astro)

Oficjalny serwis **lawendowepoletko.pl** — rodzinne pole lawendy w Skrzetuszewie
pod Gnieznem. Wersja 1: strona wizytowa + blog (poradnik), przygotowana pod
rozbudowę o sklep, newsletter i rezerwacje.

**Plan rozwoju, SEO i social media:** [docs/STRATEGIA.md](docs/STRATEGIA.md)

## Stack

Astro 5 · Tailwind CSS 4 · markdown (content collections) · Cloudflare Pages

## Komendy

```bash
npm install        # raz
npm run dev        # http://localhost:4321
npm run build      # produkcyjny build do dist/
npm run preview    # podgląd dist/
```

## Struktura

```
src/
  data/site.ts          ← telefon, adres, social media (jedno miejsce do zmian)
  styles/global.css     ← kolory i fonty w @theme
  layouts/Base.astro    ← <head>, SEO, JSON-LD
  components/           ← Header, Footer, PageHero, Sprig (logo), FieldArt (ilustracje)
  pages/                ← index, o-nas, odwiedz, sesje, produkty, kontakt, 404
  pages/poradnik/       ← blog: index + [slug]
  content/articles/     ← ARTYKUŁY (markdown z frontmatterem)
public/                 ← pole.jpg (hero), og.jpg (udostępnianie), favicon, robots.txt
scripts/capture.mjs     ← zrzuty QA wszystkich stron do .shots/ (wymaga uruchomionego preview)
docs/STRATEGIA.md       ← strategia: stack, konkurencja, SEO, social, roadmapa
```

## Dodanie artykułu

Utwórz `src/content/articles/moj-temat.md`:

```md
---
title: "Tytuł artykułu"
description: "Opis do Google — 140–160 znaków."
category: "Uprawa"
pubDate: "2026-09-15"
readTime: "6 min"
---

Wstęp artykułu…

## Nagłówek sekcji

Treść…
```

Build automatycznie zaktualizuje listę na /poradnik, sitemap i RSS.

## Wdrożenie

`npm run build` → zawartość `dist/` do projektu Cloudflare Pages
`lawendowe-poletko` (Direct Upload) — domena lawendowepoletko.pl zostaje bez zmian.

## Przed publicznym launchem — checklista

- [ ] Google Business Profile + Search Console (sitemap) — szczegóły w STRATEGIA.md §4
- [ ] polityka prywatności / cookies (przy analityce obowiązkowa)
- [ ] podmiana ilustracji SVG na prawdziwe zdjęcia pola i produktów
- [ ] aktualizacja chipu „Status sezonu" (`src/pages/index.astro` + `odwiedz.astro`)
