# Sklep Stripe — decyzja i plan wdrożenia

## Decyzja

Zachowujemy obecną stronę Astro jako katalog i warstwę marki. Każdy produkt
otrzyma osobny Stripe Payment Link, a Stripe przejmie bezpieczne zebranie
płatności i danych kupującego. Na tym etapie nie uruchamiamy Shopify ani
własnego backendu e-commerce.

## Dlaczego Stripe Payment Links

- brak miesięcznego abonamentu za platformę sklepową,
- płatność tylko za faktycznie zrealizowane transakcje,
- szybki start dla kilku produktów,
- BLIK, karty i portfele elektroniczne w checkout Stripe,
- brak przechowywania danych kart na naszej stronie,
- obecny wygląd strony pozostaje bez zmian.

## Przygotowane w kodzie

Produkty znajdują się w `src/data/products.ts`. Każdy wpis zawiera nazwę,
opis, pojemność, cenę demonstracyjną, zdjęcie, stabilny `handle` oraz opcjonalny
`stripePaymentUrl` pobierany ze zmiennej środowiskowej.

Jeżeli link Stripe nie jest skonfigurowany, karta pokazuje „Płatności wkrótce”.
Po dodaniu linku przycisk automatycznie zmienia się na „Kup przez Stripe”.

## Uruchomienie sprzedaży

1. Zatwierdzić prawdziwy produkt, cenę, pojemność, skład i zdjęcia.
2. Utworzyć produkt i cenę w Stripe.
3. Utworzyć Payment Link z adresem dostawy oraz właściwymi metodami płatności.
4. Wkleić link do odpowiedniej zmiennej `PUBLIC_STRIPE_*_URL`.
5. Dodać regulamin sklepu, zasady dostawy, zwrotów i reklamacji.
6. Wykonać zakup testowy i sprawdzić potwierdzenia oraz realizację zamówienia.

## Ograniczenia

Stripe Payment Links nie zastępuje pełnego systemu magazynowego. Przy kilku
produktach stany i realizację można prowadzić ręcznie. Jeżeli liczba zamówień,
wariantów i kanałów sprzedaży znacząco wzrośnie, wtedy można rozważyć Shopify,
Medusa albo inny silnik handlowy bez zmiany obecnego designu.
