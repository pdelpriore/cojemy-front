import React, { useEffect } from "react";
import { getMyRecipes } from "../../redux/myRecipes/retrieveMyRecipes/thunk/retrieveMyRecipesThunk";
import { useDispatch, useSelector } from "react-redux";

const MyRecipesList = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.login);
  const { googleUserData } = useSelector((state) => state.loginGoogle);

  useEffect(() => {
    if (userData.email) {
      dispatch(getMyRecipes(userData._id, userData.email));
    } else if (googleUserData.email) {
      dispatch(getMyRecipes(googleUserData._id, googleUserData.email));
    }
  }, [userData, googleUserData, dispatch]);
  return <div>List</div>;
};

export default MyRecipesList;
