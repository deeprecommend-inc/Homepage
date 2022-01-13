/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer4 b-t spacer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Address</h5>
            <p>201 Heim Angel Avenue, Karita, Osaka Shi Sumiyoshi Ku, Osaka Fu, 558-0011, Japan</p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Phone</h5>
            <a className="link" href="tel:07017347502">
              070 1734 7502
            </a>
            {/* <p>
              Reception : +205 123 4567 <br />
              Office : +207 235 7890
            </p> */}
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Email</h5>
            <a className="link" href="mailto:deeprecommend@gmail.com">deeprecommend@gmail.com</a>
            {/* <p>
              Email :
              <Link href="#">
                <a className="link">deeprecommend@gmail.com</a>
              </Link>
              <br />
              Site :
              <Link href="/">
                <a className="link">deeprecommend.com</a>
              </Link>
            </p> */}
          </Col>
          <Col lg="3" md="6">
            <h5 className="m-b-20">Social</h5>
            <div className="round-social light">
              <Link href="https://twitter.com/DeepRecommend">
                <a className="link" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter"></i>
                </a>
              </Link>
              <Link href="https://www.youtube.com/channel/UCwGTL90Osb8lItwP3zFfQ2Q">
                <a className="link"  target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </Link>
              <Link href="https://www.instagram.com/deep_recommend/">
                <a className="link" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram"></i>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
        <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className="d-flex font-14">
                <div className="m-t-10 m-b-10 copyright">
                  All Rights Reserved by{" "}
                  <Link href="/">
                    <a className="link">DeepRecommend</a>
                  </Link>
                </div>
                {/* <div className="links ml-auto m-t-10 m-b-10">
                  <Link href="#">
                    <a className="p-10 p-l-0">Terms of Use</a>
                  </Link>
                  <Link href="#">
                    <a className="p-10">Legal Disclaimer</a>
                  </Link>
                  <Link href="#">
                    <a className="p-10">Privacy Policy</a>
                  </Link>
                </div> */}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
