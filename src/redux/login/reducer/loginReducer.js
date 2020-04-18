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
      return { ...state, ...initialState, loading: action.payload };
    case loginCases.LOADING_GOOGLE:
      return { ...state, ...initialState, loadingGoogle: action.payload };
    case loginCases.USER_DATA:
      return {
        ...state,
        ...initialState,
        loading: false,
        loadingGoogle: false,
        userData: action.payload,
      };
    case loginCases.ERROR:
      return {
        ...state,
        ...initialState,
        loading: false,
        loadingGoogle: false,
        loginError: action.payload,
      };
    case loginCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default loginReducer;
