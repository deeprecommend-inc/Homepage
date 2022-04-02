import React, { useState } from 'react';
import Footer from "./footer/Footer";
import Button from "@mui/material/Button";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import Header from '../components/blog/Header';
import { useRouter } from 'next/router'

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

const sections = [
  { title: 'Web', url: '/lab/web' },
  { title: 'AI', url: '/lab/ai' },
  { title: 'Quantum Computing', url: '/lab/quantum' },
];

const Layout = ({ children }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const router = useRouter();

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
      <div className="page-wrapper">
        {
          router.pathname.slice(1, 4) === 'lab'
            ? <Header title="DeepLab" sections={sections} localePath={router.pathname} />
            : <></>
        }
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
