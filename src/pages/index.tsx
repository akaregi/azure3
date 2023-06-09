import Head from "next/head";
import HomeContent from "@/docs/Home.md";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - AZURE.ICU</title>
      </Head>

      <HomeContent />
    </>
  );
}
