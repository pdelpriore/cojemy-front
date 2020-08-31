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
    strings.myEvents.calendar.days.THU,
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
  const [firstDayOfWeekInMonth, setFirstDayOfWeekInMonth] = useState(
    getFirstDayOfWeekInMonth(now.getMonth(), now.getFullYear())
  );
  const [daysInMonth, setDaysInMonth] = useState(
    getDaysInMonth(now.getMonth() + 1, now.getFullYear())
  );
  const [monthIndex, setMonthIndex] = useState(now.getMonth());
  const [chosenMonth, setChosenMonth] = useState(months[monthIndex]);

  const handleNextMonth = () => {
    //monthIndex + 1 maksymalnie do roku
  };

  const handlePreviousMonth = () => {
    //monthIndex - 1 zablokuj jesli month < now
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

  return {
    dayNames,
    numberOfDaysInMonth,
    firstDayOfWeekInMonth,
    now,
    todayDayNumber,
    chosenMonth,
  };
};

export default useCalendar;
