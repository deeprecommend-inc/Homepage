    import React, { useEffect, useState } from 'react';

// core components
import Banner2 from '../banner/Banner2';

// sections for this page
import HeaderComponent from './sections/headercomponent';
import BannerComponent from './sections/bannercomponent';
import FormBannerComponent from './sections/formbannercomponent';
import FeatureComponent from './sections/featurecomponent';
import WorkComponent from './sections/workcomponent';
import PortfolioComponent from './sections/portfoliocomponent';
import PricingComponent from './sections/pricingcomponent';
import TeamComponent from './sections/teamcomponent';
import TestimonialComponent from './sections/testimonialcomponent';
import BlogComponent from './sections/blogcomponent';
import { C2aComponent, OnlyAskForQuestion } from './sections/c2acomponent';
import ContactComponent from './sections/contactcomponent';
import CallToAction from '../../components/call-to-action/CallToAction';
import Banner from '../banner/Banner';
import IconButton from '@mui/material/IconButton';
import TwitterEmbedded from './sections/twitter';
import SDGsComponent from './sections/SDGs';
import TechnologyUsed from './sections/technologyUsed';
import BlochSphare from './sections/blochSphare';
import Contact from './sections/contact';
import BannerComponentForDeepia from './sections/BannerComponentForDeepia';
import BannerComponentForDeepMarketer from './sections/BannerComponentForDeepMarketer';

const CustomComponents = () => {
    return (
        <div id="container">
            {/* <BlochSphare/> */}
            <HeaderComponent localePath={'/'} />
            {/* <Banner /> */}
            <Banner2 />
            {/*<PortfolioComponent /> */}
            <BannerComponentForDeepia/>
            <BannerComponentForDeepMarketer/>
            {/* 実績 */}

            {/* <BannerComponent />
            <FormBannerComponent /> */}

            {/* <TechnologyUsed /> */}

            {/* <WorkComponent />
            <TestimonialComponent /> */}

            <FeatureComponent />

            {/* <PricingComponent /> */}
            {/* <TwitterEmbedded /> */}
            {/* <SDGsComponent /> */}
            <TeamComponent />
            {/* 
      <OnlyAskForQuestion/> */}
            {/* <TestimonialComponent /> */}
            {/* <BlogComponent /> */}
            {/* <C2aComponent /> */}
            {/* <ContactComponent /> */}
            {/* <Contact /> */}
            {/* <CallToAction /> */}
        </div>
    );
};

export default CustomComponents;
