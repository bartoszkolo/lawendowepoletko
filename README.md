# Lawendowe Poletko — wizytówka (strona tymczasowa)

Jednoplikowa strona-wizytówka na czas, gdy powstaje pełny serwis.
Czyste HTML + CSS, **zero builda** — wrzucasz folder i działa.

Zawartość:
- `index.html` — cała strona
- `pole.jpg` — zdjęcie z drona (tło)
- `og.jpg` — miniaturka do udostępniania linku (Facebook/Messenger)
- `favicon.svg` — ikonka w karcie przeglądarki

## Podgląd lokalnie

Otwórz `index.html` w przeglądarce, albo:

```bash
python -m http.server 3310 --directory .
```

## Publikacja na domenie (Cloudflare Pages)

Najprościej — **Direct Upload**, bez GitHuba:

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Upload assets**
2. Nazwa projektu, np. `lawendowe-poletko`
3. Przeciągnij **zawartość tego folderu** (nie folder — same pliki) i **Deploy**
4. **Custom domains** → dodaj `lawendowepoletko.pl` oraz `www.lawendowepoletko.pl`

Gdy pełna strona będzie gotowa, podmieniasz ten sam projekt Pages na
właściwy build z repo — domena zostaje bez zmian.

## Do ewentualnej podmiany

- adres e-mail, telefon i adres są wpisane wprost w `index.html`
- wszystkie trzy odnośniki social są w sekcji `<ul class="socials">`
