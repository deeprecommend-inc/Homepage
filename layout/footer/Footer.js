/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import { site } from "../../constants/const";
import { useLocale } from "../../locales/useLocale";

const Footer = () => {
  const { t } = useLocale();

  return (
    <div className="footer4 b-t spacer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">{t.layout.footer.access.label}</h5>
            <div className="link-container">
              <a className="link" href="tel:07017347502">
                {t.layout.footer.access.phone}
              </a>
            </div>
            <div className="link-container">
              <a className="link" href="mailto:deeprecommend@gmail.com">
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
            <h5 className="m-b-20">{t.layout.footer.service.label}</h5>
            <div>
              <a className="link" href="https://deep-log.net">
                {t.layout.footer.service.deeplog}
              </a>
            </div>
            <div>
              <a className="link" href="https://deep-matching.com">
                {t.layout.footer.service.cmcn}
              </a>
            </div>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">{t.layout.footer.customerCare.label}</h5>
            <a className="link" href="/privacypolicy">
              {t.layout.footer.customerCare.privacyPolicy}
            </a>
          </Col>
          <Col lg="3" md="6">
            <h5 className="m-b-20">{t.layout.footer.sns.label}</h5>
            <div className="round-social light">
              <Link href={site.github}>
                <a className="link" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github"></i>
                </a>
              </Link>
              <Link href={site.twitter}>
                <a className="link" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter"></i>
                </a>
              </Link>
              <Link href={site.youtube}>
                <a className="link" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </Link>
              <Link href={site.instagram}>
                <a className="link" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram"></i>
                </a>
              </Link>
              <Link href={site.facebook}>
                <a className="link" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook"></i>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
        <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className="d-flex font-14">
                <div className="m-t-10 m-b-10 copyright">
                  All Rights Reserved by{" "}
                  <Link href="/">
                    <a className="link">DeepRecommend</a>
                  </Link>
                </div>
                {/* <div className="links ml-auto m-t-10 m-b-10">
                  <Link href="#">
                    <a className="p-10 p-l-0">Terms of Use</a>
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
    </div>
  );
};
export default Footer;
