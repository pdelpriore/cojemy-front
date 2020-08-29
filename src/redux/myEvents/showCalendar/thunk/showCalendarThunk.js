import { showCalendarCases } from "../../../config/cases/Cases";

export const showCalendar = (bool) => {
  return (dispatch, getState) => {
    dispatch({ type: showCalendarCases.CALENDAR_SHOWN, payload: bool });
  };
};
