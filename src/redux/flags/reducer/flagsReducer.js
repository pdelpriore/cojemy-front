import { flagCases } from "../../config/cases/Cases";

const initialState = {
  remindPassFormShowed: false,
};

const flagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case flagCases.showRemindPassCases.SHOWED:
      return {
        ...state,
        remindPassFormShowed: action.payload,
      };
    case flagCases.showRemindPassCases.HIDED:
      return {
        ...state,
        remindPassFormShowed: action.payload,
      };
    default:
      return state;
  }
};

export default flagsReducer;
