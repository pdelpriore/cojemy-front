import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDaysInMonth } from "../../../components/calendar/getDaysInMonth";
import { getFirstDayOfWeekInMonth } from "../../../components/calendar/getFirstDayOfWeekInMonth";
import { strings } from "../../../strings/Strings";

const useCalendar = () => {
  const dayNames = [
    strings.myEvents.calendar.PON,
    strings.myEvents.calendar.WT,
    strings.myEvents.calendar.SR,
    strings.myEvents.calendar.CZW,
    strings.myEvents.calendar.PIA,
    strings.myEvents.calendar.SOB,
    strings.myEvents.calendar.NDZ,
  ];

  // tutaj 1 reprezentuje miesiac luty, 2 marzec, itd.
  let firstDayOfWeekInMonth = getFirstDayOfWeekInMonth(2, 2020);

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

  for (let i = 1; i <= getDaysInMonth(3, 2020); i++) {
    numberOfDaysInMonth.push(i);
  }

  return {
    dayNames,
    numberOfDaysInMonth,
    firstDayOfWeekInMonth,
  };
};

export default useCalendar;
