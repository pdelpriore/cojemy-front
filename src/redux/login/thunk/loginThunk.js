import { loginCases, updateMyProfileCases } from "../../config/cases/Cases";
import { loginQuery } from "../query/loginQuery";
import { googleLoginQuery } from "../query/googleLoginQuery";
import { updateUserProfileQuery } from "../query/updateUserProfileQuery";
import { strings } from "../../../strings/Strings";

export const loginUser = (email, password) => {
  return async (dispatch, getState) => {
    dispatch({ type: loginCases.LOADING, payload: true });
    const bodyRequest = loginQuery(email, password);
    try {
      const response = await fetch(strings.path.SERVER_REQUEST, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(bodyRequest),
      });
      const responseData = await response.json();
      const { errors, data } = responseData;
      if (data) {
        dispatch({ type: loginCases.USER_DATA, payload: data.login });
      } else if (errors) {
        dispatch({ type: loginCases.ERROR, payload: errors[0].message });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const loginUserGoogle = (email, token) => {
  return async (dispatch, getState) => {
    dispatch({ type: loginCases.LOADING_GOOGLE, payload: true });
    const bodyRequest = googleLoginQuery(email);
    try {
      const response = await fetch(strings.path.SERVER_REQUEST, {
        method: "post",
        headers: {
          "x-auth": token,
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(bodyRequest),
      });
      const responseData = await response.json();
      const { errors, data } = responseData;
      if (data) {
        dispatch({
          type: loginCases.USER_DATA,
          payload: data.loginGoogleUser,
        });
      } else if (errors) {
        dispatch({
          type: loginCases.ERROR,
          payload: errors[0].message,
        });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const updateUserProfile = (name, profileImage, email) => {
  return async (dispatch, getState) => {
    dispatch({ type: loginCases.LOADING, payload: true });
    const bodyRequest = updateUserProfileQuery(name, profileImage, email);
    try {
      const response = await fetch(strings.path.SERVER_REQUEST, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(bodyRequest),
      });
      const responseData = await response.json();
      const { errors, data } = responseData;
      if (data) {
        dispatch({
          type: loginCases.USER_DATA,
          payload: data.updateUserProfile,
        });
        dispatch({ type: updateMyProfileCases.PROFILE_UPDATED, payload: true });
      } else if (errors) {
        dispatch({ type: loginCases.ERROR, payload: errors[0].message });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const clearLoginState = () => {
  return (dispatch, getState) => {
    dispatch({ type: loginCases.CLEAR_STATE });
  };
};
