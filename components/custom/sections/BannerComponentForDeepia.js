/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Image from 'next/image';
import deepia from '../../../assets/images/staticslider/slider/deepia.png';
import { site } from '../../../constants/const';
import { useLocale } from '../../../locales/useLocale';

const BannerComponentForDeepia = () => {
    const { t, locale } = useLocale();

    const scrollToRegistration = () => {
        window.scrollTo({
            top: 1000,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <div className="static-slider10">
                <Container>
                    <Row className="">
                        <Col md="6" className="align-self-center">
                            <span className="label label-rounded label-inverse">
                                {t.page.deepia.title}
                            </span>
                            <h1 className="my-2">{t.page.deepia.h1}</h1>
                            <h6 className="my-5">{t.page.deepia.h6}</h6>
                            <div
                                className="btn btn-light btn-outline-primary btn-md m-t-20"
                                data-toggle="collapse"
                                href={''}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={scrollToRegistration}
                            >
                                <span>{t.page.deepia.preRegistration}</span>
                            </div>
                        </Col>
                        <Col md="6">
                            <Image src={deepia} alt="herobanner"></Image>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default BannerComponentForDeepia;
