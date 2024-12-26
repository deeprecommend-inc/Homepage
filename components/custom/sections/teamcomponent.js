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
import { site } from '../../../constants/const';

const TeamComponent = () => {
    const router = useRouter();
    const { t } = useLocale();
    const members = [
        {
            twitter: t.index.team.sugimoto.twitter,
            instagram: t.index.team.sugimoto.instagram,
            name: t.index.team.sugimoto.name,
            position: t.index.team.sugimoto.position,
            role: t.index.team.sugimoto.role,
            message: t.index.team.sugimoto.message,
            hasUrl: true,
            urlTitle: t.index.team.sugimoto.skillSheet,
            url: t.index.team.sugimoto.url,
        },
        {
            twitter: t.index.team.yoshida.twitter,
            instagram: t.index.team.yoshida.instagram,
            name: t.index.team.yoshida.name,
            position: t.index.team.yoshida.position,
            role: t.index.team.yoshida.role,
            message: t.index.team.yoshida.message,
            hasUrl: false,
        },
        {
            twitter: t.index.team.tanaka.twitter,
            instagram: t.index.team.tanaka.instagram,
            name: t.index.team.tanaka.name,
            position: t.index.team.tanaka.position,
            role: t.index.team.tanaka.role,
            message: t.index.team.tanaka.message,
            hasUrl: false,
        },
        {
            twitter: t.index.team.shishino.twitter,
            instagram: t.index.team.shishino.instagram,
            name: t.index.team.shishino.name,
            position: t.index.team.shishino.position,
            role: t.index.team.shishino.role,
            message: t.index.team.shishino.message,
            hasUrl: false,
        },
        {
            twitter: t.index.team.yanagisaki.twitter,
            instagram: t.index.team.yanagisaki.instagram,
            name: t.index.team.yanagisaki.name,
            position: t.index.team.yanagisaki.position,
            role: t.index.team.yanagisaki.role,
            message: t.index.team.yanagisaki.message,
            hasUrl: false,
        },
        {
            twitter: t.index.team.kajita.twitter,
            instagram: t.index.team.kajita.instagram,
            name: t.index.team.kajita.name,
            position: t.index.team.kajita.position,
            role: t.index.team.kajita.role,
            message: t.index.team.kajita.message,
            hasUrl: false,
        },
    ];

    return (
        <div style={{ backgroundColor: '#121212', color: '#ffffff' }}>
            <div className="spacer bg-dark">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold" style={{ color: '#ffffff' }}>
                                {t.index.team.title}
                            </h1>
                            <h6 className="subtitle" style={{ color: '#ffffff' }}>
                                {t.index.team.subtitle}
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer team2">
                <Container>
                    <Row className="m-t-30 justify-content-center">
                        {members.map((member, i) => {
                            if (!member.id) {
                                return;
                            }

                            return (
                                <Col
                                    lg="3"
                                    md="6"
                                    className="m-b-30"
                                    data-aos="fade-up"
                                >
                                    <Row className="no-gutters">
                                        {/** 画像定義： variable.scss */}
                                        <Col
                                            md="12"
                                            className={
                                                'pro-pic' +
                                                ' ' +
                                                't' +
                                                (i + 1).toString()
                                            }
                                        >
                                            <div className="card-img-overlay">
                                                <ul className="list-inline">
                                                    {/* <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li> */}
                                                    <li className="list-inline-item">
                                                        {member.twitter ? (
                                                            <a
                                                                href={
                                                                    member.twitter
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <i className="fa fa-twitter"></i>
                                                            </a>
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </li>
                                                    <li className="list-inline-item">
                                                        {member.instagram ? (
                                                            <a
                                                                href={
                                                                    member.instagram
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faInstagram
                                                                    }
                                                                />
                                                            </a>
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </li>
                                                    {/* <li className="list-inline-item"><a href="#"><i className="fa fa-behance"></i></a></li> */}
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col md="12">
                                            <div className="p-t-10">
                                                <h5 className="title font-medium" style={{ color: '#ffffff' }}>
                                                    {member.name}
                                                </h5>
                                                <h6 className="title"></h6>
                                                <h6 className="subtitle" style={{ color: '#ffffff' }}>
                                                    {member.position +
                                                        '\n' +
                                                        member.role}
                                                </h6>
                                                {member.hasUrl ? (
                                                    <a
                                                        href={
                                                            sugimoto.skillSheet
                                                        }
                                                        style={{ color: '#ffffff' }}
                                                    >
                                                        {member.skillSheet}
                                                    </a>
                                                ) : (
                                                    <></>
                                                )}
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
                <div className="feature20 up">
                    <Container>
                        <Row className="wrap-feature-20 justify-content-center">
                            <Col lg="6">
                                <Card style={{ backgroundColor: '#263238', color: '#ffffff' }}>
                                    <Row>
                                        <Col md="8">
                                            <CardBody className="d-flex no-block" style={{ backgroundColor: '#263238', color: '#ffffff' }}>
                                                <div className="m-r-20">
                                                    <PersonSearchIcon style={{ backgroundColor: '#263238', color: '#ffffff' }} />
                                                </div>
                                                <div>
                                                    <h5 className="font-medium" style={{ backgroundColor: '#263238', color: '#ffffff' }}>
                                                        {
                                                            t.index.feature.num2
                                                                .section4.title
                                                        }
                                                    </h5>
                                                </div>
                                            </CardBody>
                                        </Col>
                                        <Col md="4" className="text-center" style={{ backgroundColor: '#263238', color: '#ffffff' }}>
                                            <a
                                                href={site.discord}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white linking bg-info"
                                            >
                                                {
                                                    t.index.feature.num2
                                                        .section4.subtitle
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
