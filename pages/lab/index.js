import Head from 'next/head';
import { useLocale } from '../../locales/useLocale';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { imgUrl, site } from '../../constants/const';

export default function Blog({ children, href }) {
    const { t, locale } = useLocale();
    const router = useRouter();
    const [ready, setReady] = useState(false);

    useEffect(() => {
        setReady(true);
        router.push('/lab/web', undefined, { shallow: true });
    }, []);

    useEffect(() => {
        // The counter changed!
    }, [router.query.counter]);

    if (!ready) return <></>;

    return (
        <>
            <Head>
                <title>{t.index.portfolio.deeplab.title}</title>
                <meta
                    name="description"
                    content={t.index.portfolio.deeplab.description}
                />
                <link rel="icon" href="favicon.ico" />
            </Head>
            <NextSeo
                title={t.index.head.title}
                description={t.index.head.description}
                canonical={site.deepLab}
                openGraph={{
                    url: site.deepLab,
                    title: t.index.portfolio.deeplab.title,
                    description: t.index.portfolio.deeplab.description,
                    type: 'website',
                    locale: locale,
                    images: [
                        {
                            url: imgUrl.deeprecommend,
                            width: 800,
                            height: 600,
                            alt: 'DeepRecommend',
                            type: 'image/png',
                        },
                        {
                            url: imgUrl.deeprecommend,
                            width: 900,
                            height: 800,
                            alt: 'DeepRecommend',
                            type: 'image/png',
                        },
                        { url: imgUrl.deeprecommend },
                    ],
                    site_name: 'DeepRecommend',
                }}
                twitter={{
                    handle: '@DeepRecommend',
                    site: '@DeepRecommend',
                    cardType: 'summary',
                }}
            />
        </>
    );
}
