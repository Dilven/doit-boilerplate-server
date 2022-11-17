import express, { Request, Response } from "express";

import { cleanUp } from "./clean-up";
import { HTTPError } from "./helpers/errors";
import { exitProcessWithError, setupProcessHooks } from "./process";
import { apiRouter } from "./routes/api";
import { nextApp, nextRouter } from "./routes/next";

const port = 3000;
const expressApp = express();

expressApp.use("/api", apiRouter);
expressApp.use("/", nextRouter);

expressApp.use((_req, _res, next) => {
  next(new HTTPError(404));
});

expressApp.use((err: Error, _req: Request, res: Response) => {
  console.error(
    `Oops! Something went wrong 😢 ${err.message || JSON.stringify(err)}`
  );
  res.send();
  res.status(500).json({ message: err.message } || "");
});

const startApp = async () => {
  return new Promise((_resolve, reject) => {
    try {
      const server = expressApp.listen(port, async () => {
        console.info(`App listening at port: ${port}`);
        server.once("error", (err: Error) => reject(err));
      });
    } catch (err) {
      reject(err);
    }
  });
};

(async () => {
  try {
    setupProcessHooks(cleanUp());
    await nextApp.prepare();
    await startApp();
  } catch (error) {
    exitProcessWithError("uncaught_exception", error);
  }
})();
