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
    const magazines = [
        {
            title: 'Email',
            img: email,
            advantage: t.page.deepmagazine.subscribe.advantage.email,
            url: site.email,
            backgroundColor: '#8C8076',
        },
        {
            title: 'LINE',
            img: line,
            advantage: t.page.deepmagazine.subscribe.advantage.line,
            url: site.line,
            backgroundColor: '#02C754',
        },
        {
            title: 'Discord',
            img: discord,
            advantage: t.page.deepmagazine.subscribe.advantage.discord,
            url: site.discord,
            backgroundColor: '#8D9DFE',
        },
    ];

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
                            key={'Email'}
                            md="4"
                            className="mx-auto pricing-box align-self-center"
                        >
                            <Card className="b-all">
                                <CardBody className="p-30 text-center">
                                    <h5>{'Email'}</h5>
                                    <Image
                                        src={email}
                                        alt="Picture of the author"
                                        width={64}
                                        height={64}
                                    />

                                    <p className="m-t-40">
                                        {
                                            t.page.deepmagazine.subscribe
                                                .advantage.email
                                        }
                                    </p>
                                </CardBody>
                                <a
                                    className="btn p-15 btn-arrow btn-block"
                                    href={site.email}
                                    style={{
                                        backgroundColor: '#8C8076',
                                    }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    SUBSCRIBE
                                </a>
                            </Card>
                        </Col>
                        {/* {magazines.map(magazine => (
                            <Col
                                key={magazine.title}
                                md="4"
                                className="ml-auto pricing-box align-self-center"
                            >
                                <Card className="b-all">
                                    <CardBody className="p-30 text-center">
                                        <h5>{magazine.title}</h5>
                                        <Image
                                            src={magazine.img}
                                            alt="Picture of the author"
                                            width={64}
                                            height={64}
                                        />

                                        <p className="m-t-40">
                                            {magazine.advantage}
                                        </p>
                                    </CardBody>
                                    <a
                                        className="btn p-15 btn-arrow btn-block"
                                        href={magazine.url}
                                        style={{
                                            backgroundColor:
                                                magazine.backgroundColor,
                                        }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        SUBSCRIBE
                                    </a>
                                </Card>
                            </Col>
                        ))} */}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default RegisterMagazineComponent;
