import { loginCases } from "../../config/cases/Cases";

const initialState = {
  loading: false,
  loadingGoogle: false,
  userData: {},
  loginError: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginCases.LOADING:
      return { ...state, loading: action.payload };
    case loginCases.LOADING_GOOGLE:
      return { ...state, loadingGoogle: action.payload };
    case loginCases.USER_DATA:
      return {
        ...state,
        ...initialState,
        userData: action.payload,
      };
    case loginCases.ERROR:
      return {
        ...state,
        loading: false,
        loadingGoogle: false,
        loginError: action.payload,
      };
    case loginCases.CLEAR_ERROR_STATE:
      return {
        ...state,
        loginError: null,
      };
    case loginCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default loginReducer;
