import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearLoginState } from "../../../redux/login/loginUser/thunk/loginThunk";
import { clearLogoutState } from "../../../redux/logout/thunk/logoutThunk";
import { myRecipesClearState } from "../../../redux/myRecipes/retrieveMyRecipes/thunk/retrieveMyRecipesThunk";
import { recipeDetailsClearState } from "../../../redux/recipeBook/showRecipeDetails/thunk/showRecipeDetailsThunk";
import { categorySelectedClearState } from "../../../redux/recipeBook/recipeCategorySelected/thunk/recipeCategorySelectedThunk";
import { recipeBookClearState } from "../../../redux/recipeBook/retrieveRecipe/thunk/retrieveRecipesThunk";
import { changeRecipeListItem } from "../../../redux/recipeBook/changeRecipeListItem/thunk/changeRecipeListItemThunk";
import { toEditRateCommentClearState } from "../../../redux/recipeBook/toEditRecipeRateComment/thunk/toEditRateCommentThunk";
import { toEditMyRecipeClearState } from "../../../redux/myRecipes/toEditMyRecipe/thunk/toEditMyRecipeThunk";
import { myRecipePreviewClearState } from "../../../redux/myRecipes/myRecipePreview/thunk/myRecipePreviewThunk";
import { getAddressClearState } from "../../../redux/myEvents/getAddress/thunk/getAddressThunk";
import { selectEventAddressClearState } from "../../../redux/myEvents/selectEventAddress/thunk/selectEventAddressThunk";
import { getLocationDetailsClearState } from "../../../redux/myEvents/getLocationDetails/thunk/getLocationDetailsThunk";
import { getEventsClearState } from "../../../redux/myEvents/retrieveEvents/thunk/retrieveEventsThunk";
import { eventPreviewClearState } from "../../../redux/myEvents/eventPreview/thunk/eventPreviewThunk";
import { toEditEventClearState } from "../../../redux/myEvents/toEditEvent/thunk/toEditEventThunk";
import { eventCategorySelectedClearState } from "../../../redux/myEvents/eventCategorySelected/thunk/eventCategorySelectedThunk";
import { ioConnectClearState } from "../../../redux/mails/socketData/thunk/ioConnectThunk";
import { setConversationClearState } from "../../../redux/mails/setConversation/thunk/setConversationThunk";
import { setMessagesClearState } from "../../../redux/mails/setMessages/thunk/setMessagesThunk";
import { setMessageIdClearState } from "../../../redux/mails/setMessageId/thunk/setMessageIdThunk";
import { searchEventFilled } from "../../../redux/myEvents/searchEventFilled/thunk/searchEventFilledThunk";
import { loginUser } from "../../../redux/login/userLogged/thunk/userLoggedThunk";

const useNavMenu = () => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);

  const { userData } = useSelector((state) => state.login);
  const { loading, userLoggedOut } = useSelector((state) => state.logout);
  const { socket } = useSelector((state) => state.socketData);
  const { messages } = useSelector((state) => state.userMessages);

  useEffect(() => {
    setIsActive(true);
    return () => setIsActive(false);
  }, []);

  useEffect(() => {
    if (socket.disconnected && isActive && userLoggedOut) {
      dispatch(clearLoginState());
      dispatch(loginUser(false));
      dispatch(recipeDetailsClearState());
      dispatch(myRecipePreviewClearState());
      dispatch(categorySelectedClearState());
      dispatch(myRecipesClearState());
      dispatch(recipeBookClearState());
      dispatch(toEditRateCommentClearState());
      dispatch(toEditMyRecipeClearState());
      dispatch(changeRecipeListItem(true));
      dispatch(getAddressClearState());
      dispatch(selectEventAddressClearState());
      dispatch(getLocationDetailsClearState());
      dispatch(getEventsClearState());
      dispatch(eventPreviewClearState());
      dispatch(toEditEventClearState());
      dispatch(eventCategorySelectedClearState());
      dispatch(searchEventFilled(false));
      dispatch(ioConnectClearState());
      dispatch(setConversationClearState());
      dispatch(setMessagesClearState());
      dispatch(setMessageIdClearState());
    }
  }, [userLoggedOut, socket, isActive, dispatch]);

  useEffect(() => {
    if (userData.email === undefined && isActive) dispatch(clearLogoutState());
  }, [userData.email, isActive, dispatch]);

  return { loading };
};

export default useNavMenu;
