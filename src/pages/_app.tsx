import Header from "@/components/Header";
import Menu from "@/components/Menu";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/dist/client/link";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Component {...pageProps} />

      <footer>
        <p>(C) 2023 WWW.AZURE.ICU All rights reserved.</p>
      </footer>
    </>
  );
}
