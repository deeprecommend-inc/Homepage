import Head from 'next/head';
import CustomComponents from '../components/custom/Custom-components';
import { NextSeo } from 'next-seo';
import { useLocale } from '../locales/useLocale';
import React, { useState, useEffect } from 'react';
import { imgUrl, site } from '../constants/const';

export default function Home() {
    const { t, locale } = useLocale();
    const [ready, setReady] = useState(false);

    useEffect(() => {
        setReady(true);
    }, []);

    if (!ready) return <></>;

    return (
        <>
            <div>
                <NextSeo
                    title={t.index.head.title}
                    description={t.index.head.description}
                    canonical={site.home}
                    openGraph={{
                        url: site.home,
                        title: t.index.head.title,
                        description: t.index.head.description,
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
                <CustomComponents />
            </div>
        </>
    );
}
