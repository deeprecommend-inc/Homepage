import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import { site } from '../../constants/const';
import { useLocale } from '../../locales/useLocale';
import { useRouter } from 'next/router';

const Banner2 = () => {
    const { t } = useLocale();
    const router = useRouter();

    const scrollToServices = () => {
        window.scrollTo({
            top: 720,
            behavior: 'smooth',
        });
    };

    return (
        <div
            className="static-slider-head banner2"
            style={{ overflow: 'hidden' }}
        >
            <Container>
                <Row>
                    <Col
                        lg="6"
                        md="6"
                        className="align-self-center"
                        data-aos="flip-down"
                    >
                        <h1>{t.index.banner.title}</h1>
                        <h4>{t.index.banner.copy}</h4>
                        <a
                            className="btn btn-md m-r-20 btn-outline-primary m-t-30"
                            onClick={scrollToServices}
                        >
                            {t.index.banner.getStarted}
                        </a>
                        <a
                            onClick={() => {
                                router.push('/magazine');
                            }}
                            className="btn btn-md m-t-30  btn-outline-secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t.index.banner.magazine}
                        </a>
                    </Col>
                    <Col lg="6" md="6" data-aos="zoom-in">
                        <img src="/banner.gif" alt="Banner img" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner2;
