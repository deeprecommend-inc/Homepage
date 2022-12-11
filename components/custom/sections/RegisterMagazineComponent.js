import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import Image from 'next/image';
import discord from '../../../assets/images/icons/discord.png';
import line from '../../../assets/images/icons/line.png';
import email from  '../../../assets/images/icons/email.png';
import { site } from '../../../constants/const';


const RegisterMagazineComponent = () => {
    return (
        <div>
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">購読する</h1>
                            <h6 className="subtitle">
                                以下に登録して、DeepMagazineを無料で購読する。
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
                                あなたのスタイルに適した受信方法をお選びいただけます。
                            </h2>
                            <h6 className="subtitle">
                               迷ったらLINEがおすすめです。
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
                                        コミュニティー性を重視したい
                                    </p>
                                </CardBody>
                                <a
                                    className="btn p-15 btn-arrow btn-block"
                                    href={site.discord}
                                    style={{
                                        backgroundColor: '#8D9DFE'
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
                                        リアルタイム性を重視したい
                                    </p>
                                </CardBody>
                                <a
                                    className="btn p-15 btn-arrow btn-block"
                                    style={{
                                        backgroundColor:'#02C754'
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
                                        内容と信頼性を重視したい
                                    </p>
                                </CardBody>
                                <a
                                    className="btn p-15 btn-arrow btn-block"
                                    style={{
                                        backgroundColor: '#8C8076'
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
