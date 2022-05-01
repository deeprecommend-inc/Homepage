/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import Image from 'next/image';
import { techUsed } from '../../../constants/const';
import { useLocale } from '../../../locales/useLocale';
import Link from 'next/link';

export const TechnologyUsed = () => {
    const { t } = useLocale();

    return (
        <div>
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">
                                {t.index.technologyUsed.title}
                            </h1>
                            <h6 className="subtitle">
                                {t.index.technologyUsed.subtitle}
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="testimonial3 spacer">
                <Container>
                    <Row className="testi3 m-t-40 justify-content-center">
                        <Col lg="4" md="6">
                            <Card
                                className="card-shadow"
                                data-aos="fade-up-right"
                            >
                                <CardBody>
                                    <h6 className="font-light m-b-30 text-center">
                                        Web
                                    </h6>
                                    <Container>
                                        <Row className="testi3 m-t-40 justify-content-start">
                                            {techUsed.web.map((tech) => {
                                                return (
                                                    <Col
                                                        xs="4"
                                                        lg="4"
                                                        md="6"
                                                        className="mt-2"
                                                    >
                                                        <a
                                                            href={tech.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Image
                                                                src={tech.img}
                                                                alt="wrapkit"
                                                                className="circle"
                                                            />
                                                            <p className="font-10">
                                                                {tech.name}
                                                            </p>
                                                        </a>
                                                    </Col>
                                                );
                                            })}
                                        </Row>
                                    </Container>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="4" md="6">
                            <Card className="card-shadow" data-aos="fade-up">
                                <CardBody>
                                    <h6 className="font-light m-b-30 text-center">
                                        AI
                                    </h6>
                                    <Container>
                                        <Row className="testi3 m-t-40 justify-content-start">
                                            {techUsed.ai.map((tech) => {
                                                return (
                                                    <Col
                                                        xs="4"
                                                        lg="4"
                                                        md="6"
                                                        className="mt-2"
                                                        href={tech.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <a
                                                            href={tech.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Image
                                                                src={tech.img}
                                                                alt="wrapkit"
                                                                className="circle"
                                                            />
                                                            <p className="font-10">
                                                                {tech.name}
                                                            </p>
                                                        </a>
                                                    </Col>
                                                );
                                            })}
                                        </Row>
                                    </Container>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="4" md="6">
                            <Card
                                className="card-shadow"
                                data-aos="fade-up-left"
                            >
                                <CardBody>
                                    <h6 className="font-light m-b-30 text-center">
                                        Quantum
                                    </h6>
                                    <Container>
                                        <Row className="testi3 m-t-40 justify-content-start">
                                            {techUsed.quantum.map((tech) => {
                                                return (
                                                    <Col
                                                        xs="4"
                                                        lg="4"
                                                        md="6"
                                                        className="mt-2"
                                                        href={tech.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <a
                                                            href={tech.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Image
                                                                src={tech.img}
                                                                alt="wrapkit"
                                                                className="circle"
                                                            />
                                                            <p className="font-10">
                                                                {tech.name}
                                                            </p>
                                                        </a>
                                                    </Col>
                                                );
                                            })}
                                        </Row>
                                    </Container>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default TechnologyUsed;
