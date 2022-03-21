/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
import deepLog from "../../../assets/images/staticslider/slider/deeplog-service.png";
import { site } from "../../../constants/const";

const BannerComponentForDeepLog = () => {
  return (
    <div>
      <div className="static-slider10">
        <Container>
          <Row className="">
            <Col md="6" className="align-self-center">
              <span className="label label-rounded label-inverse">DeepLog</span>
              <h1>System of website to manage the website</h1>
              <h6 className="my-5">
                Would you like to manage a website like a music playlist? <br />
                ・Frequently used sites <br />
                ・ Sites you searched for before <br />
                ・ Sites <br />
                I've forgotten when I used them DeepLog manages these sites and
                is comfortable surfing the Internet. Currently Free!!
              </h6>
              <a
                className="btn btn-light btn-outline-primary btn-md m-t-20"
                data-toggle="collapse"
                href={site.deepLog}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Get started</span>
              </a>
            </Col>
            <Col md="6">
              <Image src={deepLog} alt="herobanner"></Image>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BannerComponentForDeepLog;
