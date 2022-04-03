import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import BlogContent from '../../components/blog/BlogContent'
import { site } from '../../constants/const'
import { useLocale } from '../../locales/useLocale'
import { NextSeo } from "next-seo";

const Post = () => {
  const router = useRouter()
  const { pid } = router.query
  const { t, locale } = useLocale();
  const detail = useSelector(state => state.blogDetail.blogDetail)

  return (
    <div>
      <NextSeo
        title={'DeepLab' + ' | ' + detail.title}
        description={'DeepLab' + ' | ' + detail.body?.replace(/\n/, '').slice(0, 50) + '...'}
        canonical={site.home + '/lab' + detail.id}
        openGraph={{
          url: site.home + '/lab' + detail.id,
          title: detail.title,
          description: detail.body?.replace(/\n/, '').slice(0, 50) + '...',
          type: "website",
          locale: locale,
          images: [
            {
              url: './DeepLab.png',
              width: 1600,
              height: 900,
              alt: 'DeepRecommend',
              type: 'image/png',
            },
          ],
          site_name: "DeepRecommend",
        }}
      />
      <BlogContent detail={detail} />
    </div>
  )
}

export default Post;