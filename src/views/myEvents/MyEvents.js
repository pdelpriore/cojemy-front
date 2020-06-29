import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Row, Col, ListGroup, Image, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import ScrollArea from "react-scrollbar";
import MyEventsList from "./MyEventsList";
import MyEventsForm from "../../forms/myEvents/MyEventsForm";
import { showNewEventForm } from "../../redux/myEvents/showNewEventForm/thunk/showNewEventFormThunk";
import MakeEventButtons from "./makeEventButtons";
import Notification from "../../components/notifications/Notification";
import { capitalize } from "../../util/Util";
import { strings } from "../../strings/Strings";
import "./myEvents.css";

const MyEvents = ({ match: { path, url, isExact } }) => {
  const dispatch = useDispatch();
  const { eventButtonId } = useSelector((state) => state.eventCategorySelected);
  const { newEventFormShown } = useSelector(
    (state) => state.isNewEventFormShown
  );
  const { eventChangeError } = useSelector((state) => state.isEventChanged);
  const props = useSpring({
    opacity: 1,
    config: { duration: 200 },
    from: { opacity: 0 },
  });
  return (
    <animated.div style={props} className="myevents-main-area">
      <Navbar path={path} url={url} isExact={isExact} />
      <div className="myevents-first-section">
        <Row>
          <Col xs={3} />
          <Col xs={9}>
            <div className="myevents-list">
              <ScrollArea
                className="myevents-list-simplebar"
                smoothScrolling={true}
              >
                <ListGroup>
                  <MyEventsList />
                </ListGroup>
              </ScrollArea>
            </div>
          </Col>
        </Row>
      </div>
      <div className="myevents-second-section">
        {
          <div className={newEventFormShown ? "myevents-buttons-hidden" : ""}>
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Row>
              {eventButtonId === 1 ? (
                <>
                  <Col xs={3} />
                  <Col xs={3}>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(showNewEventForm(true));
                      }}
                      variant="outline-dark"
                    >
                      <div className="myevents-button-new-event">
                        {capitalize(strings.myEvents.BUTTON_NEW_EVENT)}
                      </div>
                    </Button>
                  </Col>
                  <Col xs={1} />
                </>
              ) : (
                <Col xs={7} />
              )}
              <Col xs={4}>
                <MakeEventButtons />
              </Col>
              <Col xs={1} />
            </Row>
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Row className="mb-3" />
            <Row>
              <Col xs={3} />
              <Col xs={4}>
                <Image
                  className="myevents-main-image"
                  src={require("../../assets/imgs/spoonret.jpg")}
                />
              </Col>
              <Col xs={5} />
            </Row>
          </div>
        }
        {newEventFormShown && (
          <div className="myevents-form-shown">
            <Row className="mb-5" />
            <Row className="mb-4" />
            <Row>
              <Col xs={2} />
              <Col xs={6}>
                <MyEventsForm />
              </Col>
              <Col xs={3}>
                <Row className="mb-5" />
                <Row className="mb-5" />
                <Row className="mb-5" />
                <Row className="mb-5" />
                <Row className="mb-5" />
                <Row className="mb-5" />
                <Row className="mb-5" />
                <Row className="mb-5" />
                <Row className="mb-5" />
                <Row className="mb-5" />
                <Row className="mb-5" />
                <Row className="mb-5" />
                <Row className="mb-5" />
                <Row className="mb-4" />
                <Notification notificationMessage={eventChangeError} />
              </Col>
              <Col xs={1} />
            </Row>
          </div>
        )}
      </div>
    </animated.div>
  );
};

export default MyEvents;
