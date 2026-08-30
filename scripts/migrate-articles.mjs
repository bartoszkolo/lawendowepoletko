// Jednorazowa migracja: articles.ts (stary projekt Next) -> src/content/articles/*.md
// Node >= 23 czyta pliki .ts bez konfiguracji (type stripping), więc import działa wprost.
import { articles } from "./.ref/articles.ts";
import { mkdir, writeFile, readFile } from "node:fs/promises";

// Stabilne, rozłożone w czasie daty publikacji (SEO: świeżość + kolejność w RSS)
const dates = {
  "kiedy-kwitnie-lawenda": "2026-03-12",
  "kiedy-przycinac-lawende": "2026-03-26",
  "jak-suszyc-lawende": "2026-04-09",
  "jak-sadzic-lawende": "2026-04-23",
  "jaka-ziemia-do-lawendy": "2026-05-07",
  "jak-podlewac-lawende": "2026-05-21",
  "lawenda-w-donicy": "2026-06-04",
  "lawenda-zima": "2026-06-18",
  "olejek-lawendowy-a-hydrolat": "2026-07-02",
};

const outDir = new URL("../src/content/articles/", import.meta.url);
await mkdir(outDir, { recursive: true });

for (const a of articles) {
  let md = `---
title: "${a.title.replace(/"/g, '\\"')}"
description: "${a.description.replace(/"/g, '\\"')}"
category: "${a.category}"
pubDate: "${dates[a.slug] ?? "2026-06-01"}"
readTime: "${a.readTime}"
---

${a.intro}
`;

  for (const s of a.sections) {
    md += `\n## ${s.title}\n\n`;
    for (const p of s.paragraphs) md += `${p}\n\n`;
    if (s.bullets) md += s.bullets.map((b) => `- ${b}`).join("\n") + "\n\n";
  }

  await writeFile(new URL(`${a.slug}.md`, outDir), md.trimEnd() + "\n", "utf8");
  console.log("✓", a.slug);
}

// sanity check
const files = await readFile(new URL("kiedy-kwitnie-lawenda.md", outDir), "utf8");
console.log("\npierwszy plik, pierwsze linie:\n" + files.split("\n").slice(0, 8).join("\n"));
