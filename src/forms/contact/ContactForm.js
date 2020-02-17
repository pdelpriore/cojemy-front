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
            <Form.Label className="text-family">Sujet</Form.Label>
            <Form.Control
              className="text-family-message"
              onChange={handleInputChange}
              value={inputs.subject || ""}
              size="lg"
              name="subject"
              type="text"
              placeholder="sujet"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicMessage">
            <Form.Label className="text-family">Message</Form.Label>
            <Form.Control
              className="text-family-message"
              as="textarea"
              rows="7"
              onChange={handleInputChange}
              value={inputs.message || ""}
              size="lg"
              name="message"
              type="text"
              placeholder="message"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Button
            disabled={
              inputs.subject === undefined || inputs.message === undefined
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
