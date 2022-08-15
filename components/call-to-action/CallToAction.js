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
            <Container className="py-5 mt-5  d-flex justify-content-center align-items-center">
                <div className="d-flex align-items-center">
                    <div className="text-center">
                        <h2 className="title font-weight-bold">
                            {t.index.callToAction.title}
                        </h2>
                        <h6 className="subtitle font-light"></h6>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: t.index.callToAction.description,
                            }}
                        />
                        <Button
                            className="btn btn-primary m-r-20 btn-md m-t-30"
                            onClick={scrollToServices}
                        >
                            {t.index.callToAction.action}
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CallToAction;
