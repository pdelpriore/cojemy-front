import { customerContactCases } from "../../config/cases/Cases";

const initialState = {
  loading: false,
  emailSent: null,
  emailSentError: null,
};

const customerContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case customerContactCases.LOADING:
      return { ...state, ...initialState, loading: action.payload };
    case customerContactCases.EMAIL_SENT:
      return {
        ...state,
        ...initialState,
        emailSent: action.payload,
      };
    case customerContactCases.ERROR:
      return { ...state, ...initialState, emailSentError: action.payload };
    case customerContactCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default customerContactReducer;
