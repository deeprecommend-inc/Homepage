/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Image from 'next/image';
import deepLog from '../../../assets/images/staticslider/slider/deeplog-service.png';
import { site } from '../../../constants/const';
import { useLocale } from '../../../locales/useLocale';

const BannerComponentForDeepLog = () => {
    const { t, locale } = useLocale();

    return (
        <div>
            <div className="static-slider10">
                <Container>
                    <Row className="">
                        <Col md="6" className="align-self-center">
                            <span className="label label-rounded label-inverse">
                                {t.page.deeplog.title}
                            </span>
                            <h1>{t.page.deeplog.h1}e</h1>
                            <h6 className="my-5">{t.page.deeplog.h6}</h6>
                            <a
                                className="btn btn-light btn-outline-primary btn-md m-t-20"
                                data-toggle="collapse"
                                href={site.deepLog}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>{t.page.deeplog.getStarted}</span>
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
