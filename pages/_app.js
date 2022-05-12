import '../styles/scss/style.scss';
import Layout from '../layout/Layout';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from '../store';
import { useLocale } from '../locales/useLocale';
import { site } from '../constants/const';
import deeprecommendImg from '../assets/images/deeprecommend/DeepRecommend.png';
import { GA_ID, existsGaId, pageview } from '../utils/gtag';
import { useRouter } from 'next/router';
import $ from 'jquery';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
    const store = useStore();
    const { t, locale } = useLocale();
    const persistor = persistStore(store);
    const router = useRouter();

    useEffect(() => {
        AOS.init({
            once: true,
            easing: 'ease-out-sine',
            duration: 600,
        });
    }, []);

    useEffect(() => {
        $(window).on('load', function () {
            $('#splash').delay(1500).fadeOut('slow');
            $('#splash_logo').delay(1200).fadeOut('slow');
        });
    }, []);

    useEffect(() => {
        if (!existsGaId) {
            return;
        }

        const handleRouteChange = (path) => {
            pageview(path);
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <Layout>
            <Head>
                {/* Google Analytics */}
                {existsGaId && (
                    <>
                        <Script
                            id="gtag"
                            async
                            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                        />
                        <Script
                            id="gtag-content"
                            dangerouslySetInnerHTML={{
                                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });`,
                            }}
                        />
                    </>
                )}
                <meta
                    name="google-site-verification"
                    content="Z6Rl8fnfOf9kvou18ZpxZmvW9HXWzt1p5uF_g35TPjw"
                />
                <link
                    href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/reset.css"
                    rel="stylesheet"
                />
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2370440619895423"
                    crossOrigin="anonymous"
                ></script>
            </Head>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <div id="splash">
                        <div id="splash_logo">
                            <img src={'/logo.jpg'} alt="" className="fadeUp" />
                        </div>
                    </div>

                    <Component {...pageProps} />

                    <Script
                        id="jquery"
                        src="https://code.jquery.com/jquery-3.4.1.min.js"
                        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
                        crossOrigin="anonymous"
                    ></Script>
                    <Script
                        id="code-factory"
                        src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/4-1-4/js/4-1-4.js"
                    ></Script>
                </PersistGate>
            </Provider>
        </Layout>
    );
}

export default MyApp;
