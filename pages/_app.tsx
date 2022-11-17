import type { AppProps } from "next/app";
import Head from "next/head";

import { Navigation } from "@/components/Navigation";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Data marketplace</title>
        <meta name="description" content="App data marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
};

export default App;
