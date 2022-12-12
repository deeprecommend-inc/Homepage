/* eslint-disable */
import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { site } from '../../constants/const';
import { useLocale } from '../../locales/useLocale';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

const Footer = () => {
    const { t } = useLocale();
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const routerPush = route => {
        router.push(route);
    };

    return (
        <div className="footer4 spacer">
            <Container>
                <Row>
                    <Col lg="3" md="6" className="m-b-30">
                        <h5 className="m-b-20">
                            {t.layout.footer.access.label}
                        </h5>
                        <div className="link-container">
                            <a className="link" href="tel:07017347502">
                                {t.layout.footer.access.phone}
                            </a>
                        </div>
                        <div className="link-container">
                            <a
                                className="link"
                                href="mailto:deeprecommend@gmail.com"
                            >
                                {t.layout.footer.access.email}
                            </a>
                        </div>
                        <div className="link-container">
                            <a
                                className="link"
                                href="https://www.google.com/maps/place/5-ch%C5%8Dme-16-3+Karita,+Sumiyoshi+Ward,+Osaka,+558-0011/@34.6007655,135.512425,17z/data=!3m1!4b1!4m5!3m4!1s0x6000dc17c29e2b17:0xb03725b81bee4a1!8m2!3d34.6007611!4d135.5146137"
                            >
                                {t.layout.footer.access.address}
                            </a>
                        </div>
                    </Col>
                    <Col lg="3" md="6" className="m-b-30">
                        <h5 className="m-b-20">
                            {t.layout.footer.service.label}
                        </h5>
                        <div
                            onClick={() => {
                                routerPush('/thinking');
                            }}
                        >
                            <a className="link">
                                {t.layout.footer.service.deepai}
                            </a>
                        </div>
                        <div
                            onClick={() => {
                                routerPush('/magazine');
                            }}
                        >
                            <a className="link">
                                {t.layout.footer.service.magazine}
                            </a>
                        </div>
                        <div>
                            <a
                                className="link"
                                href={site.deepLab}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t.layout.footer.service.deeplab}
                            </a>
                        </div>
                    </Col>
                    <Col lg="3" md="6" className="m-b-30">
                        <h5 className="m-b-20">
                            {t.layout.footer.customerCare.label}
                        </h5>
                        <div
                            onClick={() => {
                                routerPush('/aboutus');
                            }}
                        >
                            <a className="link">
                                {t.layout.footer.customerCare.aboutUs}
                            </a>
                        </div>
                        <div>
                            <a
                                className="link"
                                href={site.community}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t.layout.footer.customerCare.community}
                            </a>
                        </div>
                        <div
                            onClick={() => {
                                routerPush('/privacypolicy');
                            }}
                        >
                            <a className="link">
                                {t.layout.footer.customerCare.privacyPolicy}
                            </a>
                        </div>
                        <div
                            onClick={() => {
                                routerPush('/contact');
                            }}
                        >
                            <a className="link">
                                {t.layout.footer.customerCare.contact}
                            </a>
                        </div>
                    </Col>
                    <Col lg="3" md="6">
                        <h5 className="m-b-20">{t.layout.footer.sns.label}</h5>
                        <div className="round-social light">
                            <Link href={site.twitter}>
                                <a
                                    className="link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </Link>
                            <Link href={site.instagram}>
                                <a
                                    className="link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </Link>
                            <Link href={site.tiktok}>
                                <a
                                    className="link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MusicNoteIcon
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                        }}
                                    />
                                </a>
                            </Link>
                            <Link href={site.youtube}>
                                <a
                                    className="link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa fa-youtube-play"></i>
                                </a>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <div className="f4-bottom-bar">
                    <Row>
                        <Col md="12">
                            <div className="d-flex font-14">
                                <div className="m-t-10 m-b-10s ml-auto copyright">
                                    All Rights Reserved by{' '}
                                    <Link href="/">
                                        <a className="link">DeepRecommend</a>
                                    </Link>
                                </div>
                                {/* <div className="links ml-auto m-t-10 m-b-10">
                                    <Link href="#">
                                        <a className="p-10 p-l-0">
                                            Terms of Use
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a className="p-10">Legal Disclaimer</a>
                                    </Link>
                                    <Link href="#">
                                        <a className="p-10">Privacy Policy</a>
                                    </Link>
                                </div> */}
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{'DeepAI'}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {t.dialog.ai.content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        {t.dialog.ai.disagree}
                    </Button>
                    <Button>{t.dialog.ai.agree}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default Footer;
