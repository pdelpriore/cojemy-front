import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import useSearchEventsForm from "../../hooks/form/myEvents/useSearchEventsForm";
import { useSelector } from "react-redux";
import moment from "moment";
import "./myEventsForm.css";
import "../../shared/global.css";

const SearchEventsForm = () => {
  const {
    inputs,
    handleOnChange,
    handleShowCalendar,
    handleRemoveDate,
  } = useSearchEventsForm();

  const { eventDate } = useSelector((state) => state.eventDateSelected);

  return (
    <Form>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicSearchCity">
            <Form.Label className="global-form-label">
              {capitalizeFirst(strings.myEvents.SEARCH_CITY)}
            </Form.Label>
            <Form.Control
              className="global-form-control"
              onChange={handleOnChange}
              value={inputs.city || ""}
              name="city"
              type="text"
              placeholder={strings.myEvents.SEARCH_CITY}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicSearchEventDate">
            <Form.Label className="global-form-label">
              {capitalizeFirst(strings.myEvents.SEARCH_DATE)}
            </Form.Label>
            <div className="myevents-form-selected-date-wrapper">
              <div className="myevents-datepicker-icon-box">
                <Form.Control
                  className="global-form-control"
                  onChange={() => {}}
                  value={
                    eventDate ? moment(eventDate).format("DD/MM/YYYY") : ""
                  }
                  onClick={handleShowCalendar}
                  type="text"
                  placeholder={strings.myEvents.SEARCH_DATE_PLACEHOLDER}
                  autoComplete="off"
                />
                <div className="myevents-datepicker-icon-wrapper">
                  <FontAwesomeIcon
                    className="myevents-datepicker-icon"
                    icon={faCalendarAlt}
                  />
                </div>
              </div>
              {eventDate && (
                <FontAwesomeIcon
                  onClick={handleRemoveDate}
                  className="myevents-form-trash-date"
                  icon={faTimes}
                />
              )}
            </div>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchEventsForm;
