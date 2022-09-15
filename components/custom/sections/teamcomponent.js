/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { sugimoto } from '../../../constants/const';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLine } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';

const TeamComponent = () => {
    const router = useRouter();

    return (
        <div>
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Team</h1>
                            <h6 className="subtitle">
                                Here are some of our teammates
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
                            onClick={() => {
                                router.push('/team/sugimoto');
                            }}
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
                                                    href={sugimoto.line}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faLine}
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
                                            Jin Sugimoto
                                        </h5>
                                        <h6 className="subtitle">CEO</h6>
                                        <p>
                                            Active ∩ Aesthetics ∩ Bold ∩ Crazy ∩
                                            Creative ∩ Curiosity ∩ Hardworking ∩
                                            Introspective ∩ Sensory
                                        </p>
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
            </div>
        </div>
    );
};

export default TeamComponent;
