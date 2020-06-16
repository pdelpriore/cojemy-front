import { showNewEventFormCases } from "../../../config/cases/Cases";

const initialState = {
  newEventFormShown: false,
};

const showNewEventFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case showNewEventFormCases.FORM_SHOWN:
      return {
        ...state,
        newEventFormShown: action.payload,
      };
    default:
      return state;
  }
};

export default showNewEventFormReducer;
