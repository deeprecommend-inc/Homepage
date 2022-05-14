/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Image from 'next/image';
import deepMatching from '../../../assets/images/staticslider/slider/deepmatching-service.png';
import { site } from '../../../constants/const';

const BannerComponentForDeepMatching = () => {
    return (
        <div>
            <div className="static-slider10">
                <Container>
                    <Row className="">
                        <Col md="6" className="align-self-center">
                            <span className="label label-rounded label-inverse">
                                DeepConnect
                            </span>
                            <h1>
                                Matching app for comedians they are "Bokeh" and
                                "Tsukkomi"
                            </h1>
                            <h6 className="my-5">
                                Looking for a comedy partner? <br />
                                ・ It's hard to find someone to meet <br />
                                ・ I don't have time for this <br />
                                ・ Training schools are high hurdle <br />
                                DeepConnect solves all those problems! An
                                interesting comedian meets an interesting
                                partner! Currently Free!!
                            </h6>
                            <a
                                className="btn btn-light btn-outline-primary btn-md m-t-20"
                                data-toggle="collapse"
                                href={site.deepMatching}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>Get started</span>
                            </a>
                        </Col>
                        <Col md="6">
                            <Image src={deepMatching} alt="herobanner"></Image>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default BannerComponentForDeepMatching;
