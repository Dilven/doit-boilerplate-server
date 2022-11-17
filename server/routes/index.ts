import PromiseRouter from "express-promise-router";
import expressCore from "express-serve-static-core";
import http from "http";

import { HTTPError } from "../helpers/errors";
import { internalRouter } from "./internal";

export const apiRouter = PromiseRouter();

apiRouter.use((_req, res, next) => {
  res.setHeader("Cache-Control", "max-age=0, no-store");

  next();
});

apiRouter.use("/internal", internalRouter);

apiRouter.use((_req, _res, next) => {
  next(new HTTPError(404));
});

apiRouter.use(
  (
    err: Partial<HTTPError>,
    _req: expressCore.Request<any, any, any>,
    res: expressCore.Response,
    _next: expressCore.NextFunction
  ) => {
    if (err.HTTPcode !== 404) console.error(err);

    const code = err.HTTPcode || 500;
    const result = {
      _error: {
        code,
        message:
          err.publicMessage || http.STATUS_CODES[code] || "Something Happened",
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
      },
    };
    res.status(code).json(result);
  }
);
