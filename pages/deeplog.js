import Head from "next/head";
import DeepLogComponents from "../components/custom/DeepLog";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          DeepLog | System of website to manage the website like a music
          playlist
        </title>
        <meta
          name="description"
          content="DeepLog is  System of website to manage the website like a music
          playlist from DeepRecommend"
        />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <DeepLogComponents />
    </div>
  );
}
