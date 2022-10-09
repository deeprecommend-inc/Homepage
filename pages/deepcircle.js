import React from 'react';
import Head from 'next/head';
import { useLocale } from '../locales/useLocale';
import HeaderComponent from '../components/custom/sections/headercomponent';
import { NextSeo } from 'next-seo';
import { imgUrl, site } from '../constants/const';
import ContactComponent from '../components/custom/sections/contact';
import Footer from '../layout/footer/Footer';
import CallToAction from '../components/call-to-action/CallToAction';

const DeepCircle = () => {
    const { t, locale } = useLocale();

    return (
        <div>
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
            <HeaderComponent />
            <div>
                <img src="/ai/1.png" />
                <img src="/ai/2.png" />
                <img src="/ai/3.png" />
                <img src="/ai/4.png" />
                <img src="/ai/5.png" style={{ opacity: '0.5' }} />
                <img src="/ai/6.png" style={{ opacity: '0.5' }} />
                <img src="/ai/7.png" />
            </div>
            <Footer />
        </div>
    );
};

export default DeepCircle;
