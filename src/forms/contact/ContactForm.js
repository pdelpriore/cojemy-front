import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import useContactForm from "../../hooks/form/useContactForm";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import "./contactForm.css";

const ContactForm = () => {
  const { inputs, handleInputChange, handleSubmit } = useContactForm();
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicSubject">
            <Form.Label className="text-family">
              {capitalizeFirst(strings.contact.SUBJECT)}
            </Form.Label>
            <Form.Control
              className="text-family-message"
              onChange={handleInputChange}
              value={inputs.subject || ""}
              size="lg"
              name="subject"
              type="text"
              placeholder={strings.contact.SUBJECT}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="text-family">
              {capitalizeFirst(strings.contact.EMAIL)}
            </Form.Label>
            <Form.Control
              className="text-family-message"
              onChange={handleInputChange}
              value={inputs.email || ""}
              size="lg"
              name="email"
              type="email"
              placeholder={strings.contact.EMAIL}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicMessage">
            <Form.Label className="text-family">
              {capitalizeFirst(strings.contact.MESSAGE)}
            </Form.Label>
            <Form.Control
              className="text-family-message"
              as="textarea"
              rows="6"
              onChange={handleInputChange}
              value={inputs.message || ""}
              size="lg"
              name="message"
              type="text"
              placeholder={strings.contact.MESSAGE}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Button
            disabled={
              inputs.subject === undefined ||
              inputs.subject === "" ||
              inputs.message === undefined ||
              inputs.message === "" ||
              inputs.email === undefined ||
              inputs.email === ""
            }
            type="submit"
            className="button-text"
            variant="outline-dark"
          >
            {capitalizeFirst(strings.contact.BUTTON_TEXT)}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ContactForm;
