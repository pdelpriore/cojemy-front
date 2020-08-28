import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import useSearchEventsForm from "../../hooks/form/myEvents/useSearchEventsForm";
import "./myEventsForm.css";
import "../../shared/global.css";
import "react-datepicker/dist/react-datepicker.css";

const SearchEventsForm = () => {
  registerLocale("fr", fr);
  const {
    inputs,
    handleOnChange,
    handleOnBLurDate,
    handleDateTime,
  } = useSearchEventsForm();
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
            <div className="myevents-datepicker-box">
              <Form.Label className="global-form-label">
                {capitalizeFirst(strings.myEvents.SEARCH_DATE)}
              </Form.Label>
              <div className="myevents-datepicker-icon-box">
                <DatePicker
                  minDate={new Date()}
                  className="myevents-datepicker"
                  locale="fr"
                  showTimeSelect={false}
                  onChange={handleDateTime}
                  selected={inputs.eventDate}
                  dateFormat="d MMMM yyyy"
                  onChangeRaw={(e) => e.preventDefault()}
                  onBlur={handleOnBLurDate}
                  withPortal={true}
                  placeholderText={strings.myEvents.SEARCH_DATE_PLACEHOLDER}
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
