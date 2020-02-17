import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./contactForm.css";

const ContactForm = () => {
  return (
    <Form onSubmit>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicSubject">
            <Form.Label className="text-family">Sujet</Form.Label>
            <Form.Control
              className="text-family-message"
              onChange
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
              rows="6"
              onChange
              size="lg"
              name="message"
              type="text"
              placeholder="message"
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default ContactForm;
