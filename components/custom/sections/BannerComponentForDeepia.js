/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Image from 'next/image';
import deepia from '../../../assets/images/staticslider/slider/alot.png';
import { site } from '../../../constants/const';
import { useLocale } from '../../../locales/useLocale';
import aiImg from '../../../assets/images/portfolio/aiimage.png';

const BannerComponentForDeepia = () => {
    const { t, locale } = useLocale();

    const scrollToRegistration = () => {
        window.scrollTo({
            top: 1700,
            behavior: 'smooth',
        });
    };

    return (
        <div id="product-section">
            <div className="parallax-banner" style={{ backgroundImage: `url(${deepia.src})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center', color: '#ffffff' }}>
                <Container>
                    <Row className="align-items-center" style={{ minHeight: '100vh' }}>
                        <Col md="6" className="text-white">
                            <span className="label label-rounded label-inverse" style={{ backgroundColor: "#673AB7" }}>
                                {t.page.deepia.title}
                            </span>
                            <h1 className="my-2 text-white">{t.page.deepia.h1}</h1>
                            <h6 className="my-5 text-white">{t.page.deepia.h6}</h6>
                            <a
                                className="btn btn-light btn-outline-primary btn-md m-t-20"
                                data-toggle="collapse"
                                href={site.discord}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>{t.page.deepia.getStarted}</span>
                            </a>
                        </Col>
                        <Col md="6">
                            <Image src={aiImg} alt="herobanner" layout="responsive"></Image>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default BannerComponentForDeepia;
