import React, { Component } from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import sdgsImg from "../../../assets/images/sdgs/SDGs.png";
import sdgsNumImg from "../../../assets/images/sdgs/SDGs-num.png";
import Image from "next/image";

const SDGsComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">SDGs</h1>
              <h6 className="subtitle">Here are some of our Products</h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="layout-expand layout-column-center py-96">
        <div className="layout-w-m">
          <article className="layout-topic mb-84">
            <div className="sdgs-img align-self-start">
              <Image src={sdgsImg} width="324" height="324" alt="イメージ" />
            </div>
            <section>
              <h1 className="mb-84">Sustainable Development Goals SDGs</h1>
              <p className="l-height-16 mb-48">
                The Sustainable Development Goals (SDGs) are international goals
                for the period from 2016 to 2030, described in the &quot;2030
                Agenda for Sustainable Development&quot; adopted at the UN
                Summit in September 2015 as the successor to the Millennium
                Development Goals (MDGs) established in 2001. The SDGs are
                universal goals that not only developing countries, but also
                developed countries themselves, must address. Japan is also
                actively involved in this effort.
              </p>
              <p>
                Ministry of Foreign Affairs：
                <a
                  href="https://www.mofa.go.jp/mofaj/gaiko/oda/sdgs/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  JAPAN SDGs Action Platform
                </a>
              </p>
            </section>
          </article>

          <article className="layout-topic">
            <div className="sdgs-img">
              <Image src={sdgsNumImg} width="324" height="154" alt="イメージ" />
            </div>
            <section>
              <p className="l-height-16">
                With the introduction of DeepLog, computerized operations and
                management can be done more efficiently, contributing to job
                satisfaction and industrial development, leading to the
                realization of a sustainable society.
              </p>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default SDGsComponent;
