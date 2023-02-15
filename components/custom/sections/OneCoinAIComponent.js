/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import Image from 'next/image';
import logImg from '../../../assets/images/portfolio/4.png';
import connectImg from '../../../assets/images/portfolio/3.png';
import museumImg from '../../../assets/images/portfolio/1.png';
import labImg from '../../../assets/images/portfolio/2.png';
import bookImg from '../../../assets/images/portfolio/5.png';
import circleImg from '../../../assets/images/portfolio/7.png';
import { oneCoinAI, site } from '../../../constants/const';
import { useLocale } from '../../../locales/useLocale';
import { useRouter } from 'next/router';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import magazineImg from '../../../assets/images/features/feature13/magazine.png';
import stableDiffusionImg from '../../../assets/images/oneCoinAI/stableDiffusion.png';
import unstableIllusion from '../../../assets/images/oneCoinAI/unstableIllusion.png';
import { useOneCoinAI } from '../../../hooks/useOneCoinAI';

const normalStyle = { padding: '0', height: '256px' };
const endStyle = {
    padding: '0',
    height: '256px',
    opacity: '0.5',
    backgroundColor: 'black',
};

const OneCoinAIComponent = () => {
    const [ready, setReady] = useState(false);
    const { t, locale } = useLocale();
    const [open, setOpen] = React.useState(false);
    const router = useRouter();
    const { listOfOneCoinAI } = useOneCoinAI();

    useEffect(() => {
        setReady(true);
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const routerPush = route => {
        router.push(route);
    };

    if (!ready) return <></>;

    return (
        <div>
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">
                                {t.index.oneCoinAI.title}
                            </h1>
                            <h6 className="subtitle">
                                {t.index.oneCoinAI.subtitle}
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer">
                <Container>
                    <Row className="m-t-40 justify-content-center">
                        {listOfOneCoinAI.map(ai => {
                            return (
                                <Col md="4" data-aos="fade-up">
                                    <Card className="card-shadow">
                                        <a
                                            style={normalStyle}
                                            className="img-ho"
                                            href={ai.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                className="card-img-top"
                                                src={ai.imgSrc}
                                                alt="Deepia"
                                            />
                                        </a>
                                        <CardBody>
                                            <h5 className="font-medium m-b-0">
                                                {ai.title}
                                            </h5>
                                            <p className="m-b-0 font-14">
                                                {ai.description}
                                            </p>
                                        </CardBody>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
            <div className="spacer feature20 up">
                <Container>
                    <Row
                        className="wrap-feature-20 justify-content-center"
                        data-aos="slide-up"
                    >
                        <Col lg="6">
                            <Card className="bg-light">
                                <Row>
                                    <Col md="8">
                                        <CardBody className="d-flex no-block">
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
                                                <h5 className="font-medium">
                                                    {
                                                        t.index.oneCoinAI
                                                            .distribution.title
                                                    }
                                                </h5>
                                            </div>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" className="text-center">
                                        <a
                                            className="text-white linking bg-info"
                                            href={site.discord}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {
                                                t.index.oneCoinAI.distribution
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
            {/* <div style={{ width: '70vw', margin: '0 auto' }}>
                {locale === 'en' ? (
                    <>
                        <img src="/now_thinking/en.png" />
                    </>
                ) : (
                    <>
                        <img src="/now_thinking/ja.png" />
                    </>
                )}
            </div> */}
        </div>
    );
};

export default OneCoinAIComponent;
