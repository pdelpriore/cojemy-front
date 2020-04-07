import { showRemindPassCases } from "../../config/cases/Cases";

const initialState = {
  show: false,
};

const showRemindPassReducer = (state = initialState, action) => {
  switch (action.type) {
    case showRemindPassCases.SHOWED:
      return {
        ...state,
        ...initialState,
        show: action.payload,
      };
    case showRemindPassCases.HIDED:
      return {
        ...state,
        ...initialState,
        show: action.payload,
      };
    default:
      return state;
  }
};

export default showRemindPassReducer;
