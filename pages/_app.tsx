import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import Head from "next/head";

import { Navigation } from "@/components/Navigation";
import { config } from "@/config/react-query";

const queryClient = new QueryClient(config);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Data marketplace</title>
          <meta name="description" content="App data marketplace" />
        </Head>
        <Navigation />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
