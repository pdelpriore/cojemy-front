import { strings } from "../../../strings/Strings";
import { signupCases } from "../../config/cases/Cases";
import { signupQuery } from "../query/signupQuery";

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
      const data = await response.json();
      console.log(data);
    } catch (err) {
      if (err) console.log(err);
    }
  };
};
