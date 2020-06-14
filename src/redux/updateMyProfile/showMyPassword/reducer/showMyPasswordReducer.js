import { showMyPasswordFormCases } from "../../../config/cases/Cases";

const initialState = {
  myPasswordFormShowed: false,
};

const showMyPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case showMyPasswordFormCases.FORM_SHOWED:
      return {
        ...state,
        myPasswordFormShowed: action.payload,
      };
    default:
      return state;
  }
};

export default showMyPasswordReducer;
