import "../styles/scss/style.scss";
import Layout from "../layout/Layout";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Head from "next/head";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-out-sine",
      duration: 600,
    });
  }, []);

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
