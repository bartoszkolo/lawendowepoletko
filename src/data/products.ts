import type { ImageMetadata } from "astro";
import oilImage from "../assets/products/olejek-lawendowy.png";
import hydrosolImage from "../assets/products/hydrolat-lawendowy.png";
import soapImage from "../assets/products/mydlo-lawendowe.png";
import candleImage from "../assets/products/swieca-lawendowa.png";
import diffuserImage from "../assets/products/dyfuzor-lawendowy.png";

export type ProductCard = {
  handle: string;
  name: string;
  description: string;
  size: string;
  price: string;
  image: ImageMetadata;
  imageAlt: string;
  stripePaymentUrl?: string;
};

/**
 * Lokalne dane są źródłem demonstracyjnego katalogu. Stabilny `handle` łączy
 * produkt z właściwą zmienną PUBLIC_STRIPE_*_URL i może później posłużyć jako
 * identyfikator w zamówieniach lub systemie magazynowym.
 */
export const PRODUCTS: ProductCard[] = [
  {
    handle: "olejek-lawendowy",
    name: "Olejek lawendowy",
    description: "Skoncentrowany, naturalny aromat lawendy w butelce z wygodnym kroplomierzem.",
    size: "10 ml",
    price: "29,00 zł",
    image: oilImage,
    imageAlt: "Demonstracyjna butelka olejku lawendowego w otoczeniu lawendy",
    stripePaymentUrl: import.meta.env.PUBLIC_STRIPE_OLEJEK_URL,
  },
  {
    handle: "hydrolat-lawendowy",
    name: "Hydrolat lawendowy",
    description: "Delikatna woda lawendowa w atomizerze — świeża, lekka i wygodna w użyciu.",
    size: "100 ml",
    price: "24,00 zł",
    image: hydrosolImage,
    imageAlt: "Demonstracyjna butelka hydrolatu lawendowego z atomizerem",
    stripePaymentUrl: import.meta.env.PUBLIC_STRIPE_HYDROLAT_URL,
  },
  {
    handle: "mydlo-lawendowe",
    name: "Mydło lawendowe",
    description: "Ręcznie przygotowywana kostka o łagodnym zapachu i lawendowym charakterze.",
    size: "około 100 g",
    price: "19,00 zł",
    image: soapImage,
    imageAlt: "Demonstracyjna kostka mydła lawendowego na ceramicznej podstawce",
    stripePaymentUrl: import.meta.env.PUBLIC_STRIPE_MYDLO_URL,
  },
  {
    handle: "swieca-lawendowa",
    name: "Świeca lawendowa",
    description: "Nastrojowa świeca w bursztynowym szkle, stworzona z myślą o spokojnych wieczorach.",
    size: "180 ml",
    price: "39,00 zł",
    image: candleImage,
    imageAlt: "Demonstracyjna świeca lawendowa w bursztynowym szkle",
    stripePaymentUrl: import.meta.env.PUBLIC_STRIPE_SWIECA_URL,
  },
  {
    handle: "dyfuzor-lawendowy",
    name: "Dyfuzor zapachowy",
    description: "Domowy zapach z naturalnymi patyczkami, który powoli uwalnia lawendowy aromat.",
    size: "100 ml",
    price: "49,00 zł",
    image: diffuserImage,
    imageAlt: "Demonstracyjny lawendowy dyfuzor zapachowy z patyczkami",
    stripePaymentUrl: import.meta.env.PUBLIC_STRIPE_DYFUZOR_URL,
  },
];
