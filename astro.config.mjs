import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://jamesholland22.github.io',
  base: '/jamesholland-com',
  integrations: [mdx()],
});
