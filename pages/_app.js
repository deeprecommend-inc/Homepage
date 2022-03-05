import "../styles/scss/style.scss";
import Layout from "../layout/Layout";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta
          name="google-site-verification"
          content="Z6Rl8fnfOf9kvou18ZpxZmvW9HXWzt1p5uF_g35TPjw"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
