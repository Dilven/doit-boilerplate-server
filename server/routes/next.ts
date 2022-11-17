import PromiseRouter from "express-promise-router";
import next from "next";
import { parse } from "url";

const dev = process.env.NODE_ENV !== "production";
export const nextApp = next({ dev });
const nextHandle = nextApp.getRequestHandler();

export const nextRouter = PromiseRouter();

nextRouter.use((req, res) => {
  const parsedUrl = parse(req.url!, true);
  nextHandle(req, res, parsedUrl);
});
