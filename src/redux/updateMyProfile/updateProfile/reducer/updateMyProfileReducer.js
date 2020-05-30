import { updateMyProfileCases } from "../../../config/cases/Cases";

const initialState = {
  profileUpdated: false,
};

const updateMyProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case updateMyProfileCases.PROFILE_UPDATED:
      return { ...state, profileUpdated: action.payload };
    default:
      return state;
  }
};

export default updateMyProfileReducer;
