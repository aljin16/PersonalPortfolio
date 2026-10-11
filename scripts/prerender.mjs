import { createServer } from "vite";
import { readFile, writeFile } from "node:fs/promises";
import React from "react";
import { renderToString } from "react-dom/server";
// Ship readable HTML even when JavaScript is disabled or cannot initialize.
const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
try {
  const { default: App } = await server.ssrLoadModule("/src/App.jsx");
  const html = await readFile("dist/index.html", "utf8");
  let markup = renderToString(React.createElement(App));
  const manifest = JSON.parse(
    await readFile("dist/.vite/manifest.json", "utf8"),
  );
  for (const [source, asset] of Object.entries(manifest)) {
    markup = markup.replaceAll(`/${source}`, `/${asset.file}`);
  }
  await writeFile(
    "dist/index.html",
    html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`),
  );
  console.log(
    "Prerendered portfolio HTML for immediate content and no-JavaScript access.",
  );
} finally {
  await server.close();
}
