import Head from 'next/head';
import DeepBookComponents from '../components/custom/DeepBook';
import { NextSeo } from 'next-seo';
import { useLocale } from '../locales/useLocale';
import { imgUrl, site } from '../constants/const';

export default function DeepBook() {
    const { t, locale } = useLocale();

    return (
        <div>
            <NextSeo
                title={t.deepbook.head.title}
                description={t.deepbook.head.description}
                canonical={site.home + '/deepbook'}
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
                            type: 'image/jpg',
                        },
                        {
                            url: imgUrl.deeprecommend,
                            width: 900,
                            height: 800,
                            alt: 'DeepRecommend',
                            type: 'image/jpg',
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
            <DeepBookComponents />
        </div>
    );
}
