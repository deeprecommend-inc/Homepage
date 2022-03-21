import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DeepRecommend</title>
        <meta
          name="description"
          content="We recommend products by creativity and objectivity"
        />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <CustomComponents />
    </div>
  );
}
