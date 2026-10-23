import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// GitHub Pages only serves static files, so /projects/<slug> would 404 on a
// direct visit or a refresh. After the build, give every project page its own
// copy of index.html (so it loads with a 200) and add a 404.html fallback. The
// app reads the URL and shows the right page. Slugs come from data/projects.js.
function spaRoutes() {
  let root;
  let outDir;

  return {
    name: "spa-routes",
    apply: "build",
    configResolved(config) {
      root = config.root;
      outDir = resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const projects = readFileSync(resolve(root, "src/data/projects.js"), "utf8");
      const slugs = [...projects.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map(
        (match) => match[1]
      );
      const html = readFileSync(resolve(outDir, "index.html"));

      for (const slug of slugs) {
        const dir = resolve(outDir, "projects", slug);
        mkdirSync(dir, { recursive: true });
        writeFileSync(resolve(dir, "index.html"), html);
      }
      writeFileSync(resolve(outDir, "404.html"), html);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), spaRoutes()],
});
