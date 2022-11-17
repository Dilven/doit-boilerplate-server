// example of react-query keys
export const entitiesKeys = {
  all: ["ENTITIES"],
  list: (query: unknown) =>
    [...entitiesKeys.all, query] as const,
};
