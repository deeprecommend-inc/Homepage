import Head from "next/head";
import DeepMatchingComponents from "../components/custom/DeepMatching";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          CmCn | Matching app for Matching app for comedians they are Bokeh and
          Tsukkomi
        </title>
        <meta
          name="description"
          content="CmCn is Matching app for Matching app for comedians they are Bokeh and
          Tsukkomi from DeepRecommend"
        />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <DeepMatchingComponents />
    </div>
  );
}
