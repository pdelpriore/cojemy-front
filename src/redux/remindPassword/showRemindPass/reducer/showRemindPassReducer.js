import { showRemindPassCases } from "../../../config/cases/Cases";

const initialState = {
  show: false,
};

const showRemindPassReducer = (state = initialState, action) => {
  switch (action.type) {
    case showRemindPassCases.FORM_SHOWED:
      return {
        ...state,
        show: action.payload,
      };
    default:
      return state;
  }
};

export default showRemindPassReducer;
