import { showCalendarCases } from "../../../config/cases/Cases";

const initialState = {
  calendarShown: false,
};

const showCalendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case showCalendarCases.CALENDAR_SHOWN:
      return { ...state, calendarShown: action.payload };
    default:
      return state;
  }
};

export default showCalendarReducer;
