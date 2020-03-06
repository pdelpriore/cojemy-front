import { strings } from "../../../strings/Strings";
import { signupCases } from "../../config/cases/Cases";
import { signupQuery, googleSignupQuery } from "../query/signupQuery";

export const signupUser = (name, email, confirmEmail, password) => {
  return async (dispatch, getState) => {
    dispatch({ type: signupCases.LOADING, payload: true });
    const bodyRequest = signupQuery(name, email, confirmEmail, password);
    try {
      const response = await fetch(strings.path.SERVER_REQUEST, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyRequest)
      });
      const responseData = await response.json();
      const {
        errors,
        data: { signUp, isGoogleUser }
      } = responseData;
      if (data) {
        dispatch({
          type: signupCases.USER_SIGNEDUP,
          payload: data.signUp.email
        });
      } else if (errors) {
        dispatch({ type: signupCases.ERROR, payload: errors[0].message });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const signupGoogleUser = (name, email, photo) => {
  return async (dispatch, getState) => {
    dispatch({ type: signupCases.LOADING, payload: true });
    const bodyRequest = googleSignupQuery(name, email, photo);
    try {
      const response = await fetch(strings.path.SERVER_REQUEST, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyRequest)
      });
      const responseData = await response.json();
      const {
        errors,
        data: { signUp, isGoogleUser }
      } = responseData;
      if (data) {
        dispatch({
          type: signupCases.USER_SIGNEDUP,
          payload: data.signUpGoogleUser.email
        });
      } else if (errors) {
        dispatch({
          type: signupCases.ERROR,
          payload: errors[0].message
        });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const clearSignUpState = () => {
  return (dispatch, getState) => {
    dispatch({ type: signupCases.CLEAR_STATE });
  };
};
