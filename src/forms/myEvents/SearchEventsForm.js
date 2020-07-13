import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import DatePicker from "react-datepicker";
import moment from "moment";
import { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import useSearchEventsForm from "../../hooks/form/myEvents/useSearchEventsForm";
import "./myEventsForm.css";
import "react-datepicker/dist/react-datepicker.css";

const SearchEventsForm = () => {
  registerLocale("fr", fr);
  const {
    inputs,
    handleOnChange,
    handleInitializeDate,
    handleDateTime,
  } = useSearchEventsForm();
  return (
    <Form>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicSearchCity">
            <Form.Label className="myevents-form-text-family">
              {capitalizeFirst(strings.myEvents.SEARCH_CITY)}
            </Form.Label>
            <Form.Control
              className="myevents-form-text-family-message"
              onChange={handleOnChange}
              value={inputs.city || ""}
              name="city"
              type="text"
              placeholder={strings.myEvents.SEARCH_CITY_PLACEHOLDER}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicSearchEventDate">
            <div className="myevents-datepicker-box">
              <Form.Label className="myevents-form-text-family">
                {capitalizeFirst(strings.myEvents.EVENT_DATE)}
              </Form.Label>
              <div className="myevents-datepicker-icon-box">
                <DatePicker
                  onFocus={handleInitializeDate}
                  minDate={new Date()}
                  minTime={
                    inputs.eventDate &&
                    moment(
                      new Date(inputs.eventDate).setHours(0, 0, 0, 0)
                    ).isSame(new Date().setHours(0, 0, 0, 0))
                      ? new Date().getTime()
                      : new Date().setHours(0, 0, 0, 1)
                  }
                  maxTime={new Date().setHours(23, 59, 59, 999)}
                  timeIntervals={5}
                  className="myevents-datepicker"
                  locale="fr"
                  showTimeSelect={true}
                  onChange={handleDateTime}
                  selected={inputs.eventDate}
                  dateFormat="d MMMM yyyy, HH:mm"
                  onChangeRaw={(e) => e.preventDefault()}
                  withPortal={true}
                />
                <FontAwesomeIcon
                  className="myevents-datepicker-icon"
                  icon={faCalendarAlt}
                />
              </div>
            </div>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchEventsForm;
