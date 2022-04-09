import "../styles/scss/style.scss";
import Layout from "../layout/Layout";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore } from '../store';
import { useLocale } from "../locales/useLocale";
import { site } from "../constants/const";
import deeprecommendImg from "../assets/images/deeprecommend/DeepRecommend.png";

function MyApp({ Component, pageProps }) {
  const store = useStore()
  const { t, locale } = useLocale();
  const persistor = persistStore(store)

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
      <Provider store={store}>
      <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </Layout>
  );
}

export default MyApp;
