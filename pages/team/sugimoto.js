import Head from 'next/head';
import DeepLogComponents from '../../components/custom/DeepLog';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { useLocale } from '../../locales/useLocale';
import { imgUrl, site } from '../../constants/const';
import Sugimoto from '../../components/teams/Sugimoto';
import HeaderComponent from '../../components/custom/sections/headercomponent';

export default function DeepLog() {
    const { t, locale } = useLocale();

    return (
        <div>
            <NextSeo
                title={t.teams.sugimoto.head.title}
                description={t.teams.sugimoto.head.description}
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
            <ArticleJsonLd
                url="https://deep-recommend.com/team/sugimoto"
                title={t.teams.sugimoto.head.title}
                images="/sugimoto.jpg"
                datePublished="9/16/2022"
                dateModified="9/16/2022"
                authorName={t.teams.sugimoto.head.title}
                publisherName="DeepRecommend"
                publisherLogo="/logo.jpg"
                description={t.teams.sugimoto.head.description}
            />
            <HeaderComponent />
            <Sugimoto />
        </div>
    );
}
