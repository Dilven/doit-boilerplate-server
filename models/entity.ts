import { entitySchema } from "schema/entity";
import { z } from "zod";

export type Entity = z.infer<typeof entitySchema>