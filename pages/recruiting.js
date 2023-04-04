// チームメイト募集中

// ・長所と短所を一言で言い表せる方（全部正直で職能・得意・苦手など）
// ・DeepRecommend株式会社の企業価値向上に努めていただける方（報酬は高く設定する前提です）
// ・雇用形態が不確定でも大丈夫な方（アルバイト・正社員・業務委託 ※参加するだけの場合もあります）
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
import Banner from '../components/banner/Banner';

const DeepMagazine = () => {
    const { t, locale } = useLocale();

    return (
        <div id="container">
            <HeaderComponent />
            <Banner />
            <Banner2 />
            <PortfolioComponent />
            <BannerComponent />
            <FormBannerComponent />
            <TechnologyUsed />
            <WorkComponent />
            <TestimonialComponent />
            <FeatureComponent />
            <PricingComponent />
            <TwitterEmbedded />
            <SDGsComponent />
            <TeamComponent />
            <OnlyAskForQuestion />
            <C2aComponent />
            <ContactComponent />
            <CallToAction />
            <Footer />
        </div>
    );
};

export default DeepMagazine;
