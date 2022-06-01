/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import Image from 'next/image';
import connectImg from '../../../assets/images/portfolio/deepConnect.jpg';
import { site } from '../../../constants/const';
import { useLocale } from '../../../locales/useLocale';

const normalStyle = { padding: '0', height: '256px' };
const endStyle = {
    padding: '0',
    height: '256px',
    opacity: '0.5',
    backgroundColor: 'black',
};

const WorkComponent = () => {
    const [ready, setReady] = useState(false);
    const { t } = useLocale();

    useEffect(() => {
        setReady(true);
    }, []);

    if (!ready) return <></>;

    return (
        <div>
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">
                                {t.index.work.title}
                            </h1>
                            <h6 className="subtitle">
                                {t.index.work.subtitle}
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer">
                <Container>
                    <Row className="m-t-40 justify-content-center">
                        <Col md="4" data-aos="fade-up">
                            <Card className="card-shadow">
                                <a
                                    style={normalStyle}
                                    href={site.deepMatching}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="img-ho"
                                >
                                    <Image
                                        className="card-img-top"
                                        src={connectImg}
                                        alt="wrappixel kit"
                                    />
                                </a>
                                <CardBody>
                                    <h5 className="font-medium m-b-0">
                                        {t.index.work.cmcn.title}
                                    </h5>
                                    <p className="m-b-0 font-14">
                                        {t.index.work.cmcn.description}
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default WorkComponent;
