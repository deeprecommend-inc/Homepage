/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Image from 'next/image';
import deepMatching from '../../../assets/images/staticslider/slider/deepmatching-service.png';
import { site } from '../../../constants/const';
import { useLocale } from '../../../locales/useLocale';

const BannerComponentForDeepMatching = () => {
    const { t, locale } = useLocale();

    return (
        <div>
            <div className="static-slider10">
                <Container>
                    <Row className="">
                        <Col md="6" className="align-self-center">
                            <span className="label label-rounded label-inverse">
                                {t.page.deepconnect.title}
                            </span>
                            <h1 className="my-2">{t.page.deepconnect.h1}</h1>
                            <h6 className="my-5">{t.page.deepconnect.h6}</h6>
                            <a
                                className="btn btn-light btn-outline-primary btn-md m-t-20"
                                data-toggle="collapse"
                                href={site.deepMatching}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>{t.page.deepconnect.getStarted}</span>
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
