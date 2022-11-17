import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import Head from "next/head";

import { Navigation } from "@/components/Navigation/Navigation";
import { config } from "@/config/react-query";
import { ThemeProvider } from "@/styles/theme";

const queryClient = new QueryClient(config);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Data marketplace</title>
        <meta name="description" content="App data marketplace" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Navigation />
          <Component {...pageProps} />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
