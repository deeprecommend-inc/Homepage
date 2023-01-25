import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { useLocale } from '../../../locales/useLocale';
import SimpleBar from 'simplebar-react';

const PreRegistrationComponent = ({ needsTitle = true }) => {
    const { t, locale } = useLocale();

    return (
        <div>
            {needsTitle ? (
                <div className="spacer bg-light">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="7" className="text-center">
                                <h1 className="title font-bold">
                                    {t.index.preRegistration.title}
                                </h1>
                                <h6 className="subtitle">
                                    {t.index.preRegistration.subtitle}
                                </h6>
                            </Col>
                        </Row>
                    </Container>
                </div>
            ) : (
                <></>
            )}
            <div className="py-5 d-flex align-items-center align-items-center">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdvBYdKI-XdYUZAxjZVMZz-F9CtYNeRwRTqZfijhE0A2gswYw/viewform?embedded=true"
                    width="100%"
                    height="760"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                ></iframe>
            </div>
        </div>
    );
};

export default PreRegistrationComponent;
