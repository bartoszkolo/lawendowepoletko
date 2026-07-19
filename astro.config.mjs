// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/data/site.js';

export default defineConfig({
  site: site.url,
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
