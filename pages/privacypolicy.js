import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";
import { NextSeo } from "next-seo";
import HeaderComponent from "../components/custom/sections/headercomponent";
import { useLocale } from "../locales/useLocale";

export const PrivacyPolicy = () => {
  const { t } = useLocale();

  return (
    <div>
      <Head>
        <title>{t.privacyPolicy.head.title}</title>
        <meta name="description" content={t.privacyPolicy.head.description} />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <HeaderComponent localePath={'/privacypolicy'} />
      <div style={{ maxWidth: "750px", margin: "64px auto", whiteSpace: 'normal' }}>
      <h1 style={{ margin: "35px 0 30px" }}>{t.privacyPolicy.title}</h1>
        <span
            dangerouslySetInnerHTML={{ __html: t.privacyPolicy.content }}
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
