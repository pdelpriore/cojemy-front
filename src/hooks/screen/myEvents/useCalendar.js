import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showCalendar } from "../../../redux/myEvents/showCalendar/thunk/showCalendarThunk";
import { selectEventDate } from "../../../redux/myEvents/selectEventDate/thunk/selectEventDateThunk";
import moment from "moment";
import { getDaysInMonth } from "../../../components/calendar/getDaysInMonth";
import { getNewSelectedDate } from "../../../components/calendar/getNewSelectedDate";
import { strings } from "../../../strings/Strings";

const useCalendar = () => {
  const dispatch = useDispatch();
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
  const [error, setError] = useState({});

  const { eventDate } = useSelector((state) => state.eventDateSelected);

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
      [e.target.name]: e.target.value,
    }));
  };
  const handleSave = (e) => {
    e.preventDefault();
    dispatch(selectEventDate(selectedDay));
    dispatch(showCalendar(false));
  };
  const handleCancel = (e) => {
    e.preventDefault();
    dispatch(showCalendar(false));
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
    if (eventDate.date) {
      setInputs((inputs) => ({
        ...inputs,
        hour: new Date(eventDate.date).toLocaleTimeString("pl-PL", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      }));
      setSelectedDay({
        date: new Date(eventDate.date),
        index: eventDate.index,
      });
    } else {
      setInputs((inputs) => ({
        ...inputs,
        hour: moment(moment(new Date()).add(moment.duration(2, "h"))._d).format(
          "HH:mm"
        ),
      }));
    }
  }, [eventDate]);

  useEffect(() => {
    const dateNow = new Date();
    const inputsSplit = inputs.hour && inputs.hour.split(":");
    if (
      selectedDay.date &&
      inputsSplit &&
      inputs.hour &&
      moment(
        selectedDay.date.setHours(
          parseInt(inputsSplit[0]),
          parseInt(inputsSplit[1]),
          0,
          0
        )
      ).isBefore(
        moment(
          moment(
            dateNow.setHours(dateNow.getHours(), dateNow.getMinutes(), 0, 0)
          ).add(moment.duration(2, "h"))._d
        )
      )
    ) {
      setError((error) => ({
        ...error,
        timeError: `${strings.myEvents.calendar.error.TIME_BEFORE} ${moment(
          moment(
            dateNow.setHours(dateNow.getHours(), dateNow.getMinutes(), 0, 0)
          ).add(moment.duration(2, "h"))._d
        ).format("HH:mm")}`,
      }));
    } else {
      setError({});
    }
  }, [inputs.hour, selectedDay.date]);

  return {
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
  };
};

export default useCalendar;
