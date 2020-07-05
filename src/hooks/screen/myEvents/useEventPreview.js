import { useEffect, useState } from "react";
import { toEditEvent } from "../../../redux/myEvents/toEditEvent/thunk/toEditEventThunk";
import { removeMyRecipe } from "../../../redux/myRecipes/changeMyRecipes/thunk/changeMyRecipesThunk";
import { changeMyRecipesClearState } from "../../../redux/myRecipes/changeMyRecipes/thunk/changeMyRecipesThunk";
import { useDispatch, useSelector } from "react-redux";
import { timer } from "./timer";

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
      for (
        let i = 0;
        i <=
        eventPreviewData.availablePlaces - eventPreviewData.participants.length;
        i++
      ) {
        setCountAvailablePlaces(i);
        await timer(50);
      }
    })();
  }, [eventPreviewData.title]);

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
