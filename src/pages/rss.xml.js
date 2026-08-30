import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const articles = (await getCollection("articles")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
  return rss({
    title: "Lawendowy poradnik — Lawendowe Poletko",
    description: "Wiedza o lawendzie prosto z pola w Skrzetuszewie: uprawa, pielęgnacja, sezon i produkty.",
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.pubDate,
      link: `/poradnik/${article.id}/`,
      categories: [article.data.category],
    })),
    customData: "<language>pl-pl</language>",
  });
}
