import React from "react";
import { Row, Col, Nav, Image } from "react-bootstrap";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import ContactForm from "../../forms/contact/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Notification from "../../components/notifications/Notification";
import { useSelector } from "react-redux";
import "./contact.css";

const Contact = () => {
  const { emailSent } = useSelector(state => state.customerContact);
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
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={3} />
              <Col xs={3}>
                <Notification notificationMessage={emailSent} />
              </Col>
              <Col xs={6} />
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="second-section">
            <footer>
              <Row className="mb-3" />
              <Row>
                <Col xs={2} />
                <Col xs={8}>
                  <div className="social-area">
                    <Image
                      className="social-icon"
                      src={require("../../assets/imgs/facebook2ret.jpg")}
                      roundedCircle
                    />
                    <Image
                      className="social-icon"
                      src={require("../../assets/imgs/instagramret.jpg")}
                      roundedCircle
                    />
                  </div>
                </Col>
                <Col xs={2} />
              </Row>
              <Row>
                <Col xs={9} />
                <Col xs={3}>
                  <div className="footer-author">
                    <p className="footer-paragraph">
                      &#169; {new Date().getFullYear()} {strings.contact.FOOTER}
                    </p>
                    <Nav.Link href={strings.path.LINKEDIN} target="_blank">
                      <FontAwesomeIcon
                        className="linkedin-icon"
                        icon={faLinkedin}
                      />
                    </Nav.Link>
                  </div>
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
