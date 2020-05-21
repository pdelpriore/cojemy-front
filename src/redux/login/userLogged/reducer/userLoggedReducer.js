import { userLoggedCases } from "../../../config/cases/Cases";

const initialState = {
  userLogged: false,
};

const userLoggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case userLoggedCases.USER_LOGGED:
      return { ...state, ...initialState, userLogged: action.payload };
    default:
      return state;
  }
};

export default userLoggedReducer;
