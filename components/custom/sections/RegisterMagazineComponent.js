import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import Image from 'next/image';
import discord from '../../../assets/images/icons/discord.png';
import line from '../../../assets/images/icons/line.png';
import email from '../../../assets/images/icons/email.png';
import { site } from '../../../constants/const';
import { useLocale } from '../../../locales/useLocale';

const RegisterMagazineComponent = () => {
    const { t } = useLocale();

    return (
        <div>
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">
                                {t.page.deepmagazine.subscribe.title}
                            </h1>
                            <h6 className="subtitle">
                                {t.page.deepmagazine.subscribe.subtitle}
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="pricing8 spacer b-t">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h2 className="title">
                                {t.page.deepmagazine.subscribe.header}
                            </h2>
                            <h6 className="subtitle">
                                {t.page.deepmagazine.subscribe.subheader}
                            </h6>
                        </Col>
                    </Row>
                    <Row className="m-t-40">
                        <Col
                            md="4"
                            className="ml-auto pricing-box align-self-center"
                        >
                            <Card className="b-all">
                                <CardBody className="p-30 text-center">
                                    <h5>Discord</h5>
                                    <Image
                                        src={discord}
                                        alt="Picture of the author"
                                        width={64}
                                        height={64}
                                    />
                                    {/* <span className="text-dark display-5">
                                    </span>
                                    */}
                                    <p className="m-t-40">
                                        {
                                            t.page.deepmagazine.subscribe
                                                .advantage.discord
                                        }
                                    </p>
                                </CardBody>
                                <a
                                    className="btn p-15 btn-arrow btn-block"
                                    href={site.discord}
                                    style={{
                                        backgroundColor: '#8D9DFE',
                                    }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    CHOOSE PLAN
                                </a>
                            </Card>
                        </Col>
                        <Col
                            md="4"
                            className="ml-auto pricing-box align-self-center"
                        >
                            <Card className="b-all">
                                <CardBody className="p-30 text-center">
                                    <h5>LINE</h5>
                                    <Image
                                        src={line}
                                        alt="Picture of the author"
                                        width={64}
                                        height={64}
                                    />
                                    {/* <span className="text-dark display-5">
                                        
                                    </span>
                                    */}
                                    <p className="m-t-40">
                                        {
                                            t.page.deepmagazine.subscribe
                                                .advantage.line
                                        }
                                    </p>
                                </CardBody>
                                <a
                                    className="btn p-15 btn-arrow btn-block"
                                    style={{
                                        backgroundColor: '#02C754',
                                    }}
                                    href={site.line}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    CHOOSE PLAN
                                </a>
                            </Card>
                        </Col>
                        <Col
                            md="4"
                            className="ml-auto pricing-box align-self-center"
                        >
                            <Card className="b-all">
                                <CardBody className="p-30 text-center">
                                    <h5>Email</h5>
                                    <Image
                                        src={email}
                                        alt="Picture of the author"
                                        width={64}
                                        height={64}
                                    />
                                    {/* <sup>$</sup>
                                    <span className="text-dark display-5">
                                        69
                                    </span> */}
                                    <p className="m-t-40">
                                        {
                                            t.page.deepmagazine.subscribe
                                                .advantage.email
                                        }
                                    </p>
                                </CardBody>
                                <a
                                    className="btn p-15 btn-arrow btn-block"
                                    style={{
                                        backgroundColor: '#8C8076',
                                    }}
                                    href={site.email}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    CHOOSE PLAN{' '}
                                </a>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default RegisterMagazineComponent;
