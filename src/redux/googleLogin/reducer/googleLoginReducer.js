import { loginGoogleUserCases } from "../../config/cases/Cases";

const initialState = {
  googleUserLoading: false,
  googleUserData: {},
  googleUserLoginError: null,
};

const googleLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginGoogleUserCases.LOADING:
      return { ...state, ...initialState, googleUserLoading: action.payload };
    case loginGoogleUserCases.GOOGLE_USER_DATA:
      return {
        ...state,
        ...initialState,
        googleUserLoading: false,
        googleUserData: action.payload,
      };
    case loginGoogleUserCases.GOOGLE_USER_ERROR:
      return {
        ...state,
        ...initialState,
        googleUserLoading: false,
        googleUserLoginError: action.payload,
      };
    case loginGoogleUserCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default googleLoginReducer;
