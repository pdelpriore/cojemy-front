import React from "react";
import { Form, Row, Col, Button, Spinner } from "react-bootstrap";
import useContactForm from "../../hooks/form/contact/useContactForm";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import { useSelector } from "react-redux";
import "./contactForm.css";
import "../../shared/global.css";

const ContactForm = () => {
  const { loading } = useSelector((state) => state.customerContact);
  const { inputs, handleInputChange, handleSubmit } = useContactForm();
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicSubject">
            <Form.Label className="global-form-label">
              {capitalizeFirst(strings.contact.SUBJECT)}
            </Form.Label>
            <Form.Control
              className="contact-form-control"
              onChange={handleInputChange}
              value={inputs.subject || ""}
              size="lg"
              name="subject"
              type="text"
              placeholder={strings.contact.SUBJECT_PLACEHOLDER}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="global-form-label">
              {capitalizeFirst(strings.contact.EMAIL)}
            </Form.Label>
            <Form.Control
              className="contact-form-control"
              onChange={handleInputChange}
              value={inputs.email || ""}
              size="lg"
              name="email"
              type="email"
              placeholder={strings.contact.EMAIL_PLACEHOLDER}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicMessage">
            <Form.Label className="global-form-label">
              {capitalizeFirst(strings.contact.MESSAGE)}
            </Form.Label>
            <Form.Control
              className="contact-form-control"
              as="textarea"
              rows="4"
              onChange={handleInputChange}
              value={inputs.message || ""}
              size="lg"
              name="message"
              type="text"
              placeholder={strings.contact.MESSAGE_PLACEHOLDER}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Button
            disabled={
              loading ||
              inputs.subject === undefined ||
              inputs.subject === "" ||
              inputs.message === undefined ||
              inputs.message === "" ||
              inputs.email === undefined ||
              inputs.email === ""
            }
            type="submit"
            className="global-button-label"
            variant="outline-dark"
          >
            <div className="contact-spinner">
              {loading && (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
            </div>
            {loading ? (
              <div className="contact-button-loading">
                {capitalizeFirst(strings.contact.BUTTON_TEXT_LOADING)}
              </div>
            ) : (
              <div>{capitalizeFirst(strings.contact.BUTTON_TEXT)}</div>
            )}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ContactForm;
