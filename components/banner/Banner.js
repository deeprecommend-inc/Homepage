import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const titleStyle = {
    color: '#fff',
    fontWeight: '700',
    fontSize: '36px',
    lineHeight: '54px',
};

const Banner = () => {
    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col
                        lg="8"
                        md="6"
                        className="align-self-center text-center"
                    >
                        <h1 className="text-dark" style={titleStyle}>
                            DeepRecommend Inc.
                        </h1>
                        <h4 className="subtitle font-light text-dark">
                            We recommend technology and art services.
                            <br /> by creativity and objectivity.
                        </h4>

                        <Button
                            href="mailto:deeprecommend@gmail.com"
                            className="btn btn-md m-t-30 btn-outline-primary font-14"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Contact
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;
