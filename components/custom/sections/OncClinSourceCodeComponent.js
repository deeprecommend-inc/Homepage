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
import aiImg from '../../../assets/images/portfolio/6.png';
import { site } from '../../../constants/const';
import { useLocale } from '../../../locales/useLocale';
import { useRouter } from 'next/router';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const normalStyle = { padding: '0', height: '256px' };
const endStyle = {
    padding: '0',
    height: '256px',
    opacity: '0.5',
    backgroundColor: 'black',
};

const OneCoinSourceCodeComponent = () => {
    const [ready, setReady] = useState(false);
    const { t, locale } = useLocale();
    const [open, setOpen] = React.useState(false);
    const router = useRouter();

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
                                {t.index.oneCoinSourceCode.title}
                            </h1>
                            <h6 className="subtitle">
                                {t.index.oneCoinSourceCode.subtitle}
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{ width: '70vw', margin: '0 auto' }}>
                {locale === 'en' ? (
                    <>
                        <img src="/now_thinking/en.png" />
                    </>
                ) : (
                    <>
                        <img src="/now_thinking/ja.png" />
                    </>
                )}
            </div>
            {/* <div className="spacer">
                <Container>
                    <Row className="m-t-40 justify-content-center">
                        <Col md="4" data-aos="fade-up-right">
                            <Card className="card-shadow">
                                <a
                                    style={normalStyle}
                                    className="img-ho"
                                    onClick={() => {
                                        routerPush('deepia');
                                    }}
                                >
                                    <Image
                                        className="card-img-top"
                                        src={aiImg}
                                        alt="Deepia"
                                    />
                                </a>
                                <CardBody>
                                    <h5 className="font-medium m-b-0">
                                        {t.index.portfolio.deepai.title}
                                    </h5>
                                    <p className="m-b-0 font-14">
                                        {t.index.portfolio.deepai.description}
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div> */}
        </div>
    );
};

export default OneCoinSourceCodeComponent;
