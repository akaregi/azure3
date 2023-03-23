import Head from "next/head";
import styles from "@/styles/Works.module.css";

import WorksContent from "@/docs/Works.mdx";

export default function Works() {
  return (
    <>
      <Head>
        <title>Works - AZURE.ICU</title>
      </Head>
      <main className={styles.main}>
        <WorksContent />
      </main>
    </>
  );
}
