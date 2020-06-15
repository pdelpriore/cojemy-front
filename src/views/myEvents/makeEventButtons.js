import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { capitalize } from "../../util/Util";
import { strings } from "../../strings/Strings";
import "./myEvents.css";

const MakeEventButtons = () => {
  const eventButtonItems = [
    {
      id: 0,
      name: strings.myEvents.BUTTON_ALL,
      category: strings.myEvents.CAT_ALL,
    },
    {
      id: 1,
      name: strings.myEvents.BUTTON_MY_EVENTS,
      category: strings.myEvents.CAT_MY_EVENTS,
    },
    {
      id: 2,
      name: strings.myEvents.BUTTON_EVENTS_JOINED,
      category: strings.myEvents.CAT_EVENTS_JOINED,
    },
  ];

  return eventButtonItems.map((buttonItem) => (
    <div key={buttonItem.id}>
      <Row>
        <Col xs={2} />
        <Col xs={10}>
          <Button
            onClick={(e) => {
              e.preventDefault();
              //toggleActiveClass(buttonItem.id, buttonItem.category);
            }}
            variant="dark"
            // className={
            //   activesClasses[buttonItem.id]
            //     ? "recipe-button-active"
            //     : "recipebook-knob-button"
            // }
          >
            <div className="myevents-button-text">
              {capitalize(buttonItem.name)}
            </div>
          </Button>
        </Col>
      </Row>
      <Row className="mb-4" />
    </div>
  ));
};

export default MakeEventButtons;
