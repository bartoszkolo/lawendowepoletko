# Lawendowe Poletko

Strona rodzinnego pola lawendy (ok. 1 ha). Astro, statyczny build, hosting na Cloudflare Pages.

## Uruchomienie lokalnie

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # produkcja → dist/
```

## Co edytujesz na co dzień

Prawie wszystko siedzi w jednym pliku: **`src/data/site.js`**.

| Chcę zmienić | Sekcja w `site.js` |
| --- | --- |
| telefon, e-mail, adres, social media | `site.contact`, `site.address` |
| **status kwitnienia** (najważniejsze!) | `bloom` |
| godziny otwarcia, ceny biletów, zasady | `visiting` |
| rodzaje i ceny sesji zdjęciowych | `sessions` |
| listę produktów i ceny | `products` |
| warsztaty i wydarzenia | `events` |

### Status kwitnienia

`bloom.stage` przyjmuje: `przed`, `poczatek`, `pelnia`, `koniec`, `po`.
To jedna rzecz, po którą ludzie wchodzą na stronę najczęściej — w sezonie
warto aktualizować co tydzień razem z `bloom.updated` i `bloom.note`.

## Zdjęcia

Dopóki nie ma prawdziwych zdjęć, komponent `Photo` rysuje stylizowane pole w SVG.
Żeby wstawić fotkę:

1. wrzuć plik do `public/foto/`,
2. w danej stronie zmień `<Photo label="..." />` na `<Photo src="/foto/nazwa.jpg" alt="opis" />`.

Zdjęcia przed wrzuceniem warto przeskalować do maks. 2000 px szerokości.

## Wdrożenie na Cloudflare Pages

1. Wypchnij repo na GitHub.
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Ustawienia builda:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Po pierwszym deployu podłącz własną domenę (**Custom domains**) i zmień
   `site.url` w `src/data/site.js` oraz adres sitemapy w `public/robots.txt`.

Każdy push na `main` deployuje się automatycznie.

## Do uzupełnienia przed publikacją

- [x] telefon i adres w `site.js`
- [ ] adres e-mail (teraz jest zmyślony placeholder `kontakt@lawendowepoletko.pl`)
- [ ] współrzędne pola (`site.address.lat` / `lng`) — opcjonalne, mapa działa bez nich
- [ ] realne ceny biletów, sesji i produktów
- [ ] zdjąć status „Tymczasowo zamknięte" z wizytówki Google
- [ ] zdjęcia z pola
- [ ] `public/og.jpg` (1200×630) — miniaturka do udostępniania na Facebooku
- [ ] wizytówka Google Business Profile podpięta pod ten adres
