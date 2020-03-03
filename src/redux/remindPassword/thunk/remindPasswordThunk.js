import { remindPassCases } from "../../config/cases/Cases";
import { remindPasswordQuery } from "../query/remindPasswordQuery";
import { strings } from "../../../strings/Strings";

export const remindMePassword = email => {
  return async (dispatch, getState) => {
    dispatch({ type: remindPassCases.LOADING, payload: true });
    const bodyRequest = remindPasswordQuery(email);
    try {
      const response = await fetch(strings.path.SERVER_REQUEST, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyRequest)
      });
      const responseData = await response.json();
      const { errors, data } = responseData;
      if (data.remindPassword !== null) {
        dispatch({
          type: remindPassCases.PASSWORD_SENT,
          payload: data.remindPassword
        });
      } else if (errors) {
        console.log(errors);
        dispatch({
          type: remindPassCases.ERROR,
          payload: errors[0].message.split(":")[1]
        });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const clearRemindPasswordState = () => {
  return (dispatch, getState) => {
    dispatch({ type: remindPassCases.CLEAR_STATE });
  };
};
