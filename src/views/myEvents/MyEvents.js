import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Row, Col, ListGroup, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import useMyEvents from "../../hooks/screen/myEvents/useMyEvents";
import ScrollArea from "react-scrollbar";
import MyEventsList from "./MyEventsList";
import MyEventsForm from "../../forms/myEvents/MyEventsForm";
import SearchEventsForm from "../../forms/myEvents/SearchEventsForm";
import { showNewEventForm } from "../../redux/myEvents/showNewEventForm/thunk/showNewEventFormThunk";
import MakeEventButtons from "./makeEventButtons";
import Notification from "../../components/notifications/Notification";
import EventPreview from "./EventPreview";
import Calendar from "../../components/calendar/Calendar";
import Emoji from "../../components/emoji/Emoji";
import { capitalize } from "../../util/Util";
import { strings } from "../../strings/Strings";
import "./myEvents.css";

const MyEvents = ({ match: { path, url, isExact } }) => {
  const dispatch = useDispatch();
  const { eventButtonId } = useSelector((state) => state.eventCategorySelected);
  const { newEventFormShown } = useSelector(
    (state) => state.isNewEventFormShown
  );
  const { eventPreviewShown } = useSelector((state) => state.eventPreview);
  const { eventChangeError } = useSelector((state) => state.isEventChanged);
  const { eventsError } = useSelector((state) => state.events);
  const { logoutError } = useSelector((state) => state.logout);
  const { emojiError } = useSelector((state) => state.emojis);
  const { eventPreviewError } = useSelector((state) => state.eventPreview);
  const { addressesRetrievedError } = useSelector(
    (state) => state.addressSuggestions
  );
  const { locationDetailsError } = useSelector(
    (state) => state.locationDetails
  );
  const { searchEventFilled } = useSelector(
    (state) => state.isSearchEventFormFilled
  );
  const { calendarShown } = useSelector((state) => state.isCalendarShown);
  const { emojisShown } = useSelector((state) => state.isEmojiShown);

  const { skip, handlePrev, handleNext } = useMyEvents();

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
          <div
            className={
              newEventFormShown || eventPreviewShown
                ? "myevents-buttons-hidden"
                : ""
            }
          >
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Row className="mb-5" />
            <div className="myevents-top-box">
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
                        className="myrecipes-button-new-recipe"
                        variant="outline-dark"
                      >
                        <FontAwesomeIcon
                          className="mails-button-icon"
                          icon={faCalendarAlt}
                        />
                        <div className="myevents-button-new-event">
                          {capitalize(strings.myEvents.BUTTON_NEW_EVENT)}
                        </div>
                      </Button>
                    </Col>
                    <Col xs={1} />
                  </>
                ) : eventButtonId === 0 ? (
                  <>
                    <Col xs={1} />
                    <Col xs={5}>
                      <SearchEventsForm />
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
              {eventButtonId === 0 && !searchEventFilled && (
                <Row>
                  <Col xs={1} />
                  <Col xs={1}>
                    <FontAwesomeIcon
                      className={
                        skip === 1
                          ? "recipebook-arrows-inactive"
                          : "recipebook-left-arrow"
                      }
                      onClick={skip === 1 ? null : handlePrev}
                      icon={faChevronCircleLeft}
                    />
                  </Col>
                  <Col xs={2} />
                  <Col xs={1}>
                    <FontAwesomeIcon
                      className={
                        eventsError
                          ? "recipebook-arrows-inactive"
                          : "recipebook-right-arrow"
                      }
                      onClick={eventsError ? null : handleNext}
                      icon={faChevronCircleRight}
                    />
                  </Col>
                  <Col xs={7} />
                </Row>
              )}
            </div>
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
                <Notification
                  notificationMessage={
                    eventChangeError ||
                    logoutError ||
                    addressesRetrievedError ||
                    locationDetailsError ||
                    eventPreviewError ||
                    emojiError
                  }
                />
              </Col>
              <Col xs={1} />
            </Row>
          </div>
        )}
        {eventPreviewShown && (
          <div className="eventpreview-recipe-preview">
            <Row className="mb-5" />
            <Row className="mb-5" />
            <EventPreview />
          </div>
        )}
      </div>
      {calendarShown && (
        <div className="myevents-calendar-overlay">
          <Row className="mb-5" />
          <Row className="mb-5" />
          <Row className="mb-5" />
          <Row>
            <Col xs={4} />
            <Col xs={4}>
              <Calendar />
            </Col>
            <Col xs={4} />
          </Row>
        </div>
      )}
      {emojisShown && (
        <div className="myevents-calendar-overlay">
          <Row className="mb-5" />
          <Row className="mb-4" />
          <Row>
            <Col xs={4} />
            <Col xs={4}>
              <Emoji />
            </Col>
            <Col xs={4} />
          </Row>
        </div>
      )}
    </animated.div>
  );
};

export default MyEvents;
