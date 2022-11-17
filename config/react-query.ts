import {
  DefaultOptions,
  QueryClientConfig,
} from "@tanstack/react-query";

const THIRTY_MINUTES = 1000 * 60 * 30;

export const defaultOptions: DefaultOptions = {
  queries: {
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: true,

    staleTime: THIRTY_MINUTES,
  },
  mutations: {
    retry: false,
  },
};

export const config: QueryClientConfig = {
  defaultOptions,
};
