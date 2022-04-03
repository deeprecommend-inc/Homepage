import Head from "next/head";
import DeepLogComponents from "../components/custom/DeepLog";
import { NextSeo } from "next-seo";
import { useLocale } from "../locales/useLocale";
import { site } from '../constants/const';
import deeplogImg from "../assets/images/deeprecommend/deeplog.png";

export default function DeepLog() {
  const { t, locale } = useLocale();

  return (
    <div>
      <NextSeo
        title={t.deeplog.head.title}
        description={t.deeplog.head.description}
        canonical={site.home + '/deepmatching'}
        openGraph={{
          url: site.home,
          title: t.index.head.title,
          description: t.index.head.description,
          type: "website",
          locale: locale,
          images: [
            {
              url: deeplogImg,
              width: 800,
              height: 600,
              alt: 'DeepRecommend',
              type: 'image/png',
            },
            {
              url: deeplogImg,
              width: 900,
              height: 800,
              alt: 'DeepRecommend',
              type: 'image/png',
            },
            { url: deeplogImg },
          ],
          site_name: "DeepRecommend",
        }}
      />
      <DeepLogComponents />
    </div>
  );
}
