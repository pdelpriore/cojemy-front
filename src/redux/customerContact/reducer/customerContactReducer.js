import { customerContactCases } from "../../config/cases/Cases";

const initialState = {
  loading: false,
  emailSent: null
};

const customerContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case customerContactCases.LOADING:
      return { ...state, initialState, loading: action.payload };
    case customerContactCases.EMAIL_SENT:
      return {
        ...state,
        ...initialState,
        loading: false,
        emailSent: action.payload
      };
    case customerContactCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default customerContactReducer;
