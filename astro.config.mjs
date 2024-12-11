// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";
import { transformerNotationHighlight } from "@shikijs/transformers";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://rabius-sunny.vercel.app",
  integrations: [mdx(), sitemap(), react(), tailwind()],

  markdown: {
    shikiConfig: {
      themes: {
        light: "dracula",
        dark: "dracula",
      },
      transformers: [transformerNotationHighlight()],
    },
  },

  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },

  adapter: netlify(),
});