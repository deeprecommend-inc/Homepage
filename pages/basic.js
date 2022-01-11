import Head from "next/head";
import Components from "../components/basic/AllComponents";

export default function Basic() {
  return (
    <div>
      <Head>
        <title>DeepRecommend</title>
        <meta name="description" content="DeepRecommend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Components />
    </div>
  );
}
