// ─────────────────────────────────────────────────────────────
//  PANEL STEROWANIA STRONY
//  To jedyny plik, który musisz edytować, żeby zmienić dane
//  kontaktowe, ceny, godziny otwarcia i status kwitnienia.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Lawendowe Poletko',
  tagline: 'Hektar lawendy pod niebem',
  // TODO: podmień na docelową domenę przed publikacją
  url: 'https://lawendowe-poletko.pages.dev',
  description:
    'Lawendowe Poletko — rodzinne pole lawendy o powierzchni hektara. ' +
    'Zwiedzanie w sezonie kwitnienia, sesje zdjęciowe, warsztaty i produkty prosto z pola.',

  // TODO: uzupełnij prawdziwymi danymi
  contact: {
    phone: '+48 000 000 000',
    phoneDisplay: '000 000 000',
    email: 'kontakt@lawendowepoletko.pl',
    facebook: '',
    instagram: '',
  },

  // TODO: uzupełnij prawdziwym adresem — to jest kluczowe dla Google Maps
  address: {
    street: 'ul. Przykładowa 1',
    postalCode: '00-000',
    city: 'Miejscowość',
    region: 'wielkopolskie',
    // współrzędne pola (Google Maps → prawy klik → kopiuj współrzędne)
    lat: 52.5352,
    lng: 17.5825,
  },
};

// ─── Status kwitnienia ────────────────────────────────────────
// Najważniejsza informacja na całej stronie. Ludzie przyjeżdżają
// tylko wtedy, gdy lawenda kwitnie — aktualizuj to co tydzień
// w sezonie. Dozwolone: 'przed' | 'poczatek' | 'pelnia' | 'koniec' | 'po'
export const bloom = {
  stage: 'pelnia',
  updated: '2026-07-20',
  note: 'Pole jest w pełnym kwitnieniu — najlepszy moment na wizytę i zdjęcia.',
};

export const bloomLabels = {
  przed: { label: 'Jeszcze nie kwitnie', tone: 'wait' },
  poczatek: { label: 'Zaczyna kwitnąć', tone: 'soon' },
  pelnia: { label: 'Pełnia kwitnienia', tone: 'peak' },
  koniec: { label: 'Koniec kwitnienia', tone: 'soon' },
  po: { label: 'Po sezonie — pole ścięte', tone: 'wait' },
};

// ─── Zwiedzanie ───────────────────────────────────────────────
export const visiting = {
  season: 'czerwiec – lipiec',
  hours: [
    { days: 'poniedziałek – piątek', time: '10:00 – 19:00' },
    { days: 'sobota – niedziela', time: '9:00 – 20:00' },
  ],
  tickets: [
    { name: 'Bilet normalny', price: '20 zł', note: 'wstęp na pole, bez limitu czasu' },
    { name: 'Bilet ulgowy', price: '15 zł', note: 'dzieci 4–12 lat, seniorzy' },
    { name: 'Dzieci do 4 lat', price: 'gratis', note: '' },
    { name: 'Bilet rodzinny', price: '55 zł', note: '2 dorosłych + 2 dzieci' },
  ],
  rules: [
    'Chodzimy wyłącznie ścieżkami między rzędami — lawenda łatwo się łamie.',
    'Nie zrywamy kwiatów. Bukiet można kupić na miejscu w sklepiku.',
    'Psy mile widziane na smyczy.',
    'Nie wchodzimy na pole po deszczu — ziemia jest grząska.',
    'Drony tylko po wcześniejszym uzgodnieniu.',
  ],
  parking: 'Bezpłatny parking na łące przy wjeździe, ok. 30 miejsc.',
};

// ─── Sesje zdjęciowe ──────────────────────────────────────────
export const sessions = [
  {
    name: 'Sesja prywatna',
    price: 'od 150 zł',
    duration: '60 min',
    desc: 'Rodzinna, ciążowa, portretowa. Pole tylko dla Was, bez innych gości w kadrze.',
  },
  {
    name: 'Sesja ślubna i narzeczeńska',
    price: 'od 300 zł',
    duration: '90 min',
    desc: 'Najlepiej wcześnie rano lub w złotej godzinie przed zachodem słońca.',
  },
  {
    name: 'Sesja komercyjna',
    price: 'wycena indywidualna',
    duration: 'do ustalenia',
    desc: 'Zdjęcia produktowe, kampanie, materiały wideo.',
  },
];

// ─── Produkty ─────────────────────────────────────────────────
// Bez płatności online — zamówienia telefonicznie lub mailem.
export const products = [
  { name: 'Bukiet suszonej lawendy', price: 'od 15 zł', desc: 'Wiązany ręcznie, prosto z pola. Trzyma zapach ponad rok.', tag: 'bestseller' },
  { name: 'Susz lawendowy', price: '25 zł / 100 g', desc: 'Oczyszczone kwiaty do saszetek, wypieków i kąpieli.', tag: '' },
  { name: 'Olejek eteryczny', price: '45 zł / 10 ml', desc: 'Destylowany z naszego zbioru, 100% czysty olejek lawendowy.', tag: '' },
  { name: 'Hydrolat lawendowy', price: '30 zł / 200 ml', desc: 'Woda kwiatowa — tonik do twarzy, odświeżacz do pościeli.', tag: '' },
  { name: 'Saszetki zapachowe', price: '12 zł', desc: 'Lniane woreczki do szafy i samochodu. Ładny drobny prezent.', tag: '' },
  { name: 'Mydło lawendowe', price: '18 zł', desc: 'Warzone na zimno, z dodatkiem naszego suszu.', tag: '' },
  { name: 'Sadzonki lawendy', price: 'od 12 zł', desc: 'Odmiany sprawdzone w polskim klimacie. Dostępne wiosną i jesienią.', tag: 'sezonowe' },
  { name: 'Miód lawendowy', price: '40 zł / 400 g', desc: 'Z pasieki stojącej przy naszym polu.', tag: '' },
];

// ─── Wydarzenia i warsztaty ───────────────────────────────────
export const events = [
  {
    name: 'Warsztaty wiankowe',
    when: 'Soboty w sezonie, 11:00',
    price: '80 zł / osoba',
    desc: 'Zbierasz własną lawendę i wyplatasz wianek, który zabierasz do domu. Ok. 2 godziny, wszystkie materiały w cenie.',
  },
  {
    name: 'Warsztaty destylacji olejku',
    when: 'Wybrane niedziele, 12:00',
    price: '120 zł / osoba',
    desc: 'Pokazujemy, jak z kwiatu powstaje olejek i hydrolat. Każdy wychodzi z własną buteleczką.',
  },
  {
    name: 'Święto Lawendy',
    when: 'Drugi weekend lipca',
    price: 'wstęp w cenie biletu',
    desc: 'Dwa dni z muzyką na żywo, lokalnym jedzeniem i stoiskami rękodzieła w środku pola.',
  },
  {
    name: 'Grupy zorganizowane',
    when: 'Cały sezon, po rezerwacji',
    price: 'od 15 zł / osoba',
    desc: 'Wycieczki szkolne, koła gospodyń, wyjazdy integracyjne. Oprowadzanie po polu i opowieść o uprawie.',
  },
];

// ─── Nawigacja ────────────────────────────────────────────────
export const nav = [
  { href: '/zwiedzanie/', label: 'Zwiedzanie' },
  { href: '/sesje/', label: 'Sesje zdjęciowe' },
  { href: '/produkty/', label: 'Produkty' },
  { href: '/wydarzenia/', label: 'Wydarzenia' },
  { href: '/o-nas/', label: 'O nas' },
  { href: '/kontakt/', label: 'Kontakt' },
];
