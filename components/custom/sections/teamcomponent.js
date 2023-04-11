/* eslint-disable */
import React from 'react';
import { sugimoto } from '../../../constants/const';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';
import { useLocale } from '../../../locales/useLocale';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import Image from 'next/image';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const TeamComponent = () => {
    const router = useRouter();
    const { t } = useLocale();

    return (
        <div>
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">
                                {t.index.team.title}
                            </h1>
                            <h6 className="subtitle">
                                {t.index.team.subtitle}
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer team2">
                <Container>
                    {/* <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h2 className="title">Experienced & Professional Team</h2>
                            <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                        </Col>
                    </Row> */}
                    <Row className="m-t-30 justify-content-center">
                        <Col
                            lg="3"
                            md="6"
                            className="m-b-30"
                            data-aos="fade-up"
                            // onClick={() => {
                            //     router.push('/team/sugimoto');
                            // }}
                        >
                            <Row className="no-gutters">
                                <Col md="12" className="pro-pic t1">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline">
                                            {/* <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li> */}
                                            <li className="list-inline-item">
                                                <a
                                                    href={sugimoto.twitter}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a
                                                    href={sugimoto.instagram}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faInstagram}
                                                    />
                                                </a>
                                            </li>
                                            {/* <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li> */}
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">
                                            {t.index.team.sugimoto.name}
                                        </h5>
                                        <h6 className="subtitle">
                                            {t.index.team.sugimoto.position}
                                        </h6>
                                        <p>{t.index.team.sugimoto.message}</p>
                                        <a href={sugimoto.skillSheet}>
                                            {t.index.team.sugimoto.skillSheet}
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        {/* <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t2">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Michael Doe</h5>
                                        <h6 className="subtitle">Property Specialist</h6>
                                        <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t3">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Michael Doe</h5>
                                        <h6 className="subtitle">Property Specialist</h6>
                                        <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t4">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Michael Doe</h5>
                                        <h6 className="subtitle">Property Specialist</h6>
                                        <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col> */}
                    </Row>
                </Container>
                <div className="feature20 up">
                <Container>
                    <Row
                        className="wrap-feature-20 justify-content-center"
                    >
                        <Col lg="6">
                            <Card className="bg-light">
                                <Row>
                                    <Col md="8">
                                        <CardBody className="d-flex no-block">
                                            <div className="m-r-20">
                                                <PersonSearchIcon/>
                                            </div>
                                            <div>
                                                <h5 className="font-medium">
                                                    {
                                                        t.index.feature.num2
                                                            .section4.title
                                                    }
                                                </h5>
                                            </div>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" className="text-center">
                                        <a
                                            onClick={() => {
                                                router.push('/recruiting')
                                            }}
                                            className="text-white linking bg-info"
                                        >
                                            {
                                                t.index.feature.num2.section4
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
            </div>
        </div>
    );
};

export default TeamComponent;
