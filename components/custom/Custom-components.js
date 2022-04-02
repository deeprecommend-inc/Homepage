import React, { useEffect, useState } from "react";

// core components
import Banner2 from "../banner/Banner2";

// sections for this page
import HeaderComponent from "./sections/headercomponent";
import BannerComponent from "./sections/bannercomponent";
import FormBannerComponent from "./sections/formbannercomponent";
import FeatureComponent from "./sections/featurecomponent";
import PortfolioComponent from "./sections/portfoliocomponent";
import PricingComponent from "./sections/pricingcomponent";
import TeamComponent from "./sections/teamcomponent";
import TestimonialComponent from "./sections/testimonialcomponent";
import BlogComponent from "./sections/blogcomponent";
import { C2aComponent, OnlyAskForQuestion } from "./sections/c2acomponent";
import ContactComponent from "./sections/contactcomponent";
import CallToAction from "../../components/call-to-action/CallToAction";
import Banner from "../banner/Banner";
import IconButton from "@mui/material/IconButton";
import TwitterEmbedded from "./sections/twitter";
import SDGsComponent from "./sections/SDGs";

const CustomComponents = () => {
  return (
    <div id="container">
      <HeaderComponent localePath={'/'} />
      {/* <Banner /> */}
      <Banner2 />
      <PortfolioComponent />
      {/* <BannerComponent />
      <FormBannerComponent /> */}

      <FeatureComponent />
      {/* <PricingComponent /> */}
      {/* <TwitterEmbedded /> */}
      {/* <SDGsComponent /> */}
      {/* <TeamComponent /> */}
{/* 
      <OnlyAskForQuestion/> */}
      {/* <TestimonialComponent /> */}
      {/* <BlogComponent /> */}
      {/* <C2aComponent /> */}
      {/* <ContactComponent /> */}
      {/* <CallToAction /> */}
    </div>
  );
};

export default CustomComponents;
