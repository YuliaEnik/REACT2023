import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import process from "process";
import express from "express";
import compression from "compression";
import serveStatic from "serve-static";
import { ViteDevServer, createServer as createViteServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === "production";

const resolve = (p: string) => path.resolve(__dirname, p);
const PORT = 3000;

export async function createServer() {
  let vite: ViteDevServer;
  const app = express();

  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
    const assetsPath = resolve(isProd ? "dist/assets" : "static");

    app.use("/assets", express.static(assetsPath));
  } else {
    app.use(compression());
    app.use(
      serveStatic(resolve("dist/client"), {
        index: false,
      })
    );
  }

  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      let modelPage: string, render;
      if (!isProd) {
        modelPage = await readFile(
          path.resolve(__dirname, "index.html"),
          "utf-8"
        );
        modelPage = await vite.transformIndexHtml(url, modelPage);
        render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
      } else {
        modelPage = await readFile(resolve("dist/client/index.html"), "utf-8");

        render = (await vite.ssrLoadModule("/dist/server/entry-server.js"))
          .render;
      }

      await render(url, res, modelPage);
    } catch (e) {
      if (e instanceof Error) {
        !isProd && vite.ssrFixStacktrace(e);
        next(e);
      }
    }
  });

  app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
  });
}

createServer();
