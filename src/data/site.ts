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
  mapUrl: "https://www.google.com/maps/dir/?api=1&destination=Skrzetuszewo+31c%2C+62-265+Skrzetuszewo",
  mapEmbedUrl: "https://www.google.com/maps?q=Skrzetuszewo+31c%2C+62-265+Skrzetuszewo&output=embed",
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
  { href: "/kawiarnia", label: "Kawiarnia 2027" },
  { href: "/poradnik", label: "Poradnik" },
] as const;
