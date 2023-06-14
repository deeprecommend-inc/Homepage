// チームメイト募集中

// ・長所と短所を一言で言い表せる方（全部正直で職能・得意・苦手など）
// ・DeepRecommend株式会社の企業価値向上に努めていただける方（報酬は高く設定する前提です）
// ・雇用形態が不確定でも大丈夫な方（アルバイト・正社員・業務委託 ※参加するだけの場合もあります）
import React from 'react';
import Head from 'next/head';
import { useLocale } from '../locales/useLocale';
import HeaderComponent from '../components/custom/sections/headercomponent';
import { NextSeo } from 'next-seo';
import { imgUrl, site } from '../constants/const';
import ContactComponent from '../components/custom/sections/contact';
import Footer from '../layout/footer/Footer';
import CallToAction from '../components/call-to-action/CallToAction';
import Banner2 from '../components/banner/Banner2';
import PortfolioComponent from '../components/custom/sections/portfoliocomponent';
import TechnologyUsed from '../components/custom/sections/technologyUsed';
import BannerComponent from '../components/custom/sections/bannercomponent';
import FormBannerComponent from '../components/custom/sections/formbannercomponent';
import WorkComponent from '../components/custom/sections/workcomponent';
import TestimonialComponent from '../components/custom/sections/testimonialcomponent';
import FeatureComponent from '../components/custom/sections/featurecomponent';
import PricingComponent from '../components/custom/sections/pricingcomponent';
import TwitterEmbedded from '../components/custom/sections/twitter';
import SDGsComponent from '../components/custom/sections/SDGs';
import TeamComponent from '../components/custom/sections/teamcomponent';
import {
    C2aComponent,
    OnlyAskForQuestion,
} from '../components/custom/sections/c2acomponent';
import BlogComponent from '../components/custom/sections/blogcomponent';
import Banner from '../components/banner/Banner';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import discordImg from '../assets/images/features/feature13/discord.png';
import Image from 'next/image';
import SimpleBar from 'simplebar-react';

const Recruiting = () => {
    const { t, locale } = useLocale();

    return (
        <div id="container">
            <HeaderComponent />
            <SimpleBar
                style={{
                    maxWidth: '750px',
                    margin: '64px auto',
                    whiteSpace: 'normal',
                    padding: '0 24px',
                }}
            >
                <span
                    dangerouslySetInnerHTML={{ __html: t.recruiting.content }}
                />
            </SimpleBar>
            <div className="feature20 up">
                <Container>
                    <Row className="wrap-feature-20 justify-content-center">
                        <Col lg="6">
                            <Card className="bg-light">
                                <Row>
                                    <Col md="8">
                                        <CardBody className="d-flex no-block">
                                            <div className="m-r-20">
                                                <Image
                                                    src={discordImg}
                                                    height="50"
                                                    width="50"
                                                    className="rounded"
                                                    alt="img"
                                                />
                                            </div>
                                            <div>
                                                <h5 className="font-medium">
                                                    {
                                                        t.index.feature.num2
                                                            .section3.title
                                                    }
                                                </h5>
                                            </div>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" className="text-center">
                                        <a
                                            href={site.discord}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-white linking bg-info"
                                        >
                                            {
                                                t.index.feature.num2.section3
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
            <Footer />
        </div>
    );
};

export default Recruiting;
