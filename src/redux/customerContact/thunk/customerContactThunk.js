import { customerContactCases } from "../../config/cases/Cases";
import { customerContactQuery } from "../query/customerContactQuery";
import { strings } from "../../../strings/Strings";

export const customerContact = (subject, email, content) => {
  return async (dispatch, getState) => {
    dispatch({ type: customerContactCases.LOADING, payload: true });
    const bodyRequest = customerContactQuery(subject, email, content);
    try {
      const response = await fetch(strings.path.SERVER_REQUEST, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyRequest),
      });
      const responseData = await response.json();
      const { data } = responseData;
      if (data) {
        dispatch({
          type: customerContactCases.EMAIL_SENT,
          payload: data.customerContact,
        });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const clearCustomerContactState = () => {
  return (dispatch, getState) => {
    dispatch({ type: customerContactCases.CLEAR_STATE });
  };
};
