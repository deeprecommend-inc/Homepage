import Head from "next/head";
import DeepLogComponents from "../components/custom/DeepLog";
import { NextSeo } from "next-seo";
import { useLocale } from "../locales/useLocale";

export default function Home() {
  const { t } = useLocale();

  return (
    <div>
      <Head>
        <title>
          {t.deeplog.head.title}
        </title>
        <meta
          name="description"
          content={t.deeplog.head.description}
        />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <DeepLogComponents />
    </div>
  );
}
