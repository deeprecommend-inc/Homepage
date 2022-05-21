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
        <div>
            <NextSeo
                title={t.privacyPolicy.head.title}
                description={t.privacyPolicy.head.description}
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
            <HeaderComponent localePath={'/aboutus'} />
            <div
                style={{
                    maxWidth: '750px',
                    margin: '64px auto',
                    whiteSpace: 'normal',
                }}
            >
                <h1 style={{ margin: '35px 0 30px' }}>{t.overview.title}</h1>
                <span
                    dangerouslySetInnerHTML={{ __html: t.overview.content }}
                />
                <h1 style={{ margin: '35px 0 30px' }}>
                    {t.overview.performance}
                </h1>
                <Bar data={graphData} />
            </div>

            <a href="./pdf/sample.pdf" download="sample.pdf">
                2022
            </a>
        </div>
    );
};

export default CompanyOverview;
