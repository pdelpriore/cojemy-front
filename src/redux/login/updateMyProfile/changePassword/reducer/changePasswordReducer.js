import { changePasswordCases } from "../../../../config/cases/Cases";

const initialState = {
  loading: false,
  userPasswordChanged: false,
  changeUserPasswordError: null,
};

const changePasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case changePasswordCases.LOADING:
      return { ...state, ...initialState, loading: action.payload };
    case changePasswordCases.PASSWORD_CHANGED:
      return { ...state, ...initialState, userPasswordChanged: action.payload };
    case changePasswordCases.ERROR:
      return {
        ...state,
        ...initialState,
        changeUserPasswordError: action.payload,
      };
    case changePasswordCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default changePasswordReducer;
