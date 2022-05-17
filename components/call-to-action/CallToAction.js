import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { site } from '../../constants/const';
import { useLocale } from '../../locales/useLocale';

const CallToAction = () => {
    const { t } = useLocale();

    const scrollToServices = () => {
        window.scrollTo({
            top: 750,
            behavior: 'smooth',
        });
    };

    return (
        <div className="coming-soon" id="coming">
            <Container className="py-5 mt-5">
                <Row>
                    <Col md="6">
                        <div className="d-flex align-items-center">
                            <div>
                                <h2 className="title text-white font-weight-bold">
                                    {t.index.callToAction.title}
                                </h2>
                                <h6 className="subtitle font-light text-white"></h6>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: t.index.callToAction
                                            .description,
                                    }}
                                />
                                <Button
                                    className="btn btn-dark m-r-20 btn-md m-t-30"
                                    onClick={scrollToServices}
                                >
                                    {t.index.callToAction.action}
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CallToAction;
