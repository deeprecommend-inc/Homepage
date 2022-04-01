import React, { useState } from 'react';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Button from "@mui/material/Button";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";

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

const Layout = ({ children }) => {
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
    <div id="main-wrapper">
      {/* <Header /> */}
      <div className="page-wrapper">
        <div className="container-fluid">{children}</div>
      </div>
      <Button
        variant={isMouseOver ? "contained" : "outlined"}
        style={buttonStyle}
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
        onClick={scrollTop}
      >
        <VerticalAlignTopIcon />
      </Button>
      <Footer />
    </div>
  );
};

export default Layout;
