import React from 'react';
import Head from 'next/head';
import { useLocale } from '../locales/useLocale';
import HeaderComponent from '../components/custom/sections/headercomponent';
import { NextSeo } from 'next-seo';
import { imgUrl, site } from '../constants/const';
import PreRegistrationComponent from '../components/custom/sections/PreRegistration';
import Footer from '../layout/footer/Footer';
import CallToAction from '../components/call-to-action/CallToAction';
import BannerComponentForDeepLog from '.';
import BannerComponentForDeepia from '../components/custom/sections/BannerComponentForDeepia';
import PortfolioComponent from '../components/custom/sections/portfoliocomponent';
import OneCoinSourceCodeComponent from '../components/custom/sections/OncClinSourceCodeComponent';

const Deepia = () => {
    const { t, locale } = useLocale();

    return (
        <>
            <NextSeo
                title={t.contact.head.title}
                description={t.contact.head.description}
                canonical={site.home + '/contact'}
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
                            widthg: 900,
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
            <HeaderComponent />
            {/* <div style={{ width: '70vw', margin: '0 auto' }}>
                {locale === 'en' ? (
                    <>
                        <img src="/now_thinking/en.png" />
                    </>
                ) : (
                    <>
                        <img src="/now_thinking/ja.png" />
                    </>
                )}
            </div> */}
            <BannerComponentForDeepia />
            {/* <OneCoinSourceCodeComponent /> */}
            <PreRegistrationComponent />
            <Footer />
        </>
    );
};

export default Deepia;
