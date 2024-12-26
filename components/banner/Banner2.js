import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import { site } from '../../constants/const';
import { useLocale } from '../../locales/useLocale';
import { useRouter } from 'next/router';
import brainBanner from '../../assets/images/brain_banner.gif'; // Import the image like in file_context_0

const Banner2 = () => {
    const { t } = useLocale();
    const router = useRouter();

    const scrollToProduct = () => {
        document.getElementById('product-section').scrollIntoView({
            behavior: 'smooth',
        });
    };

    const scrollToServices = () => {
        document.getElementById('services-section').scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <div
            className="static-slider-head banner2"
            style={{
                overflow: 'hidden',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative', // Added for positioning the image
            }}
        >
            <Image
                src={brainBanner} // Use the imported image
                alt="Banner Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                style={{ zIndex: -1 }} // Ensures the image is behind the content
            />
            <Container>
                <Row className="justify-content-center text-center">
                    <Col
                        lg="12"
                        md="12"
                        className="align-self-center"
                        data-aos="flip-down"
                    >
                        <h1 style={{ color: '#fff' }}>{t.index.banner.title}</h1>
                        <h4 style={{ color: '#fff' }}>{t.index.banner.copy}</h4>
                        <a
                            className="btn btn-md m-r-20 btn-outline-primary m-t-30"
                            onClick={scrollToProduct} 
                        >
                            AI Agent
                        </a>
                        <a
                            className="btn btn-md m-t-30 btn-outline-secondary"
                            onClick={scrollToServices}
                        >
                            Neuromarketing
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner2;
