import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { strings } from "../../strings/Strings";
import Img from "react-image";
import { eventData } from "../../redux/myEvents/eventPreview/thunk/eventPreviewThunk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faUsers, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import fr from "timeago.js/lib/lang/fr";
import { createDate } from "../../util/Util";
import "./myEvents.css";

const MyEventsList = () => {
  timeago.register("fr", fr);

  const dispatch = useDispatch();
  const { loadingEvents, eventsRetrieved, eventsError } = useSelector(
    (state) => state.events
  );

  return loadingEvents ? (
    <div className="myevents-loading-area">
      <Spinner animation="border" role="status" variant="light" />
    </div>
  ) : eventsError ? (
    <div className="myevents-item-noevents">{eventsError}</div>
  ) : (
    <div className="myevents-list-main-area">
      {eventsRetrieved !== null &&
        eventsRetrieved.map((eventRetrieved, index) => (
          <div
            onClick={(e) => {
              e.preventDefault();
              dispatch(eventData(eventRetrieved));
            }}
            className="myevents-item"
            key={index}
          >
            <Row>
              <Col xs={3}>
                <Img
                  className="myevents-item-picture"
                  src={
                    eventRetrieved.eventImage
                      ? strings.path.IMAGE_REQUEST + eventRetrieved.eventImage
                      : require("../../assets/imgs/eventret.jpg")
                  }
                  loader={<Spinner animation="border" variant="info" />}
                />
              </Col>
              <Col xs={9}>
                <Row>
                  <Col xs={7} />
                  <Col xs={5}>
                    <div>
                      <TimeAgo
                        className="myevents-item-timeago"
                        datetime={createDate(eventRetrieved.creationDate)}
                        locale="fr"
                      />
                    </div>
                  </Col>
                </Row>
                <div className="myevents-item-title">
                  {eventRetrieved.title}
                </div>
                <div style={{ height: 5 }} />
                <div className="myevents-item-author">
                  <div className="myevents-item-icon">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div>{eventRetrieved.author.name}</div>
                </div>
                <div className="myevents-item-available-places">
                  <div className="myevents-item-icon">
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                  <div>
                    {eventRetrieved.participants
                      ? eventRetrieved.participants.length
                      : 0}
                  </div>
                </div>
                <div className="myevents-item-location">
                  <div className="myevents-item-icon">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div>{eventRetrieved.eventAddress.city}</div>
                </div>
              </Col>
            </Row>
          </div>
        ))}
    </div>
  );
};

export default MyEventsList;
