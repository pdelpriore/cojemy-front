import { combineReducers } from "redux";
import signupReducer from "../../signup/reducer/SignupReducer";
import customerContactReducer from "../../customerContact/reducer/customerContactReducer";
import showRemindPassReducer from "../../remindPassword/showRemindPass/reducer/showRemindPassReducer";
import remindPasswordReducer from "../../remindPassword/remindUserPassword/reducer/remindPasswordReducer";
import loginReducer from "../../login/loginUser/reducer/loginReducer";
import logoutReducer from "../../logout/reducer/logoutReducer";
import googleSignupReducer from "../../googleSignup/reducer/googleSignupReducer";
import retrieveRecipesReducer from "../../recipeBook/retrieveRecipe/reducer/retrieveRecipesReducer";
import showRecipeDetailsReducer from "../../recipeBook/showRecipeDetails/reducer/showRecipeDetailsReducer";
import recipeCategorySelectedReducer from "../../recipeBook/recipeCategorySelected/reducer/recipeCategorySelectedReducer";
import toEditRecipeRateCommentReducer from "../../recipeBook/toEditRecipeRateComment/reducer/toEditRateCommentReducer";
import changeRecipeListItemReducer from "../../recipeBook/changeRecipeListItem/reducer/changeRecipeListItemReducer";
import changeRateCommentReducer from "../../recipeBook/changeRateComment/reducer/changeRateCommentReducer";
import turnOffRecipeButtonsReducer from "../../recipeBook/turnOffRecipeButtons/reducer/turnOffRecipeButtonsReducer";
import recipeButtonTurnedOnReducer from "../../recipeBook/recipeButtonTurnedOn/reducer/recipeButtonTurnedOnReducer";
import retrieveMyRecipesReducer from "../../myRecipes/retrieveMyRecipes/reducer/retrieveMyRecipesReducer";
import showNewRecipeFormReducer from "../../myRecipes/showNewRecipeForm/reducer/showNewRecipeFormReducer";
import toEditMyRecipeReducer from "../../myRecipes/toEditMyRecipe/reducer/toEditMyRecipeReducer";
import myRecipePreviewReducer from "../../myRecipes/myRecipePreview/reducer/myRecipePreviewReducer";
import updateMyProfileReducer from "../../updateMyProfile/updateProfile/reducer/updateMyProfileReducer";
import userLoggedReducer from "../../login/userLogged/reducer/userLoggedReducer";
import showMyPasswordReducer from "../../updateMyProfile/showMyPassword/reducer/showMyPasswordReducer";
import changePasswordReducer from "../../updateMyProfile/changePassword/reducer/changePasswordReducer";
import changeMyRecipesReducer from "../../myRecipes/changeMyRecipes/reducer/changeMyRecipesReducer";
import removeAccountReducer from "../../updateMyProfile/removeAccount/reducer/removeAccountReducer";
import eventCategorySelectedReducer from "../../myEvents/eventCategorySelected/reducer/eventCategorySelectedReducer";
import showNewEventFormReducer from "../../myEvents/showNewEventForm/reducer/showNewEventFormReducer";
import getAddressReducer from "../../myEvents/getAddress/reducer/getAddressReducer";
import selectEventAddressReducer from "../../myEvents/selectEventAddress/reducer/selectEventAddressReducer";
import chooseEventAddressReducer from "../../myEvents/chooseEventAddress/reducer/chooseEventAddressReducer";
import getLocationDetailsReducer from "../../myEvents/getLocationDetails/reducer/getLocationDetailsReducer";
import retrieveEventsReducer from "../../myEvents/retrieveEvents/reducer/retrieveEventsReducer";
import changeEventReducer from "../../myEvents/changeEvent/reducer/changeEventReducer";
import eventPreviewReducer from "../../myEvents/eventPreview/reducer/eventPreviewReducer";
import toEditEventReducer from "../../myEvents/toEditEvent/reducer/toEditEventReducer";
import searchEventFilledReducer from "../../myEvents/searchEventFilled/reducer/searchEventFilledReducer";
import ioConnectReducer from "../../mails/socketData/reducer/ioConnectReducer";
import showNewMessageFormReducer from "../../mails/showNewMessageForm/reducer/showNewMessageReducer";
import chooseRecipientReducer from "../../mails/chooseRecipient/reducer/chooseRecipientReducer";
import newMessageSelectedReducer from "../../mails/newMessageSelected/reducer/newMessageSelectedReducer";
import setConversationReducer from "../../mails/setConversation/reducer/setConversationReducer";
import setMessagesReducer from "../../mails/setMessages/reducer/setMessagesReducer";
import setMessageIdReducer from "../../mails/setMessageId/reducer/setMessageIdReducer";
import conversationWindowOpenReducer from "../../mails/conversationWindowOpen/reducer/conversationWindowOpenReducer";
import mailsComponentActiveReducer from "../../mails/mailsComponentActive/reducer/mailsComponentActiveReducer";
import mailErrorReducer from "../../mails/mailError/reducer/mailErrorReducer";
import showCalendarReducer from "../../myEvents/showCalendar/reducer/showCalendarReducer";

const allReducers = combineReducers({
  signup: signupReducer,
  customerContact: customerContactReducer,
  isRemindPassFormShown: showRemindPassReducer,
  remindPass: remindPasswordReducer,
  login: loginReducer,
  logout: logoutReducer,
  signGoogle: googleSignupReducer,
  recipeBook: retrieveRecipesReducer,
  isRecipeDetailsShown: showRecipeDetailsReducer,
  recipeCategorySelected: recipeCategorySelectedReducer,
  toEditRateComment: toEditRecipeRateCommentReducer,
  isRecipeListItemChanged: changeRecipeListItemReducer,
  isRateCommentChanged: changeRateCommentReducer,
  turnOffRecipeButtons: turnOffRecipeButtonsReducer,
  recipeButtonTurnedOn: recipeButtonTurnedOnReducer,
  myRecipes: retrieveMyRecipesReducer,
  isNewRecipeFormShown: showNewRecipeFormReducer,
  toEditMyRecipe: toEditMyRecipeReducer,
  myRecipePreview: myRecipePreviewReducer,
  updateMyProfile: updateMyProfileReducer,
  isUserLogged: userLoggedReducer,
  isMyPasswordFormShown: showMyPasswordReducer,
  isUserPasswordChanged: changePasswordReducer,
  isMyRecipeChanged: changeMyRecipesReducer,
  isAccountRemoved: removeAccountReducer,
  eventCategorySelected: eventCategorySelectedReducer,
  isNewEventFormShown: showNewEventFormReducer,
  addressSuggestions: getAddressReducer,
  selectedEventAddress: selectEventAddressReducer,
  isEventAddressChosen: chooseEventAddressReducer,
  locationDetails: getLocationDetailsReducer,
  events: retrieveEventsReducer,
  isEventChanged: changeEventReducer,
  eventPreview: eventPreviewReducer,
  toEditEvent: toEditEventReducer,
  isSearchEventFormFilled: searchEventFilledReducer,
  socketData: ioConnectReducer,
  isNewMessageFormShown: showNewMessageFormReducer,
  isRecipientChosen: chooseRecipientReducer,
  isNewMessageSelected: newMessageSelectedReducer,
  userConversations: setConversationReducer,
  userMessages: setMessagesReducer,
  isMessageId: setMessageIdReducer,
  isConversationWindowOpen: conversationWindowOpenReducer,
  isMailsComponentActive: mailsComponentActiveReducer,
  hasMailError: mailErrorReducer,
  isCalendarShown: showCalendarReducer,
});

export default allReducers;
