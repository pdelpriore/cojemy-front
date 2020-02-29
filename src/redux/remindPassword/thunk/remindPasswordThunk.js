import { remindPassCases } from "../../config/cases/Cases";
import { remindPassQuery } from "../query/remindPasswordQuery";
import { strings } from "../../../strings/Strings";

export const remindPasswordThunk = email => {
  return async (dispatch, getState) => {
    dispatch({ type: remindPassCases.LOADING, payload: true });
    const bodyRequest = remindPassQuery(email);
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
      if (data) {
        console.log(data);
        //   dispatch({
        //     type: remindPassCases.PASSWORD_SENT,
        //     payload: data.customerContact
        //   });
      } else if (errors) {
        console.log(errors);
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
