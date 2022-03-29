import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";
import { NextSeo } from "next-seo";
import { useLocale } from "../locales/useLocale";

export default function Home() {
  const { t } = useLocale();

  return (
    <div>
      <Head>
        <title>{t.index.head.title}</title>
        <meta name="description" content={t.index.head.description} />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <CustomComponents />
    </div>
  );
}
