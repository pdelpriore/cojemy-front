import { signupCases } from "../../config/cases/Cases";

const initialState = {
  loading: false,
  userSignedup: null,
  error: null,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case signupCases.LOADING:
      return { ...state, initialState, loading: action.payload };
    case signupCases.USER_SIGNEDUP:
      return {
        ...state,
        ...initialState,
        loading: false,
        userSignedup: action.payload,
      };
    case signupCases.ERROR:
      return {
        ...state,
        ...initialState,
        loading: false,
        error: action.payload,
      };
    case signupCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default signupReducer;
