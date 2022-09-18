import Head from 'next/head';
import CustomComponents from '../components/custom/Custom-components';
import { NextSeo } from 'next-seo';
import HeaderComponent from '../components/custom/sections/headercomponent';
import { useLocale } from '../locales/useLocale';
import { imgUrl, site } from '../constants/const';
import Footer from '../layout/footer/Footer';

export const PrivacyPolicy = () => {
    const { t, locale } = useLocale();

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
            <HeaderComponent localePath={'/privacypolicy'} />
            <div
                style={{
                    maxWidth: '750px',
                    margin: '64px auto',
                    whiteSpace: 'normal',
                    padding: '0 24px',
                }}
            >
                <h1 style={{ margin: '35px 0 30px' }}>
                    {t.privacyPolicy.title}
                </h1>
                <div
                    dangerouslySetInnerHTML={{
                        __html: t.privacyPolicy.content,
                    }}
                ></div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
