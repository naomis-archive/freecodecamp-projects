import express from "express";
import { readFile } from "fs/promises";
import http from "http";
import https from "https";
import * as Sentry from "@sentry/node";
import { RewriteFrames } from "@sentry/integrations";
import { logHandler } from "./utils/logHandler";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
  integrations: [
    new RewriteFrames({
      root: global.__dirname,
    }),
  ],
});

(async () => {
  const app = express();

  // mount your middleware and routes here

  app.use("/", (req, res) => {
    res.send("hi");
  });

  const httpServer = http.createServer(app);

  const httpPort = process.env.NODE_ENV === "production" ? 80 : 8000;

  httpServer.listen(httpPort, () => {
    logHandler.log("http", `http server listening on port ${httpPort}`);
  });

  if (process.env.NODE_ENV === "production") {
    const privateKey = await readFile(
      "/etc/letsencrypt/live/example.com/privkey.pem",
      "utf8"
    );
    const certificate = await readFile(
      "/etc/letsencrypt/live/example.com/cert.pem",
      "utf8"
    );
    const ca = await readFile(
      "/etc/letsencrypt/live/example.com/chain.pem",
      "utf8"
    );

    const credentials = {
      key: privateKey,
      cert: certificate,
      ca: ca,
    };

    const httpsServer = https.createServer(credentials, app);

    httpsServer.listen(443, () => {
      logHandler.log("http", "https server listening on port 443");
    });
  }
})();
