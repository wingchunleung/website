// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Repo is wingchunleung/wingchunleung.github.io (user-page repo);
  // serves at https://wingchunleung.github.io/ root, so no base path.
  // Earlier `base: '/website'` was a relic from when the repo was named
  // `website`; gh-pages branch papered over it with hand-edited paths.
  site: 'https://wingchunleung.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [preact(), sitemap()],
});