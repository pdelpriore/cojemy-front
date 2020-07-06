import { removeAccountCases } from "../../../config/cases/Cases";

const initialState = {
  loading: false,
  accountRemoved: false,
  removingAccountError: null,
};

const removeAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case removeAccountCases.LOADING:
      return { ...state, ...initialState, loading: action.payload };
    case removeAccountCases.ACCOUNT_REMOVED:
      return { ...state, ...initialState, accountRemoved: action.payload };
    case removeAccountCases.ERROR:
      return {
        ...state,
        ...initialState,
        removingAccountError: action.payload,
      };
    case removeAccountCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default removeAccountReducer;
