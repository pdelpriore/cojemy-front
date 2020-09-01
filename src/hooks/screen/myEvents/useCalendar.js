import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDaysInMonth } from "../../../components/calendar/getDaysInMonth";
import { getFirstDayOfWeekInMonth } from "../../../components/calendar/getFirstDayOfWeekInMonth";
import { strings } from "../../../strings/Strings";

const useCalendar = () => {
  const now = new Date();
  const todayDayNumber = now.getDate();

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

  // tutaj 1 reprezentuje miesiac luty, 2 marzec, itd.
  // now.getMonth() zwraca 7 zamiast 8 w przypadku sierpnia, itd.
  const [monthIndex, setMonthIndex] = useState(now.getMonth());
  const [firstDayOfWeekInMonth, setFirstDayOfWeekInMonth] = useState(
    getFirstDayOfWeekInMonth(monthIndex, now.getFullYear())
  );
  const [daysInMonth, setDaysInMonth] = useState(
    getDaysInMonth(monthIndex + 1, now.getFullYear())
  );
  const [chosenMonth, setChosenMonth] = useState(months[monthIndex]);

  const handlePreviousMonth = (e) => {
    //monthIndex - 1 zablokuj jesli month < now
    e.preventDefault();
    monthIndex >= now.getMonth() && setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = (e) => {
    //monthIndex + 1 maksymalnie do roku
    e.preventDefault();
    setMonthIndex(monthIndex + 1);
  };

  const numberOfDaysInMonth = [];
  if (firstDayOfWeekInMonth > 0) {
    for (let i = 0; i < firstDayOfWeekInMonth - 1; i++) {
      numberOfDaysInMonth.push("");
    }
  } else {
    for (let i = 0; i < 7 - 1; i++) {
      numberOfDaysInMonth.push("");
    }
  }

  for (let i = 1; i <= daysInMonth; i++) {
    numberOfDaysInMonth.push(i);
  }

  useEffect(() => {
    setFirstDayOfWeekInMonth(
      getFirstDayOfWeekInMonth(monthIndex, now.getFullYear())
    );
    setDaysInMonth(getDaysInMonth(monthIndex + 1, now.getFullYear()));
    setChosenMonth(months[monthIndex]);
  }, [monthIndex]);

  return {
    dayNames,
    numberOfDaysInMonth,
    firstDayOfWeekInMonth,
    now,
    todayDayNumber,
    chosenMonth,
    monthIndex,
    handlePreviousMonth,
    handleNextMonth,
  };
};

export default useCalendar;
