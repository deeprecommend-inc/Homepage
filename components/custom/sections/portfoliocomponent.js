/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/portfolio/img1.jpg";
import img2 from "../../../assets/images/portfolio/img2.jpg";
import logImg from "../../../assets/images/portfolio/log.jpg";
import logImg1 from "../../../assets/images/portfolio/log.png";
import logImg2 from "../../../assets/images/portfolio/log2.png";
import logImg3 from "../../../assets/images/portfolio/log3.png";
import logImg4 from "../../../assets/images/portfolio/log4.png";
import logImg5 from "../../../assets/images/portfolio/deepLog.png";
import museumImg from "../../../assets/images/portfolio/museum.jpg";
import museumImg1 from "../../../assets/images/portfolio/museum.png";
import museumImg2 from "../../../assets/images/portfolio/museum2.png";
import museumImg3 from "../../../assets/images/portfolio/museum3.png";
import museumImg4 from "../../../assets/images/portfolio/museum4.png";
import museumImg5 from "../../../assets/images/portfolio/deepMuseum.jpg";
import img3 from "../../../assets/images/portfolio/img3.jpg";
import img4 from "../../../assets/images/portfolio/img4.jpg";
import img5 from "../../../assets/images/portfolio/img5.jpg";
import img6 from "../../../assets/images/portfolio/img6.jpg";
import { site } from "../../../constants/const";

const logStyle = {padding: "0", height: '256px'}
const museumStyle = {padding: "0", height: '256px'}

const PortfolioComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Products</h1>
              <h6 className="subtitle">
                Here are some of our Products
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer">
        <Container>
          {/* <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">Our Recent work</h2>
              <h6 className="subtitle">
                You can relay on our amazing features list and also our customer
                services will be great experience for you without doubt and in
                no-time
              </h6>
            </Col>
          </Row> */}
          <Row className="m-t-40 justify-content-center">
            <Col md="4">
              <Card className="card-shadow">
                <a style={logStyle} href={site.deepLog} target="_blank" rel="noopener noreferrer" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={logImg5}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">
                    DeepLog
                  </h5>
                  <p className="m-b-0 font-14">Website Management</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a style={museumStyle} href={site.deepMuseum} target="_blank" rel="noopener noreferrer" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={museumImg5}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">DeepMuseum</h5>
                  <p className="m-b-0 font-14">Online Museum</p>
                </CardBody>
              </Card>
            </Col>
            {/* <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img3}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Branding & Co Agency</h5>
                  <p className="m-b-0 font-14">Admin templates</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img4}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Zukandre Phoniex</h5>
                  <p className="m-b-0 font-14">Branding</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img5}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Sionage Mokcup</h5>
                  <p className="m-b-0 font-14">Wll Mockup</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img6}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Hard Cover Book Mock</h5>
                  <p className="m-b-0 font-14">Book Covers</p>
                </CardBody>
              </Card>
            </Col> */}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PortfolioComponent;
