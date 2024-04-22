import React from 'react';
import Head from 'next/head';
import { useLocale } from '../locales/useLocale';
import HeaderComponent from '../components/custom/sections/headercomponent';
import { NextSeo } from 'next-seo';
import { imgUrl, site } from '../constants/const';
import ContactComponent from '../components/custom/sections/contact';
import Footer from '../layout/footer/Footer';
import CallToAction from '../components/call-to-action/CallToAction';
import Banner2 from '../components/banner/Banner2';
import PortfolioComponent from '../components/custom/sections/portfoliocomponent';
import TechnologyUsed from '../components/custom/sections/technologyUsed';
import BannerComponent from '../components/custom/sections/bannercomponent';
import FormBannerComponent from '../components/custom/sections/formbannercomponent';
import WorkComponent from '../components/custom/sections/workcomponent';
import TestimonialComponent from '../components/custom/sections/testimonialcomponent';
import FeatureComponent from '../components/custom/sections/featurecomponent';
import PricingComponent from '../components/custom/sections/pricingcomponent';
import TwitterEmbedded from '../components/custom/sections/twitter';
import SDGsComponent from '../components/custom/sections/SDGs';
import TeamComponent from '../components/custom/sections/teamcomponent';
import {
    C2aComponent,
    OnlyAskForQuestion,
} from '../components/custom/sections/c2acomponent';
import BlogComponent from '../components/custom/sections/blogcomponent';
import BannerComponentForDeepLog from '../components/custom/sections/bannercomponentForDeepLog';
import MagazineContentsComponent from '../components/custom/sections/MagazineContents';
import RegisterMagazineComponent from '../components/custom/sections/RegisterMagazineComponent';
import BannerComponentForDeepMagazine from '../components/custom/sections/BannerForDeepMagazine';

const DeepMagazine = () => {
    const { t, locale } = useLocale();

    return (
        <>
            <NextSeo
                title={t.page.deepmagazine.title}
                description={t.page.deepmagazine.h1}
                canonical={site.home + '/magazine'}
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
                            widthg: 900,
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
            <HeaderComponent />
            <BannerComponentForDeepMagazine />
            {/* <MagazineContentsComponent /> */}
            {/* <FeatureComponent /> */}
            {/* <TestimonialComponent /> */}
            {/* <RegisterMagazineComponent /> */}

            <Footer />
        </>
    );
};

export default DeepMagazine;
