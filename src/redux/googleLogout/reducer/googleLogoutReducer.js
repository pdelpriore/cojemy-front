import { googleLogoutCases } from "../../config/cases/Cases";

const initialState = {
  googleLogoutLoading: false,
  googleUserLoggedOut: false,
};

const googleLogoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case googleLogoutCases.LOADING:
      return { ...state, ...initialState, googleLogoutLoading: action.payload };
    case googleLogoutCases.SIGNOUT:
      return {
        ...state,
        ...initialState,
        googleLogoutLoading: false,
        googleUserLoggedOut: action.payload,
      };
    case googleLogoutCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default googleLogoutReducer;
