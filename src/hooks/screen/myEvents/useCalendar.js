import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { getDaysInMonth } from "../../../components/calendar/getDaysInMonth";
import { getNewSelectedDate } from "../../../components/calendar/getNewSelectedDate";
import { strings } from "../../../strings/Strings";

const useCalendar = () => {
  const now = new Date();

  const dayNames = [
    strings.myEvents.calendar.days.MON,
    strings.myEvents.calendar.days.TUE,
    strings.myEvents.calendar.days.WED,
    strings.myEvents.calendar.days.THU,
    strings.myEvents.calendar.days.FRI,
    strings.myEvents.calendar.days.SAT,
    strings.myEvents.calendar.days.SUN,
  ];

  const months = [
    strings.myEvents.calendar.months.JAN,
    strings.myEvents.calendar.months.FEB,
    strings.myEvents.calendar.months.MAR,
    strings.myEvents.calendar.months.APR,
    strings.myEvents.calendar.months.MAY,
    strings.myEvents.calendar.months.JUN,
    strings.myEvents.calendar.months.JUL,
    strings.myEvents.calendar.months.AUG,
    strings.myEvents.calendar.months.SEP,
    strings.myEvents.calendar.months.OCT,
    strings.myEvents.calendar.months.NOV,
    strings.myEvents.calendar.months.DEC,
  ];

  const [monthIndex, setMonthIndex] = useState(now.getMonth());
  const [newSelectedDate, setNewSelectedDate] = useState(
    getNewSelectedDate(monthIndex, now.getFullYear())
  );
  const [daysInMonth, setDaysInMonth] = useState(
    getDaysInMonth(monthIndex + 1, now.getFullYear())
  );
  const [selectedMonth, setSelectedMonth] = useState(
    months[newSelectedDate.selectedMonth]
  );
  const [selectedDay, setSelectedDay] = useState({});
  const [inputs, setInputs] = useState({});

  const handlePreviousMonth = (e) => {
    e.preventDefault();
    monthIndex >= now.getMonth() && setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = (e) => {
    e.preventDefault();
    !moment(
      moment(now.setHours(0, 0, 0, 0)).add(moment.duration(1, "y"))._d
    ).isSame(newSelectedDate.newDate.setHours(0, 0, 0, 0)) &&
      setMonthIndex(monthIndex + 1);
  };
  const handleSelectDate = (data) => {
    setSelectedDay(data);
  };
  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]:
        e.target.name === strings.myEvents.calendar.inputNames.HOURS
          ? e.target.value.replace(/[^0-9]+/g, "")
          : e.target.name === strings.myEvents.calendar.inputNames.MINUTES
          ? e.target.value.replace(/[^0-9]+/g, "")
          : e.target.value,
    }));
  };

  const numberOfDaysInMonth = [];
  if (newSelectedDate.firstDay > 0) {
    for (let i = 0; i < newSelectedDate.firstDay - 1; i++) {
      numberOfDaysInMonth.push("");
    }
  } else {
    for (let i = 0; i < 7 - 1; i++) {
      numberOfDaysInMonth.push("");
    }
  }

  for (let i = 1; i <= daysInMonth; i++) {
    numberOfDaysInMonth.push(
      new Date(
        newSelectedDate.selectedYear,
        newSelectedDate.selectedMonth,
        i,
        0,
        0,
        0,
        0
      )
    );
  }

  useEffect(() => {
    setNewSelectedDate(getNewSelectedDate(monthIndex, now.getFullYear()));
  }, [monthIndex]);

  useEffect(() => {
    setDaysInMonth(getDaysInMonth(monthIndex + 1, now.getFullYear()));
    setSelectedMonth(months[newSelectedDate.selectedMonth]);
  }, [newSelectedDate, monthIndex, months, now]);

  useEffect(() => {
    const initialDate = new Date();
    setInputs((inputs) => ({
      ...inputs,
      hours:
        initialDate.getHours() < 10
          ? `0${initialDate.getHours()}`
          : initialDate.getHours(),
      minutes:
        initialDate.getMinutes() < 10
          ? `0${initialDate.getMinutes()}`
          : initialDate.getMinutes(),
    }));
  }, []);

  useEffect(() => {
    const dateNow = new Date();
    if (
      selectedDay.date &&
      (inputs.hours.length > 1 || inputs.minutes.length > 1) &&
      moment(
        selectedDay.date.setHours(
          parseInt(inputs.hours),
          parseInt(inputs.minutes),
          0,
          0
        )
      ).isBefore(dateNow)
    ) {
      setInputs((inputs) => ({
        ...inputs,
        hours:
          dateNow.getHours() < 10
            ? `0${dateNow.getHours()}`
            : dateNow.getHours(),
        minutes:
          dateNow.getMinutes() < 10
            ? `0${dateNow.getMinutes()}`
            : dateNow.getMinutes(),
      }));
    }
  }, [selectedDay.date, inputs.hours, inputs.minutes]);

  return {
    dayNames,
    numberOfDaysInMonth,
    now,
    selectedMonth,
    monthIndex,
    newSelectedDate,
    selectedDay,
    inputs,
    handleInputChange,
    handlePreviousMonth,
    handleNextMonth,
    handleSelectDate,
  };
};

export default useCalendar;
