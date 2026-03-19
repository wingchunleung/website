// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://wingchunleung.github.io',
  base: '/website',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [preact()],
});