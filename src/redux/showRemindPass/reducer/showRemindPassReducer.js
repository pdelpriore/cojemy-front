import { showRemindPass } from "../../config/cases/Cases";

const initialState = {
  show: false
};

const showRemindPassReducer = (state = initialState, action) => {
  switch (action.type) {
    case showRemindPass.SHOWED:
      return {
        ...state,
        ...initialState,
        show: action.payload
      };
    case showRemindPass.HIDED:
      return {
        ...state,
        ...initialState,
        show: action.payload
      };
    default:
      return state;
  }
};

export default showRemindPassReducer;
