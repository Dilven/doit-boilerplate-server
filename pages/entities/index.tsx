import { useQuery } from "@tanstack/react-query";

import { entitiesKeys } from "@/constants/query-keys";
import { Api } from "@/services/api";

const Entities = () => {
  const { data, isLoading } = useQuery(entitiesKeys.list({}), Api.getEntities);
  if (!data || isLoading) return <div>loading...</div>;
  return <div>Entites: {data.map((d) => d.id).join(", ")}</div>;
};

export default Entities;
