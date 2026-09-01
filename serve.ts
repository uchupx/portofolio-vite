import { file, serve } from "bun";
import { join } from "path";

const BUILD_DIR = "./build";
const PORT = Number(process.env.PORT) || 4173;

const mimeTypes: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js":   "application/javascript",
  ".css":  "text/css",
  ".json": "application/json",
  ".png":  "image/png",
  ".jpg":  "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg":  "image/svg+xml",
  ".ico":  "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2":"font/woff2",
  ".ttf":  "font/ttf",
  ".eot":  "application/vnd.ms-fontobject",
};

function getMime(path: string): string {
  const ext = path.slice(path.lastIndexOf("."));
  return mimeTypes[ext] ?? "application/octet-stream";
}

serve({
  port: PORT,
  hostname: "0.0.0.0",
  async fetch(req) {
    const url = new URL(req.url);
    let pathname = url.pathname === "/" ? "/index.html" : url.pathname;

    // Try exact file first
    const exactPath = join(BUILD_DIR, pathname);
    const exactFile = file(exactPath);
    if (await exactFile.exists()) {
      return new Response(exactFile, {
        headers: {
          "Content-Type": getMime(pathname),
          "Cache-Control": pathname.includes("/assets/")
            ? "public, max-age=31536000, immutable"  // hash-named assets can be cached forever
            : "no-cache",
        },
      });
    }

    // SPA fallback → index.html
    return new Response(file(join(BUILD_DIR, "index.html")), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  },
});

console.log(`🚀  Serving on http://0.0.0.0:${PORT}`);
