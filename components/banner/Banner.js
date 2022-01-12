import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Banner = () => {
  return (
    <div className="static-slider-head">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="6" className="align-self-center text-center">
            <h1 className="title text-dark">DeepRecommend</h1>
            <h4 className="subtitle font-light text-dark">
              We recommend services such as web service, community, art.
              <br /> By creativity and objectivity.
            </h4>

            <Button
              href="https://join.slack.com/t/deeprecommend-mc58389/shared_invite/zt-wdn6aoli-x56SQa1Vfc97CEFvxcpmBw"
              className="btn btn-md m-t-30 btn-outline-primary font-14"
            >
              Contact by Slack
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
