import { mailErrorCases } from "../../../config/cases/Cases";

const initialState = {
  mailError: null,
};

const mailErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case mailErrorCases.ERROR_RETRIEVED:
      return { ...state, mailError: action.payload };
    case mailErrorCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default mailErrorReducer;
