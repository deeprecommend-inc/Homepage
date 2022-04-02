import Head from "next/head";
import { useLocale } from "../../locales/useLocale";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'

export default function Blog({ children, href }) {
  const { t } = useLocale();
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    router.push('/lab/web', undefined, { shallow: true })
  }, [])

  useEffect(() => {
    // The counter changed!
  }, [router.query.counter])

  if (!ready) return <></>;

  return (
    <div>
      <Head>
        <title>{t.index.head.title}</title>
        <meta name="description" content={t.index.head.description} />
        <link rel="icon" href="favicon.ico" />
      </Head>
    </div>
  );
}
