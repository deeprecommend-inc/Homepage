import React, { useEffect, useState } from "react";

// core components
import Banner2 from "../banner/Banner2";

// sections for this page
import HeaderComponent from "./sections/headercomponent";
import BannerComponentForDeepLog from "./sections/bannercomponentForDeepLog";
import FormBannerComponent from "./sections/formbannercomponent";
import FeatureComponent from "./sections/featurecomponent";
import PortfolioComponent from "./sections/portfoliocomponent";
import PricingComponent from "./sections/pricingcomponent";
import TeamComponent from "./sections/teamcomponent";
import TestimonialComponent from "./sections/testimonialcomponent";
import BlogComponent from "./sections/blogcomponent";
import C2aComponent from "./sections/c2acomponent";
import ContactComponent from "./sections/contactcomponent";
import CallToAction from "../../components/call-to-action/CallToAction";
import Banner from "../banner/Banner";
import IconButton from "@mui/material/IconButton";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import Button from "@mui/material/Button";
import TwitterEmbedded from "./sections/twitter";
import SDGsComponent from "./sections/SDGs";
import deepLogBanner from "../../assets/images/portfolio/deepLogBanner.png";
import AllComponents from "../basic/AllComponents";

const buttonStyle = {
  position: "fixed",
  bottom: "24px",
  right: "24px",
  borderRadius: "100%",
  width: "52px",
  minWidth: "52px",
  height: "52px",
  zIndex: 1000,
};

const DeepLogComponents = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const mouseOver = () => {
    setIsMouseOver(true);
  };

  const mouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <div id="container">
      <HeaderComponent localePath={'/deeplog'} />

      {/* <Banner />
      <Banner2 />
      <PortfolioComponent /> */}

      <BannerComponentForDeepLog />

      {/* <FormBannerComponent />
      <FeatureComponent />
      <PricingComponent />
      <TwitterEmbedded />
      <SDGsComponent />
      <TeamComponent />
      <TestimonialComponent />
      <BlogComponent />
      <C2aComponent />
      <ContactComponent />
      <CallToAction /> */}

      <Button
        variant={isMouseOver ? "contained" : "outlined"}
        style={buttonStyle}
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
        onClick={scrollTop}
      >
        <VerticalAlignTopIcon />
      </Button>
    </div>
  );
};

export default DeepLogComponents;
