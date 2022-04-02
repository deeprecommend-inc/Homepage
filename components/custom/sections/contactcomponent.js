import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import { smtp } from "../../../constants/const";
import { useLocale } from "../../../locales/useLocale";
import Snackbar from '@mui/material/Snackbar';

const ContactComponent = () => {
  const { t } = useLocale();
  const [snackbar, setSnackbar] = useState(false);
  const [snackbarMes, setSnackbarMes] = useState('');
  
  const sendMessage = () => {
    const name = document.getElementById('inputName').value;
    const email = document.getElementById('inputEmail').value;
    const message = document.getElementById('inputMessage').value;

    Email.send({
        Host : smtp.servername,
        Username : smtp.username,
        Password : smtp.password,
        To : smtp.username,
        From : email,
        Subject : `${name}さんからホームページへのお問い合わせ`,
        Body : message,
    }).then(
      message => openSnackbar(message)
    );
  }

  const openSnackbar = (messge) => {
    setSnackbarMes(messge);
    setSnackbar(true);
    setTimeout(() => {
      setSnackbar(false);
    }, 3000)
  }

  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">{t.contact.form.title}</h1>
              <h6 className="subtitle">
                {t.contact.form.subtitle}
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="contact1">
        <Row>
          <Container>
            <div className="spacer">
              <Row className="m-0">
                <Col lg="8">
                  <div className="contact-box p-r-40">
                    <h4 className="title">{t.contact.form.inner.title}</h4>
                    <Form>
                      <Row>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input type="text" id="inputName" placeholder={t.contact.form.inner.name} />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input type="text" id="inputEmail" placeholder={t.contact.form.inner.email} />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup className="m-t-15">
                            <Input
                              type="textarea"
                              name="text"
                              id="inputMessage"
                              placeholder={t.contact.form.inner.description}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <Button
                            className="btn btn-outline-primary m-t-20 btn-arrow"
                            onClick={sendMessage}
                          >
                            <span>
                              {" "}
                              {t.contact.form.inner.submit} <i className="ti-arrow-right"></i>
                            </span>
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
                <Col lg="4">
                  <div className="detail-box p-40 bg-info">
                    <h2 className="text-white">DeepRecommend</h2>
                    <p className="text-white m-t-30 op-8">
                      070 1734 7502
                      <br /> deeprecommend@gmail.com
                    </p>
                    <p className="text-white op-8">
                      {t.contact.detailBox.address}
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </Row>
      </div>
      <Snackbar
        open={snackbar}
        message={snackbarMes}
        anchorOrigin={{
          vertical: 'top', horizontal: 'center'
        }}
      />
      <script src="https://smtpjs.com/v3/smtp.js"></script>
    </div>
  );
};

export default ContactComponent;
