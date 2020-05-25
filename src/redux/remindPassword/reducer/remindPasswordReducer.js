import { remindPassCases } from "../../config/cases/Cases";

const initialState = {
  loading: false,
  show: false,
  passwordSent: null,
  remindPassError: null,
};

const remindPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case remindPassCases.LOADING:
      return { ...state, loading: action.payload };
    case remindPassCases.FORM_SHOWED:
      return { ...state, show: action.payload };
    case remindPassCases.PASSWORD_SENT:
      return {
        ...state,
        ...initialState,
        passwordSent: action.payload,
      };
    case remindPassCases.ERROR:
      return {
        ...state,
        ...initialState,
        remindPassError: action.payload,
      };
    case remindPassCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default remindPasswordReducer;
