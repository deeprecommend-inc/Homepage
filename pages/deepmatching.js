import Head from "next/head";
import DeepMatchingComponents from "../components/custom/DeepMatching";
import { NextSeo } from "next-seo";
import { useLocale } from "../locales/useLocale";

export default function DeepMatching() {
  const { t } = useLocale();

  return (
    <div>
      <Head>
        <title>
         {t.deepmatching.head.title}
        </title>
        <meta
          name="description"
          content={t.deepmatching.head.description}
        />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <DeepMatchingComponents />
    </div>
  );
}
