import { signupGoogleUserCases } from "../../config/cases/Cases";

const initialState = {
  loadingSignGoogle: false,
  userGoogleSignedup: null,
  errorGoogleSignup: null,
};

const googleSignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case signupGoogleUserCases.LOADING:
      return { ...state, ...initialState, loadingSignGoogle: action.payload };
    case signupGoogleUserCases.USER_GOOGLE_SIGNEDUP:
      return {
        ...state,
        ...initialState,
        loadingSignGoogle: false,
        userGoogleSignedup: action.payload,
      };
    case signupGoogleUserCases.ERROR:
      return {
        ...state,
        ...initialState,
        loadingSignGoogle: false,
        errorGoogleSignup: action.payload,
      };
    case signupGoogleUserCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default googleSignupReducer;
