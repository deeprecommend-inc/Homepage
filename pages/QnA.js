import Head from 'next/head';
import CustomComponents from '../components/custom/Custom-components';
import { NextSeo } from 'next-seo';
import HeaderComponent from '../components/custom/sections/headercomponent';
import { useLocale } from '../locales/useLocale';
import { imgUrl, site } from '../constants/const';
import { useEffect } from 'react';
import router from 'next/router';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import Footer from '../layout/footer/Footer';

const CompanyOverview = () => {
    const { t, locale } = useLocale();

    const graphData = {
        labels: [
            ['2022', t.overview.november],
            ['2023', t.overview.november],
            ['2024', t.overview.november],
            ['2025', t.overview.november],
            ['2026', t.overview.november],
            ['2027', t.overview.november],
            ['2028', t.overview.november],
            ['2029', t.overview.november],
            ['2030', t.overview.november],
            // ['2031年', t.overview.november],
            // ['2032年', t.overview.november],
            // ['2033年', t.overview.november],
            // ['2034年', t.overview.november],
            // ['2035年', t.overview.november],
            // ['2036年', t.overview.november],
            // ['2037年', t.overview.november],
            // ['2038年', t.overview.november],
            // ['2039年', t.overview.november],
            // ['2040年', t.overview.november],
        ],
        datasets: [
            {
                data: [0],
                label: t.overview.sales,
            },
        ],
    };

    return (
        <>
            <NextSeo
                title={t.seo.QnA.head.title}
                description={t.seo.QnA.head.description}
                canonical={site.home + '/privacypolicy'}
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
            <HeaderComponent localePath={'/QnA'} />
            <div
                style={{
                    maxWidth: '750px',
                    margin: '64px auto',
                    whiteSpace: 'normal',
                    padding: '0 24px',
                }}
            >
                {t.QnA.map(o => (
                    <>
                        <h1 style={{ margin: '35px 0 30px' }}>{o.q}</h1>
                        <p>{o.a}</p>
                    </>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default CompanyOverview;
