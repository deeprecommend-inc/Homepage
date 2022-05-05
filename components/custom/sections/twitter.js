import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import { useMediaQuery } from 'react-responsive';
import Script from 'next/script';

const TwitterEmbedded = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    return (
        <>
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">News</h1>
                            <h6 className="subtitle">
                                Here are some of our news from twitter
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer">
                <div
                    style={{
                        width: isTabletOrMobile ? '100vw' : '40vw',
                        height: '70vh',
                        overflow: 'scroll',
                        margin: '0 auto',
                    }}
                >
                    <a
                        className="twitter-timeline"
                        href="https://twitter.com/DeepRecommend?ref_src=twsrc%5Etfw"
                    >
                        Tweets by DeepRecommend
                    </a>{' '}
                    <Script
                        id="twitter-embdded"
                        async
                        src="https://platform.twitter.com/widgets.js"
                        charSet="utf-8"
                    ></Script>
                </div>
            </div>
        </>
    );
};

export default TwitterEmbedded;
