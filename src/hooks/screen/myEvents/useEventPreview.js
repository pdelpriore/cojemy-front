import { useEffect, useState } from "react";
import { toEditEvent } from "../../../redux/myEvents/toEditEvent/thunk/toEditEventThunk";
import { removeMyRecipe } from "../../../redux/myRecipes/changeMyRecipes/thunk/changeMyRecipesThunk";
import { changeMyRecipesClearState } from "../../../redux/myRecipes/changeMyRecipes/thunk/changeMyRecipesThunk";
import { useDispatch, useSelector } from "react-redux";
import { delayAvailablePlacesCounter } from "./delayAvailablePlacesCounter";

const useEventPreview = () => {
  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.login);
  const { recipeUpdated } = useSelector((state) => state.isMyRecipeChanged);
  const { eventPreviewData } = useSelector((state) => state.eventPreview);

  const [countAvailablePlaces, setCountAvailablePlaces] = useState(0);

  const handleEditClick = (data) => {
    dispatch(toEditEvent(data));
  };

  const handleTrashClick = (recipeId) => {
    console.log("trash clicked !");
    //dispatch(removeMyRecipe(recipeId, userData._id, userData.email));
  };

  useEffect(() => {
    (async () => {
      if (
        eventPreviewData.availablePlaces -
          eventPreviewData.participants.length <
        50
      ) {
        for (
          let i = 0;
          i <=
          eventPreviewData.availablePlaces -
            eventPreviewData.participants.length;
          i++
        ) {
          setCountAvailablePlaces(i);
          await delayAvailablePlacesCounter(30);
        }
      } else {
        setCountAvailablePlaces(
          eventPreviewData.availablePlaces -
            eventPreviewData.participants.length
        );
      }
    })();
  }, [eventPreviewData._id]);

  //   useEffect(() => {
  //     if (recipeUpdated) dispatch(changeMyRecipesClearState());
  //   }, [recipeUpdated]);

  return {
    handleEditClick,
    handleTrashClick,
    countAvailablePlaces,
  };
};

export default useEventPreview;
