import React from "react";
import { Row, Col } from "react-bootstrap";
import "./myEvents.css";

const Calendar = () => {
  return (
    <div className="calendar-main">
      <Row className="mb-5" />
      <Row className="mb-5" />
      <Row className="mb-5" />
      <Row className="mb-5" />
      <Row>
        <Col xs={3} />
        <Col xs={6}>
          <div className="calendar-box">
            <Row>
              <Col xs={7}>
                <div>calendar</div>
              </Col>
              <Col xs={1} />
              <Col xs={4}>
                <div>timer</div>
              </Col>
            </Row>
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Row>
              <Col xs={4} />
              <Col xs={4}>
                <Row>
                  <Col xs={5}>
                    <div>button submit</div>
                  </Col>
                  <Col xs={2} />
                  <Col xs={5}>
                    <div>button cancel</div>
                  </Col>
                </Row>
              </Col>
              <Col xs={4} />
            </Row>
          </div>
        </Col>
        <Col xs={3} />
      </Row>
    </div>
  );
};

export default Calendar;
