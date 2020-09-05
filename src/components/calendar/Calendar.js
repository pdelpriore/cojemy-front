import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import useCalendar from "../../hooks/screen/myEvents/useCalendar";
import moment from "moment";
import { isWeekend } from "../../components/calendar/isWeekend";
import { getDateTime } from "../../shared/getDateTime";
import { getDate } from "./getDate";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import "./calendar.css";
import "../../shared/global.css";

const Calendar = () => {
  const {
    dayNames,
    numberOfDaysInMonth,
    now,
    selectedMonth,
    monthIndex,
    newSelectedDate,
    selectedDay,
    inputs,
    error,
    handleInputChange,
    handlePreviousMonth,
    handleNextMonth,
    handleSelectDate,
    handleSave,
    handleCancel,
  } = useCalendar();

  const { eventDate } = useSelector((state) => state.eventDateSelected);
  const { eventButtonId } = useSelector((state) => state.eventCategorySelected);

  return (
    <div className="calendar-box">
      <Row>
        <Col xs={eventButtonId === 0 ? 12 : 7}>
          <div>
            <Row>
              <Col xs={1} />
              <Col xs={2}>
                <FontAwesomeIcon
                  className={
                    monthIndex === now.getMonth()
                      ? "calendar-arrows-inactive"
                      : "calendar-left-arrow"
                  }
                  onClick={
                    monthIndex === now.getMonth() ? null : handlePreviousMonth
                  }
                  icon={faChevronCircleLeft}
                />
              </Col>
              <Col xs={6} />
              <Col xs={2}>
                <FontAwesomeIcon
                  className={
                    moment(
                      moment(now.setHours(0, 0, 0, 0)).add(
                        moment.duration(1, "y")
                      )._d
                    ).isSame(newSelectedDate.newDate.setHours(0, 0, 0, 0))
                      ? "calendar-arrows-inactive"
                      : "calendar-right-arrow"
                  }
                  onClick={
                    moment(
                      moment(now.setHours(0, 0, 0, 0)).add(
                        moment.duration(1, "y")
                      )._d
                    ).isSame(newSelectedDate.newDate.setHours(0, 0, 0, 0))
                      ? null
                      : handleNextMonth
                  }
                  icon={faChevronCircleRight}
                />
              </Col>
              <Col xs={1} />
            </Row>
            <Row>
              <Col xs={2} />
              <Col xs={8}>
                <div className="calendar-month-name">{`${selectedMonth} ${newSelectedDate.selectedYear}`}</div>
              </Col>
              <Col xs={2} />
            </Row>
            <Row className="mb-3" />
            <div className="calendar-day-names">
              {dayNames.map((day, index) => (
                <div key={index} className="calendar-day">
                  {day}
                </div>
              ))}
            </div>
            <div className="calendar-days-in-month">
              {numberOfDaysInMonth.length > 0 &&
                numberOfDaysInMonth.map((day, index) =>
                  newSelectedDate.firstDay > 0 ? (
                    <div
                      className={
                        index < newSelectedDate.firstDay - 1
                          ? ""
                          : `${
                              moment(day && day).isBefore(
                                now.setHours(0, 0, 0, 0)
                              )
                                ? "calendar-number-of-day-before-today"
                                : "calendar-number-of-day"
                            } ${
                              isWeekend(
                                day &&
                                  day.getDate() + newSelectedDate.firstDay - 1
                              )
                                ? `${
                                    moment(day && day).isBefore(
                                      now.setHours(0, 0, 0, 0)
                                    )
                                      ? "weekend-before-today"
                                      : "weekend"
                                  }`
                                : ""
                            } ${
                              moment(day && day).isSame(
                                now.setHours(0, 0, 0, 0)
                              )
                                ? "today"
                                : ""
                            } ${
                              moment(day && day).isSame(
                                selectedDay && selectedDay,
                                "day"
                              )
                                ? "selected-date"
                                : ""
                            }`
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        return day &&
                          moment(day).isBefore(now.setHours(0, 0, 0, 0))
                          ? null
                          : handleSelectDate(day);
                      }}
                      key={index}
                    >
                      {day && day.getDate()}
                    </div>
                  ) : (
                    <div
                      className={
                        index < 7 - 1
                          ? ""
                          : `${
                              moment(day && day).isBefore(
                                now.setHours(0, 0, 0, 0)
                              )
                                ? "calendar-number-of-day-before-today"
                                : "calendar-number-of-day"
                            } ${
                              isWeekend(day && day.getDate() + 7 - 1)
                                ? `${
                                    moment(day && day).isBefore(
                                      now.setHours(0, 0, 0, 0)
                                    )
                                      ? "weekend-before-today"
                                      : "weekend"
                                  }`
                                : ""
                            } ${
                              moment(day && day).isSame(
                                now.setHours(0, 0, 0, 0)
                              )
                                ? "today"
                                : ""
                            } ${
                              moment(day && day).isSame(
                                selectedDay && selectedDay,
                                "day"
                              )
                                ? "selected-date"
                                : ""
                            }`
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        return day &&
                          moment(day).isBefore(now.setHours(0, 0, 0, 0))
                          ? null
                          : handleSelectDate(day);
                      }}
                      key={index}
                    >
                      {day && day.getDate()}
                    </div>
                  )
                )}
            </div>
            <Row className="mb-4" />
            <Row>
              <Col xs={1} />
              <Col xs={10}>
                {selectedDay && (
                  <div className="calendar-selected-day">
                    {eventButtonId === 0
                      ? getDate(selectedDay)
                      : getDateTime(selectedDay)}
                  </div>
                )}
              </Col>
              <Col xs={1} />
            </Row>
          </div>
        </Col>
        {eventButtonId !== 0 && (
          <Col xs={5}>
            <div className="calendar-timer-box">
              <Form>
                <Row>
                  <Col xs={12}>
                    <Form.Group controlId="formBasicTimer">
                      <Form.Label className="global-form-label">
                        {strings.myEvents.calendar.HOUR}
                      </Form.Label>
                      <Form.Control
                        onChange={handleInputChange}
                        className="calendar-time-form-control"
                        name="hour"
                        type="time"
                        value={inputs.hour || ""}
                        disabled={!selectedDay}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
              <div className="calendar-time-error">
                {error.timeError ? error.timeError : null}
              </div>
            </div>
          </Col>
        )}
      </Row>
      <Row className="mb-5" />
      <Row>
        <Col xs={2} />
        <Col xs={8}>
          <Row>
            <Col xs={5}>
              <Button
                variant="dark"
                disabled={!selectedDay || error.timeError}
                onClick={handleSave}
              >
                <div className="calendar-button">
                  {!eventDate
                    ? capitalizeFirst(strings.myEvents.calendar.button.SAVE)
                    : capitalizeFirst(strings.myEvents.calendar.button.EDIT)}
                </div>
              </Button>
            </Col>
            <Col xs={2} />
            <Col xs={5}>
              <Button variant="info" onClick={handleCancel}>
                <div className="calendar-button">
                  {capitalizeFirst(strings.myEvents.calendar.button.CANCEL)}
                </div>
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={2} />
      </Row>
    </div>
  );
};

export default Calendar;
