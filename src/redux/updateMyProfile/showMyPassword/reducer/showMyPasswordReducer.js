import { showMyPasswordFormCases } from "../../../config/cases/Cases";

const initialState = {
  myPasswordFormShown: false,
};

const showMyPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case showMyPasswordFormCases.FORM_SHOWN:
      return {
        ...state,
        myPasswordFormShown: action.payload,
      };
    default:
      return state;
  }
};

export default showMyPasswordReducer;
