import { defineConfig } from "astro/config";
import embeds from "astro-embed/integration";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://0dot77.github.io",
  base: "/stage-design",
  integrations: [embeds(), mdx()],
});
