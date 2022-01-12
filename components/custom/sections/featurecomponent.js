/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/features/feature13/img1.jpg";
import slackImg from "../../../assets/images/features/feature13/slack.png";
import img2 from "../../../assets/images/features/feature13/img2.jpg";
import img3 from "../../../assets/images/features/feature13/img3.jpg";
import img4 from "../../../assets/images/features/feature13/img4.jpg";
import img5 from "../../../assets/images/features/feature30/feature-img.jpg";

const FeatureComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Features</h1>
              <h6 className="subtitle">
                Here you can check how we recommend services
                &amp; our strength. <br/>
                You'll find your dream a service in DeepRecommend.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer feature4">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <span className="label label-info label-rounded">
                Feature 1
              </span>
              <h2 className="title">Development based on a simple rule</h2>
              <h6 className="subtitle">
                Our purpose is making people enrich. <br/>
                For this purpose, We follow a simple rule.
              </h6>
            </Col>
          </Row>
          <Row className="m-t-40 justify-content-center">
            <Col md="6" className="wrap-feature4-box text-center">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    {/* <i className="fa fa-star"></i> */}
                    <i className="fa fa-check-circle"></i>
                  </div>
                  <h5 className="font-medium">Highly recommended</h5>
                  <p className="m-t-20">
                    We think first "Is this service highly recommended?".
                    If the answer is "No", we still have room for improvement.
                    By doing so, we will be able to improve our services.
                  </p>
                  {/* <a href="#" className="linking text-themecolor">
                    Explore More<i className="ti-arrow-right"></i>
                  </a> */}
                </CardBody>
              </Card>
            </Col>
            {/* <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-check-circle"></i>
                  </div>
                  <h5 className="font-medium">Be active</h5>
                  <p className="m-t-20">
                    
                  </p>
                  <a className="linking text-themecolor" href="#">
                    Explore More <i className="ti-arrow-right"></i>
                  </a>
                </CardBody>
              </Card>
            </Col> */}
          </Row>
        </Container>
      </div>
      <div className="bg-light spacer feature20 up">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <span className="label label-info label-rounded">Feature 2</span>
              <h2 className="title">Active relationship</h2>
              <h6 className="subtitle">
                Even if we think it's highly recommended, customers may not think so. <br/>
                Therefore, we take care of customers' direct opinions.
                We have own community by Slack.
              </h6>
            </Col>
          </Row>
          <Row className="wrap-feature-20 justify-content-center">
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={slackImg}
                          height="70"
                          width="70"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Let me know what you think in our community.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Lets Join <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
            {/* <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img2}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Make your website in no-time with us.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img3}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Make your website in no-time with us.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="8">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={img4}
                          height="70"
                          width="100"
                          className="rounded"
                          alt="img"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">
                          Make your website in no-time with us.
                        </h5>
                      </div>
                    </CardBody>
                  </Col>
                  <Col md="4" className="text-center">
                    <a href="#" className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                </Row>
              </Card>
            </Col> */}
          </Row>
        </Container>
      </div>
      <div className="spacer ">
        <Container className="feature30">
          <Row>
            <Col lg="10">
              <Image
                src={img5}
                className="rounded img-responsive"
                alt="wrappixel"
              />
            </Col>
            <Col lg="5" md="7" className="text-center wrap-feature30-box">
              <Card className="card-shadow">
                <CardBody>
                  <div className="p-20">
                    <span className="label label-info label-rounded">
                      Feature 3
                    </span>
                    <h3 className="title">
                      Creativity
                    </h3>
                    <p>
                      We continue to challenge <br/>
                      what others do not do, what is new.
                    </p>
                    {/* <a
                      className="btn btn-danger btn-md btn-arrow m-t-20"
                      href="#"
                    >
                      <span>
                        Explore More <i className="ti-arrow-right"></i>
                      </span>
                    </a> */}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FeatureComponent;
