import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import BlogContent from '../../components/blog/BlogContent';
import { imgUrl, site } from '../../constants/const';
import { useLocale } from '../../locales/useLocale';
import { NextSeo } from 'next-seo';
import Adsense from '../../components/Adsense';

const Post = () => {
    const router = useRouter();
    const { pid } = router.query;
    const { t, locale } = useLocale();
    const detail = useSelector(state => state.blogDetail.blogDetail);

    return (
        <div>
            <NextSeo
                title={'DeepLab' + ' | ' + detail.title}
                description={
                    'DeepLab' +
                    ' | ' +
                    detail.body?.replace(/\n/, '').slice(0, 50) +
                    '...'
                }
                canonical={site.home + '/lab' + detail.id}
                openGraph={{
                    url: site.home + '/lab' + detail.id,
                    title: detail.title,
                    description:
                        detail.body?.replace(/\n/, '').slice(0, 50) + '...',
                    type: 'website',
                    locale: locale,
                    images: [
                        {
                            url: imgUrl.deeplab,
                            width: 800,
                            height: 600,
                            alt: 'DeepLab',
                            type: 'image/png',
                        },
                        {
                            url: imgUrl.deeplab,
                            width: 1600,
                            height: 900,
                            alt: 'DeepLab',
                            type: 'image/png',
                        },
                        { url: imgUrl.deeplab },
                    ],
                    site_name: 'DeepLab',
                }}
                twitter={{
                    handle: '@DeepRecommend',
                    site: '@DeepRecommend',
                    cardType: 'summary',
                }}
            />

            <BlogContent detail={detail} sx={{ background: '#EDF2F7' }} />
            <Adsense />
        </div>
    );
};

export default Post;
