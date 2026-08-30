// Pełnostronicowe zrzuty wszystkich stron do .shots/ (do weryfikacji wizualnej)
// Używa lokalnego Chrome/Edge — bez pobierania przeglądarki przez Playwright.
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const BASE = "http://localhost:4321";
const OUT = new URL("../.shots/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

const pages = [
  ["01-home", "/"],
  ["02-o-nas", "/o-nas"],
  ["03-odwiedz", "/odwiedz"],
  ["04-sesje", "/sesje"],
  ["05-produkty", "/produkty"],
  ["06-kontakt", "/kontakt"],
  ["07-poradnik", "/poradnik"],
  ["08-artykul", "/poradnik/kiedy-kwitnie-lawenda"],
  ["09-404", "/nie-ma-takiej-podstrony"],
];

const browser = await chromium.launch({ channel: "chrome", headless: true });
await mkdir(OUT, { recursive: true });

async function shoot(viewport, prefix, list) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  for (const [name, path] of list) {
    await page.goto(BASE + path, { waitUntil: "networkidle" }).catch(() => page.goto(BASE + path));
    await page.evaluate(() => {
      document.documentElement.style.scrollBehavior = "auto";
      const header = document.querySelector("[data-header]");
      if (header) header.style.position = "absolute";
    });
    await page.addStyleTag({ content: "*,*::before,*::after{transition:none!important;animation:none!important}" });
    await page.evaluate(() =>
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible")),
    );
    await page.waitForTimeout(700);
    const file = `${OUT}${prefix}${name}.png`;
    await page.screenshot({ path: file, fullPage: true });
    const h = await page.evaluate(() => document.documentElement.scrollHeight);
    console.log("✓", `${prefix}${name}.png`, `${h}px`);
  }
  await ctx.close();
}

await shoot({ width: 1440, height: 900 }, "", pages);
await shoot({ width: 390, height: 844 }, "mobile-", [["10-home-mobile", "/"]]);

await browser.close();
console.log("done");
