// Wspólne dane witryny — jedno źródło prawdy (telefon, adres, social media)
export const SITE = {
  name: "Lawendowe Poletko",
  domain: "lawendowepoletko.pl",
  tagline: "Hektar lawendy pod Gnieznem",
  phoneDisplay: "505 027 868",
  phoneHref: "tel:+48505027868",
  phoneIntl: "+48505027868",
  email: "kontakt@lawendowepoletko.pl",
  street: "Skrzetuszewo 31c",
  postalCode: "62-265",
  locality: "Skrzetuszewo",
  region: "wielkopolskie",
  mapUrl: "https://maps.google.com/?q=Skrzetuszewo+31c,+62-265+Skrzetuszewo",
  socials: {
    facebook: "https://www.facebook.com/lawendowepoletko/",
    instagram: "https://www.instagram.com/lawendowe_poletko/",
    tiktok: "https://www.tiktok.com/@lawendowepoletkoPL",
  },
} as const;

export const NAV = [
  { href: "/o-nas", label: "O nas" },
  { href: "/odwiedz", label: "Odwiedź" },
  { href: "/sesje", label: "Sesje" },
  { href: "/produkty", label: "Produkty" },
  { href: "/poradnik", label: "Poradnik" },
] as const;
