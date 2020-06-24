import { changeEventCases } from "../../../config/cases/Cases";
import { addNewEventQuery } from "../query/addNewEventQuery";
import { strings } from "../../../../strings/Strings";

export const addNewEvent = (
  title,
  eventImage,
  addressObj,
  description,
  availablePlaces,
  eventDate,
  userId,
  email
) => {
  return async (dispatch, getState) => {
    //dispatch({ type: addNewEventCases.LOADING, payload: true });
    const bodyRequest = addNewEventQuery(
      title,
      eventImage,
      addressObj,
      description,
      availablePlaces,
      eventDate,
      userId,
      email
    );
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
      if (data.addMyEvent !== null) {
        console.log(data);
        // dispatch({
        //   type: retrieveMyRecipesCases.MY_RECIPES_RETRIEVED,
        //   payload: data.retrieveMyRecipes,
        // });
      } else if (errors) {
        console.log(errors);
        // dispatch({
        //   type: retrieveMyRecipesCases.ERROR,
        //   payload: errors[0].message,
        // });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};
