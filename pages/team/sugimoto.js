import Head from 'next/head';
import DeepLogComponents from '../../components/custom/DeepLog';
import { NextSeo } from 'next-seo';
import { useLocale } from '../../locales/useLocale';
import { imgUrl, site } from '../../constants/const';
import Sugimoto from '../../components/teams/Sugimoto';
import HeaderComponent from '../../components/custom/sections/headercomponent';

export default function DeepLog() {
    const { t, locale } = useLocale();

    return (
        <div>
            <NextSeo
                title={t.deeplog.head.title}
                description={t.deeplog.head.description}
                canonical={site.home + '/team/sugimoto'}
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
            <Sugimoto />
        </div>
    );
}
