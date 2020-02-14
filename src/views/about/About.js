import React from "react";
import { Row, Col } from "react-bootstrap";
import Area from "./Area";
import "./about.css";

const About = () => {
  return (
    <div className="about-section" id="en savoir plus">
      <Row className="mb-5" />
      <Row className="mb-5" />
      <Row>
        <Col xs={2} />
        <Col xs={7}>
          <Area image="reciperet" text="Trouvez votre recette" />
        </Col>
        <Col xs={3} />
      </Row>
      <Row>
        <Col xs={2} />
        <Col xs={7}>
          <Area image="cookbookret" text="Partagez vos recettes" />
        </Col>
        <Col xs={3} />
      </Row>
      <Row>
        <Col xs={2} />
        <Col xs={7}>
          <Area image="contactret" text="Contactez d'autres passionnés" />
        </Col>
        <Col xs={3} />
      </Row>
      <Row>
        <Col xs={2} />
        <Col xs={7}>
          <Area image="tastingret" text="Organisez vos meetings" />
        </Col>
        <Col xs={3} />
      </Row>
    </div>
  );
};

export default About;
