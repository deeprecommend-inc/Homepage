import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import bannerimg from "../../assets/images/landingpage/deep-brain.png";
import { site } from "../../constants/const";

const Banner2 = () => {
  return (
    <div className="static-slider-head banner2">
      <Container>
        <Row className="">
          <Col lg="6" md="6" className="align-self-center">
            <h1>DeepRecommend</h1>
            <h4>
              We recommend products
              <br /> by creativity and objectivity
            </h4>
            <a
              href="https://deep-log.net/signup"
              className="btn btn-md m-r-20 btn-outline-primary m-t-30"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get started
            </a>
            <Link href={site.discord}>
              <a
                className="btn btn-md m-t-30  btn-outline-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Help / Support
              </a>
            </Link>
          </Col>
          <Col lg="6" md="6">
            <Image src={bannerimg} alt="hero banner" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;
