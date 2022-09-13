/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import Image from 'next/image';
import logImg from '../../../assets/images/portfolio/4.png';
import connectImg from '../../../assets/images/portfolio/3.png';
import museumImg from '../../../assets/images/portfolio/1.png';
import labImg from '../../../assets/images/portfolio/2.png';
import bookImg from '../../../assets/images/portfolio/5.png';
import { site } from '../../../constants/const';
import { useLocale } from '../../../locales/useLocale';

const normalStyle = { padding: '0', height: '256px' };
const endStyle = {
    padding: '0',
    height: '256px',
    opacity: '0.5',
    backgroundColor: 'black',
};

const PortfolioComponent = () => {
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
                                {t.index.portfolio.title}
                            </h1>
                            <h6 className="subtitle">
                                {t.index.portfolio.subtitle}
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer">
                <Container>
                    {/* <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">Our Recent work</h2>
              <h6 className="subtitle">
                You can relay on our amazing features list and also our customer
                services will be great experience for you without doubt and in
                no-time
              </h6>
            </Col>
          </Row> */}
                    <Row className="m-t-40 justify-content-center">
                        <Col md="4" data-aos="fade-up-right">
                            <Card className="card-shadow">
                                <a
                                    style={normalStyle}
                                    href="/book"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="img-ho"
                                >
                                    <Image
                                        className="card-img-top"
                                        src={bookImg}
                                        alt="DeepBook"
                                    />
                                </a>
                                <CardBody>
                                    <h5 className="font-medium m-b-0">
                                        {t.index.portfolio.deepbook.title}
                                    </h5>
                                    <p className="m-b-0 font-14">
                                        {t.index.portfolio.deepbook.description}
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4" data-aos="fade-up">
                            <Card className="card-shadow">
                                <a
                                    style={normalStyle}
                                    href={site.deepLog}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="img-ho"
                                >
                                    <Image
                                        className="card-img-top"
                                        src={logImg}
                                        alt="DeepLog"
                                    />
                                </a>
                                <CardBody>
                                    <h5 className="font-medium m-b-0">
                                        {t.index.portfolio.deeplog.title}
                                    </h5>
                                    <p className="m-b-0 font-14">
                                        {t.index.portfolio.deeplog.description}
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4" data-aos="fade-up-left">
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
                                        alt="DeepConnect"
                                    />
                                </a>
                                <CardBody>
                                    <h5 className="font-medium m-b-0">
                                        {t.index.portfolio.cmcn.title}
                                    </h5>
                                    <p className="m-b-0 font-14">
                                        {t.index.portfolio.cmcn.description}
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4" data-aos="fade-up-right">
                            <Card className="card-shadow">
                                <a
                                    style={normalStyle}
                                    href="/lab"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="img-ho"
                                >
                                    <Image
                                        className="card-img-top"
                                        src={labImg}
                                        alt="DeepLab"
                                    />
                                </a>
                                <CardBody>
                                    <h5 className="font-medium m-b-0">
                                        {t.index.portfolio.deeplab.title}
                                    </h5>
                                    <p className="m-b-0 font-14">
                                        {t.index.portfolio.deeplab.description}
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        {/* <Col md="4">
              <Card className="card-shadow">
                <a
                  style={logStyle}
                  href={site.deepMusic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="img-ho"
                >
                  <Image
                    className="card-img-top"
                    src={musicImg5}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">DeepMusic</h5>
                  <p className="m-b-0 font-14">
                    Music produced by DeepRecommend
                  </p>
                </CardBody>
              </Card>
            </Col> */}
                        <Col md="4" data-aos="fade-up-left">
                            <Card className="card-shadow">
                                <a style={endStyle} className="img-ho" disabled>
                                    <Image
                                        className="card-img-top"
                                        src={museumImg}
                                        alt="DeepMuseum"
                                    />
                                </a>
                                <CardBody>
                                    <h5 className="font-medium m-b-0">
                                        {t.index.portfolio.deepmuseum.title}
                                    </h5>
                                    <p className="m-b-0 font-14">
                                        {
                                            t.index.portfolio.deepmuseum
                                                .description
                                        }
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        {/* <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img3}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Branding & Co Agency</h5>
                  <p className="m-b-0 font-14">Admin templates</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img4}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Zukandre Phoniex</h5>
                  <p className="m-b-0 font-14">Branding</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img5}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Sionage Mokcup</h5>
                  <p className="m-b-0 font-14">Wll Mockup</p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-shadow">
                <a href="#" className="img-ho">
                  <Image
                    className="card-img-top"
                    src={img6}
                    alt="wrappixel kit"
                  />
                </a>
                <CardBody>
                  <h5 className="font-medium m-b-0">Hard Cover Book Mock</h5>
                  <p className="m-b-0 font-14">Book Covers</p>
                </CardBody>
              </Card>
            </Col> */}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default PortfolioComponent;
