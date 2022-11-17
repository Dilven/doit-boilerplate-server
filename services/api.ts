import ky from "ky/umd";

import { Entity } from "@/models/entity";

const instanceApi = ky.create({ prefixUrl: "api" });

export const Api = Object.freeze({
  // example of api call
  getEntities: async () => {
    return await instanceApi.get("entities").json<Entity[]>();
  },
});
