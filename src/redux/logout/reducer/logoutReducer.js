import { logoutCases } from "../../config/cases/Cases";

const initialState = {
  loading: false,
  userLoggedOut: false,
  logoutError: null,
};

const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case logoutCases.LOADING:
      return { ...state, ...initialState, loading: action.payload };
    case logoutCases.SIGNOUT:
      return {
        ...state,
        ...initialState,
        userLoggedOut: action.payload,
      };
    case logoutCases.ERROR:
      return { ...state, ...initialState, logoutError: action.payload };
    case logoutCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default logoutReducer;
