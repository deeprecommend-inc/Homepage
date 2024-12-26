/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import Image from 'next/image';
import img1 from '../../../assets/images/features/feature13/img1.jpg';
import magazineImg from '../../../assets/images/features/feature13/magazine.png';
import img2 from '../../../assets/images/features/feature13/img2.jpg';
import img3 from '../../../assets/images/features/feature13/img3.jpg';
import img4 from '../../../assets/images/features/feature13/img4.jpg';
import img5 from '../../../assets/images/features/feature30/thinker.png';
import { site } from '../../../constants/const';
import { useLocale } from '../../../locales/useLocale';
import { useRouter } from 'next/router';

const FeatureComponent = () => {
    const { t } = useLocale();
    const router = useRouter();

    return (
        <div style={{ backgroundColor: '#121212', color: '#ffffff' }}>
            <div className="spacer bg-dark">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold" style={{ color: '#ffffff' }}>
                                {t.index.feature.title}
                            </h1>
                            <h6 className="subtitle" style={{ color: '#ffffff' }}>
                                {t.index.feature.subtitle}
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer feature4">
                <Container>
                    <Row
                        className="justify-content-center"
                        data-aos="slide-left"
                    >
                        <Col md="7" className="text-center">
                            <span className="label label-info label-rounded">
                                {t.index.feature.num1.label}
                            </span>
                            <h2 className="title" style={{ color: '#ffffff' }}>
                                {t.index.feature.num1.section1.title}
                            </h2>
                            <h6 className="subtitle" style={{ color: '#ffffff' }}>
                                {t.index.feature.num1.section1.subtitle}
                            </h6>
                        </Col>
                    </Row>
                    <Row
                        className="m-t-40 justify-content-center"
                        data-aos="slide-right"
                    >
                        <Col md="6" className="wrap-feature4-box text-center">
                            <Card>
                                <CardBody style={{ backgroundColor: '#121212', color: '#ffffff' }}>
                                    <div className="icon-round bg-light-info">
                                        {/* <i className="fa fa-star"></i> */}
                                        <i className="fa fa-check-circle"></i>
                                    </div>
                                    <h5 className="font-medium" style={{ color: '#ffffff' }}>
                                        {t.index.feature.num1.section2.title}
                                    </h5>
                                    <p className="m-t-20" style={{ color: '#ffffff' }}>
                                        {t.index.feature.num1.section2.subtitle}
                                    </p>
                                    {/* <a href="#" className="linking text-themecolor">
                    Explore More<i className="ti-arrow-right"></i>
                  </a> */}
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bg-dark spacer feature20 up">
                <Container>
                    <Row
                        className="justify-content-center"
                        data-aos="slide-left"
                    >
                        <Col md="7" className="text-center">
                            <span className="label label-info label-rounded">
                                {t.index.feature.num2.label}
                            </span>
                            <h2 className="title" style={{ color: '#ffffff' }}>
                                {t.index.feature.num2.section1.title}
                            </h2>
                            <h6 className="subtitle" style={{ color: '#ffffff' }}>
                                {t.index.feature.num2.section1.subtitle}
                            </h6>
                        </Col>
                    </Row>
                    <Row
                        className="wrap-feature-20 justify-content-center"
                        data-aos="slide-right"
                    >
                        <Col lg="6">
                            <Card>
                                <Row style={{ backgroundColor: '#121212', color: '#ffffff' }}>
                                    <Col md="8">
                                        <CardBody className="d-flex no-block" style={{ backgroundColor: '#121212', color: '#ffffff' }}>
                                            <div className="m-r-20">
                                                <Image
                                                    src={magazineImg}
                                                    height="50"
                                                    width="50"
                                                    className="rounded"
                                                    alt="img"
                                                />
                                            </div>
                                            <div>
                                                <h5 className="font-medium" style={{ color: '#ffffff' }}>
                                                    {
                                                        t.index.feature.num2
                                                            .section2.title
                                                    }
                                                </h5>
                                            </div>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" className="text-center" style={{ backgroundColor: '#121212', color: '#ffffff' }}>
                                        <a
                                            href={site.discord}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white linking bg-info"
                                        >
                                            {
                                                t.index.feature.num2.section2
                                                    .subtitle
                                            }
                                            <i className="ti-arrow-right"></i>
                                        </a>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer">
                <Container className="feature30">
                    <Row>
                        <Col lg="10" data-aos="slide-right">
                            <Image
                                src={img5}
                                className="rounded img-responsive"
                                alt="wrappixel"
                            />
                        </Col>
                        <Col
                            lg="5"
                            md="7"
                            className="text-center wrap-feature30-box"
                            data-aos="slide-left"
                        >
                            <Card className="card-shadow">
                                <CardBody style={{ backgroundColor: '#121212', color: '#ffffff' }}>
                                    <div className="p-20">
                                        <span className="label label-info label-rounded">
                                            {t.index.feature.num3.label}
                                        </span>
                                        <h3 className="title" style={{ color: '#ffffff' }}>
                                            {t.index.feature.num3.title}
                                        </h3>
                                        <p style={{ color: '#ffffff' }}>{t.index.feature.num3.subtitle}</p>
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
