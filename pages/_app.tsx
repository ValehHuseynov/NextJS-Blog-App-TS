import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
