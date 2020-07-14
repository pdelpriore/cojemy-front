import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import { eventButtonItemsArray } from "../../shared/buttonItemsArray";
import { capitalize } from "../../util/Util";
import { showNewEventForm } from "../../redux/myEvents/showNewEventForm/thunk/showNewEventFormThunk";
import useEventButtons from "../../hooks/screen/myEvents/useEventButtons";
import "./myEvents.css";

const MakeEventButtons = () => {
  const dispatch = useDispatch();
  const { eventButtonId } = useSelector((state) => state.eventCategorySelected);
  const { eventUpdated } = useSelector((state) => state.isEventChanged);
  const { activesClasses, toggleActiveClass } = useEventButtons(
    eventButtonItemsArray.length
  );

  useEffect(() => {
    toggleActiveClass(
      eventButtonItemsArray[eventButtonId].id,
      eventButtonItemsArray[eventButtonId].category
    );
    return () => dispatch(showNewEventForm(false));
  }, [eventUpdated, dispatch]);

  return eventButtonItemsArray.map((buttonItem) => (
    <div key={buttonItem.id}>
      <Row>
        <Col xs={2} />
        <Col xs={10}>
          <div className="myevents-button-box">
            <Button
              onClick={(e) => {
                e.preventDefault();
                toggleActiveClass(buttonItem.id, buttonItem.category);
              }}
              variant="dark"
            >
              <div className="myevents-button-text">
                {capitalize(buttonItem.name)}
              </div>
            </Button>
            <div
              className={
                activesClasses[buttonItem.id]
                  ? "myevents-button-border-active"
                  : "myevents-button-border-nonactive"
              }
            ></div>
          </div>
        </Col>
      </Row>
      <Row className="mb-4" />
    </div>
  ));
};

export default MakeEventButtons;
