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
            <div style={{ width: '70vw', margin: '0 auto' }}>
                {locale === 'en' ? (
                    <>
                        <img src="/circle_en/2.png" />
                        <img src="/circle_en/4.png" />
                        <img src="/circle_en/6.png" />
                        <img src="/circle_en/8.png" />
                        <img
                            src="/circle_en/10.png"
                            style={{ opacity: '0.5' }}
                        />
                        <img
                            src="/circle_en/12.png"
                            style={{ opacity: '0.5' }}
                        />
                        <img src="/circle_en/14.png" />
                        <img src="/circle_en/16.png" />
                    </>
                ) : (
                    <>
                        <img src="/circle_ja/1.png" />
                        <img src="/circle_ja/3.png" />
                        <img src="/circle_ja/5.png" />
                        <img src="/circle_ja/7.png" />
                        <img
                            src="/circle_ja/9.png"
                            style={{ opacity: '0.5' }}
                        />
                        <img
                            src="/circle_ja/11.png"
                            style={{ opacity: '0.5' }}
                        />
                        <img src="/circle_ja/13.png" />
                        <img src="/circle_ja/15.png" />
                    </>
                )}
            </div>
            <ContactComponent needsTitle={false} />
            <Footer />
        </div>
    );
};

export default DeepCircle;
