import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { Navigation } from "@/components/Navigation/Navigation";
import { config } from "@/config/react-query";

const queryClient = new QueryClient(config);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
    <Head>
      <title>Data marketplace</title>
      <meta name="description" content="App data marketplace" />
    </Head>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Navigation />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
    </>
  );
};

export default App;
