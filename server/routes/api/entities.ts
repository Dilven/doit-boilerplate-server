import PromiseRouter from "express-promise-router";

import { Entity } from "@/models/entity";

export const entitiesRouter = PromiseRouter();

// just example of endpoint
entitiesRouter.get("/", (_req, res) => {
  // const data = [{ id: 1 }, { id: 2 }] satisfies Entity[]
  const data: Entity[] = [{ id: 1 }, { id: 4 }];
  res.json(data);
});
