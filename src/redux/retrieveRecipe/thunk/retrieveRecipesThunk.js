import { retrieveRecipesCases } from "../../config/cases/Cases";
import { retrieveRecipeQuery } from "../query/retrieveRecipeQuery";
import { strings } from "../../../strings/Strings";

export const getRecipe = (category, email) => {
  return async (dispatch, getState) => {
    dispatch({ type: retrieveRecipesCases.LOADING, payload: true });
    const bodyRequest = retrieveRecipeQuery(category, email);
    try {
      const response = await fetch(strings.path.SERVER_REQUEST, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(bodyRequest)
      });
      const responseData = await response.json();
      const { errors, data } = responseData;
      if (data) {
        console.log(data);
      } else if (errors) {
        console.log(errors);
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};
