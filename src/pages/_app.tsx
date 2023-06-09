import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import styles from "@/styles/pages/App.module.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.wrapper_left}>
          <Menu />
        </div>

        <div className={styles.wrapper_right}>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
