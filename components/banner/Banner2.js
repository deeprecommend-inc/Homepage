import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import bannerimg from "../../assets/images/landingpage/deep-brain.png";
import { site } from "../../constants/const";
import { useLocale } from "../../locales/useLocale";

const Banner2 = () => {
  const { t } = useLocale();

  return (
    <div className="static-slider-head banner2" style={{ overflow: "hidden" }}>
      <Container>
        <Row>
          <Col lg="6" md="6" className="align-self-center" data-aos="flip-down">
            <h1>DeepRecommend</h1>
            <h4>
              {t.index.banner.copy}
            </h4>
            <a
              href="https://deep-log.net/signup"
              className="btn btn-md m-r-20 btn-outline-primary m-t-30"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.index.banner.getStarted}
            </a>
            <Link href={site.discord}>
              <a
                className="btn btn-md m-t-30  btn-outline-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.index.banner.helpSupport}
              </a>
            </Link>
          </Col>
          <Col lg="6" md="6" data-aos="zoom-in">
            <Image src={bannerimg} alt="hero banner" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;
