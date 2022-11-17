import PromiseRouter from "express-promise-router";

export const internalRouter = PromiseRouter();

internalRouter.get("/healthcheck", (_req, res) => {
  res.send("Healthy");
});
