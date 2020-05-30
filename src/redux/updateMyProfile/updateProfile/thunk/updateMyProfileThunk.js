import { updateMyProfileCases } from "../../../config/cases/Cases";

export const updateMyProfile = (bool) => {
  return (dispatch, getState) => {
    dispatch({
      type: updateMyProfileCases.PROFILE_UPDATED,
      payload: bool,
    });
  };
};
