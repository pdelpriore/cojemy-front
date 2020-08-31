import React from "react";
import { Row, Col } from "react-bootstrap";
import useCalendar from "../../hooks/screen/myEvents/useCalendar";
import moment from "moment";
import { isWeekend } from "../../components/calendar/isWeekend";
import "./calendar.css";

const Calendar = () => {
  const {
    dayNames,
    numberOfDaysInMonth,
    firstDayOfWeekInMonth,
    now,
    todayDayNumber,
    chosenMonth,
  } = useCalendar();
  return (
    <div className="calendar-box">
      <Row>
        <Col xs={7}>
          <div>
            <Row>
              <Col xs={2} />
              <Col xs={8}>
                <div className="calendar-month-name">{`${chosenMonth} ${now.getFullYear()}`}</div>
              </Col>
              <Col xs={2} />
            </Row>
            <div className="calendar-day-names">
              {dayNames.map((day, index) => (
                <div key={index} className="calendar-day">
                  {day}
                </div>
              ))}
            </div>
            <div className="calendar-days-in-month">
              {numberOfDaysInMonth.map((dayNumber, index) =>
                firstDayOfWeekInMonth > 0 ? (
                  <div
                    className={
                      index < firstDayOfWeekInMonth - 1
                        ? ""
                        : `${
                            moment(now.setDate(dayNumber)).isBefore(
                              now.setDate(todayDayNumber)
                            )
                              ? "calendar-number-of-day-before-today"
                              : "calendar-number-of-day"
                          } ${
                            Number.isInteger(dayNumber) &&
                            isWeekend(dayNumber - 2)
                              ? `${
                                  moment(now.setDate(dayNumber)).isBefore(
                                    now.setDate(todayDayNumber)
                                  )
                                    ? "weekend-before-today"
                                    : "weekend"
                                }`
                              : ""
                          }`
                    }
                    key={index}
                  >
                    {dayNumber}
                  </div>
                ) : (
                  <div
                    className={
                      index < 7 - 1
                        ? ""
                        : `${
                            moment(now.setDate(dayNumber)).isBefore(
                              now.setDate(todayDayNumber)
                            )
                              ? "calendar-number-of-day-before-today"
                              : "calendar-number-of-day"
                          } ${
                            Number.isInteger(dayNumber) &&
                            isWeekend(dayNumber - 1)
                              ? `${
                                  moment(now.setDate(dayNumber)).isBefore(
                                    now.setDate(todayDayNumber)
                                  )
                                    ? "weekend-before-today"
                                    : "weekend"
                                }`
                              : ""
                          }`
                    }
                    key={index}
                  >
                    {dayNumber}
                  </div>
                )
              )}
            </div>
          </div>
        </Col>
        <Col xs={1} />
        <Col xs={4}>
          <div>timer</div>
        </Col>
      </Row>
      <Row className="mb-5" />
      <Row>
        <Col xs={2} />
        <Col xs={8}>
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
        <Col xs={2} />
      </Row>
    </div>
  );
};

export default Calendar;
