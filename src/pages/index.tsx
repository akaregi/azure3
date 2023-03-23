import Head from "next/head";
import styles from "@/styles/Home.module.css";

import HomeContent from "@/docs/Home.mdx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - AZURE.ICU</title>
      </Head>
      <main className={styles.main}>
        <HomeContent />
      </main>
    </>
  );
}
