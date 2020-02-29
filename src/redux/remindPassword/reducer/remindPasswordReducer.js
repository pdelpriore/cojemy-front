import { remindPassCases } from "../../config/cases/Cases";

const initialState = {
  loading: false,
  passwordSent: null,
  remindPassError: null
};

const remindPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case remindPassCases.LOADING:
      return { ...state, initialState, loading: action.payload };
    case remindPassCases.PASSWORD_SENT:
      return {
        ...state,
        ...initialState,
        loading: false,
        passwordSent: action.payload
      };
    case remindPassCases.ERROR:
      return {
        ...state,
        ...initialState,
        loading: false,
        remindPassError: action.payload
      };
    case remindPassCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default remindPasswordReducer;
