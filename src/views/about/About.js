import React from "react";
import { Row, Col } from "react-bootstrap";
import Area from "./Area";
import { strings } from "../../strings/Strings";
import "./about.css";

const About = () => {
  return (
    <div className="about-section" id={strings.navbar.navItems.ABOUT}>
      <Row className="mb-5" />
      <Row className="mb-5" />
      <Row>
        <Col xs={2} />
        <Col xs={7}>
          <Area image="reciperet" text={strings.about.FIRST_AREA} />
        </Col>
        <Col xs={3} />
      </Row>
      <Row>
        <Col xs={2} />
        <Col xs={7}>
          <Area image="cookbookret" text={strings.about.SECOND_AREA} />
        </Col>
        <Col xs={3} />
      </Row>
      <Row>
        <Col xs={2} />
        <Col xs={7}>
          <Area image="contactret" text={strings.about.THIRD_AREA} />
        </Col>
        <Col xs={3} />
      </Row>
      <Row>
        <Col xs={2} />
        <Col xs={7}>
          <Area image="tastingret" text={strings.about.FOURTH_AREA} />
        </Col>
        <Col xs={3} />
      </Row>
    </div>
  );
};

export default About;
