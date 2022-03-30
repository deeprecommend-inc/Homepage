import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";
import { NextSeo } from "next-seo";
import { useLocale } from "../locales/useLocale";
import React, { useState, useEffect } from "react";

export default function Home() {
  const { t } = useLocale();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, [])

  if (!ready) return <></>;

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
