/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Image from 'next/image';
import magazine from '../../../assets/images/staticslider/slider/magazine.png';
import { site } from '../../../constants/const';
import { useLocale } from '../../../locales/useLocale';

const BannerComponentForDeepMagazine = () => {
    const { t, locale } = useLocale();

    const scrollToRegisterMagazine = () => {
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
                                {t.page.deepmagazine.title}
                            </span>
                            <h1 className="my-2">{t.page.deepmagazine.h1}</h1>
                            <h6 className="my-5">{t.page.deepmagazine.h6}</h6>
                            <a
                                className="btn btn-light btn-outline-primary btn-md m-t-20"
                                data-toggle="collapse"
                                onClick={scrollToRegisterMagazine}
                            >
                                <span>{t.page.deepmagazine.getStarted}</span>
                            </a>
                        </Col>
                        <Col md="6">
                            <Image src={magazine} alt="herobanner"></Image>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default BannerComponentForDeepMagazine;
