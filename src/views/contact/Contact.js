import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import ContactForm from "../../forms/contact/ContactForm";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-section" id={strings.navbar.navHomeItems.CONTACT}>
      <Row className="mb-5" />
      <Row className="mb-5" />
      <Row className="mb-5" />
      <Row>
        <Col xs={12}>
          <div className="first-section">
            <Row>
              <Col xs={2} />
              <Col xs={5}>
                <h1 className="contact-text">
                  {capitalizeFirst(strings.contact.FIRST_SECTION)}
                </h1>
              </Col>
              <Col xs={5}>
                <div className="form-section">
                  <ContactForm />
                  <Button className="button-text" variant="outline-dark">
                    {capitalizeFirst(strings.contact.BUTTON_TEXT)}
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="second-section">
            <footer className="footer">
              <Row>
                <Col xs={1} />
                <Col xs={11}>
                  &#169; {new Date().getFullYear()} {strings.contact.FOOTER}
                </Col>
              </Row>
            </footer>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
