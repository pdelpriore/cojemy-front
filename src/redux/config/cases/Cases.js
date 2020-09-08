export const signupCases = Object.freeze({
  LOADING: "signup_Loading",
  USER_SIGNEDUP: "signupUser_Signedup",
  ERROR: "signup_Error",
  CLEAR_STATE: "signup_ClearState",
});

export const customerContactCases = Object.freeze({
  LOADING: "customerContact_Loading",
  EMAIL_SENT: "customerContact_EmailSent",
  ERROR: "customerContact_Error",
  CLEAR_STATE: "customerContact_ClearState",
});

export const remindPassCases = Object.freeze({
  LOADING: "remindPass_Loading",
  ERROR: "remindPass_Error",
  PASSWORD_SENT: "remindPass_Sent",
  CLEAR_STATE: "remindPass_ClearState",
});

export const showRemindPassCases = Object.freeze({
  FORM_SHOWN: "showRemindPass_Visible",
});

export const loginCases = Object.freeze({
  LOADING: "login_Loading",
  LOADING_GOOGLE: "login_LoadingGoogle",
  USER_DATA: "login_UserData",
  ERROR: "login_Error",
  CLEAR_STATE: "login_ClearState",
  CLEAR_ERROR_STATE: "loginCases_ClearErrorState",
});

export const logoutCases = Object.freeze({
  LOADING: "logout_Loading",
  SIGNOUT: "logout_Signout",
  ERROR: "logout_Error",
  CLEAR_STATE: "logout_ClearState",
});

export const googleLogoutCases = Object.freeze({
  LOADING: "googleLogout_Loading",
  SIGNOUT: "googleLogout_Signout",
  CLEAR_STATE: "googleLogout_ClearState",
});

export const signupGoogleUserCases = Object.freeze({
  LOADING: "signupGoogleUser_Loading",
  USER_GOOGLE_SIGNEDUP: "signupGoogleUser_SignedUp",
  ERROR: "signupGoogleUser_Error",
  CLEAR_STATE: "signupGoogleUser_ClearState",
});

export const retrieveRecipesCases = Object.freeze({
  LOADING: "retrieveRecipes_Loading",
  RECIPE_RETRIVED: "retrieveRecipes_RecipeRetrieved",
  ERROR: "retrieveRecipes_Error",
  CLEAR_STATE: "retrieveRecipesCases_ClearState",
});

export const showRecipeDetailsCases = Object.freeze({
  LOADING: "showRecipeDetails_Loading",
  SHOWN: "showRecipeDetails_Shown",
  DETAILS_RETRIVED: "showRecipeDetails_DetailsRetrieved",
  ERROR: "showRecipeDetails_Error",
  CLEAR_STATE: "showRecipeDetails_ClearState",
  CLEAR_ERROR_STATE: "showRecipeDetails_ClearErrorState",
});

export const recipeCategorySelectedCases = Object.freeze({
  BUTTON_ID_RETRIEVED: "recipeCategorySelected_ButtonIdRetrieved",
  CLEAR_STATE: "recipeCategorySelected_ClearState",
});

export const toEditRecipeRateCommentCases = Object.freeze({
  RATE_COMMENT_RETRIEVED: "toEditRecipeRateComment_RateCommentRetrieved",
  CLEAR_STATE: "toEditRecipeRateComment_ClearState",
});

export const changeRecipeListItemCases = Object.freeze({
  RECIPE_LIST_ITEM_CHANGED: "changeRecipeListItem_RecipeListItemChanged",
});

export const changeRateCommentCases = Object.freeze({
  RATE_COMMENT_CHANGED: "changeRateComment_RateCommentChanged",
});

export const turnOffRecipeButtonsCases = Object.freeze({
  SEARCH_INPUT_FILLED: "turnOffRecipeButtons_SearchInputFilled",
});

export const recipeButtonTurnedOnCases = Object.freeze({
  BUTTON_PRESSES: "recipeButtonTurnedOn_ButtonPressed",
});

export const retrieveMyRecipesCases = Object.freeze({
  LOADING: "retrieveMyRecipes_Loading",
  MY_RECIPES_RETRIEVED: "retrieveMyRecipes_MyRecipesRetrieved",
  ERROR: "retrieveMyRecipes_Error",
  CLEAR_STATE: "retrieveMyRecipes_ClearState",
});

export const showNewRecipeFormCases = Object.freeze({
  FORM_SHOWN: "showNewRecipeForm_FormShown",
});

export const toEditMyRecipeCases = Object.freeze({
  MY_RECIPE_TO_EDIT: "toEditMyRecipe_MyRecipeToEdit",
  CLEAR_STATE: "toEditMyRecipe_ClearState",
});

export const myRecipePreviewCases = Object.freeze({
  PREVIEW_SHOWN: "myRecipePreview_PreviewShown",
  PREVIEW_DATA_RECEIVED: "myRecipePreview_PreviewDataReceived",
  CLEAR_STATE: "myRecipePreview_ClearState",
});

export const updateMyProfileCases = Object.freeze({
  PROFILE_UPDATED: "updateMyProfile_ProfileUpdated",
});

export const userLoggedCases = Object.freeze({
  USER_LOGGED: "userLogged_UserLogged",
});

export const showMyPasswordFormCases = Object.freeze({
  FORM_SHOWN: "showMyPasswordForm_FormShown",
});

export const changePasswordCases = Object.freeze({
  LOADING: "changePassword_Loading",
  PASSWORD_CHANGED: "changePassword_PasswordChanged",
  ERROR: "changePassword_Error",
  CLEAR_STATE: "changePassword_ClearState",
});

export const changeMyRecipesCases = Object.freeze({
  LOADING: "changeMyRecipes_Loading",
  RECIPE_UPDATED: "changeMyRecipes_RecipeUpdated",
  ERROR: "changeMyRecipes_Error",
  CLEAR_STATE: "changeMyRecipes_ClearState",
});

export const removeAccountCases = Object.freeze({
  LOADING: "removeAccount_Loading",
  ACCOUNT_REMOVED: "removeAccount_AccountRemoved",
  ERROR: "removeAccount_Error",
  CLEAR_STATE: "removeAccount_ClearState",
});

export const eventCategorySelectedCases = Object.freeze({
  BUTTON_ID_RETRIEVED: "eventCategorySelected_ButtonIdRetrieved",
  CLEAR_STATE: "eventCategorySelected_ClearState",
});

export const showNewEventFormCases = Object.freeze({
  FORM_SHOWN: "showNewEventForm_FormShown",
});

export const getAddressCases = Object.freeze({
  LOADING: "getAddress_Loading",
  ADDRESSES_RETRIEVED: "getAddress_AddressesRetrieved",
  ERROR: "getAddress_Error",
  CLEAR_STATE: "getAddress_ClearState",
});

export const selectEventAddressCases = Object.freeze({
  ADDRESS_SELECTED: "selectEventAddress_AddressSelected",
  CLEAR_STATE: "selectEventAddress_ClearState",
});

export const chooseEventAddressCases = Object.freeze({
  ADDRESS_CHOSEN: "chooseEventAddress_AddressChosen",
});

export const getLocationDetailsCases = Object.freeze({
  LOADING: "getLocationDetails_Loading",
  LOCATION_DETAILS_RETRIEVED: "getLocationDetails_LoactionDetalsRetrieved",
  ERROR: "getLocationDetails_Error",
  CLEAR_STATE: "getLocationDetails_ClearState",
});

export const changeEventCases = Object.freeze({
  LOADING: "changeEvent_Loading",
  EVENT_CHANGED: "changeEvent_EventChanged",
  ERROR: "changeEvent_Error",
  CLEAR_STATE: "changeEvent_ClearState",
});

export const retrieveEventsCases = Object.freeze({
  LOADING: "retrieveEvents_Loading",
  EVENTS_RETRIEVED: "retrieveEvents_EventsRetrieved",
  ERROR: "retrieveEvents_Error",
  CLEAR_STATE: "retrieveEvents_ClearState",
});

export const myEventPreviewCases = Object.freeze({
  LOADING: "myEventPreview_Loading",
  PREVIEW_SHOWN: "myEventPreview_PreviewShown",
  PREVIEW_DATA_RECEIVED: "myEventPreview_PreviewDataReceived",
  ERROR: "myEventPreview_Error",
  CLEAR_ERROR_STATE: "myEventPreview_ClearErrorState",
  CLEAR_STATE: "myEventPreview_ClearState",
});

export const toEditEventCases = Object.freeze({
  EVENT_TO_EDIT: "toEditEvent_EventToEdit",
  CLEAR_STATE: "toEditEvent_ClearState",
});

export const searchEventFilledCases = Object.freeze({
  FORM_FILLED: "searchEventFilled_FormFilled",
});

export const ioConnectCases = Object.freeze({
  iO_CONNECTED: "ioConnect_IoConnected",
  CLEAR_STATE: "ioConnect_CLearState",
});

export const showNewMessageFormCases = Object.freeze({
  FORM_SHOWN: "showNewMessageForm_FormShown",
});

export const chooseRecipientCases = Object.freeze({
  RECIPIENT_CHOSEN: "chooseRecipient_RecipientChosen",
  CLEAR_STATE: "chooseRecipient_ClearState",
});

export const newMessageSelectedCases = Object.freeze({
  SELECTED: "newMessageSelected_Selected",
});

export const setConversationCases = Object.freeze({
  CONVERSATION_RETRIEVED: "setConversation_ConversationRetrieved",
  CLEAR_STATE: "setConversation_ClearState",
});

export const setMessagesCases = Object.freeze({
  MESSAGES_RETRIEVED: "setMessages_MessagesRetrieved",
  CLEAR_STATE: "setMessages_ClearState",
});

export const setMessageIdCases = Object.freeze({
  ID_RETRIEVED: "setMessageId_IdRetrieved",
  CLEAR_STATE: "setMessageId_ClearState",
});

export const conversationWindowOpenCases = Object.freeze({
  WINDOW_OPEN: "conversationWindowOpen_WindowOpen",
});

export const mailsComponentActiveCases = Object.freeze({
  MAILS_ACTIVE: "mailsComponentActive_MailsActive",
});

export const mailErrorCases = Object.freeze({
  ERROR_RETRIEVED: "mailError_ErrorRetrieved",
  CLEAR_STATE: "mailError_ClearState",
});

export const showCalendarCases = Object.freeze({
  CALENDAR_SHOWN: "showCalendar_CalendarShown",
});

export const selectEventDateCases = Object.freeze({
  DATE_RETRIEVED: "selectEventDate_DateRetrieved",
  CLEAR_STATE: "selectEventDate_ClearState",
});

export const showEmojisCases = Object.freeze({
  EMOJIS_SHOWN: "showEmojis_EmojisShown",
});

export const getEmojisCases = Object.freeze({
  LOADING: "getEmojis_Loading",
  EMOJIS_RETRIEVED: "getEmojis_EmojisRetrieved",
  CATEGORIES_RETRIEVED: "getEmojis_CategoriesRetrieved",
  ERROR: "getEmojis_Error",
  CLEAR_STATE: "getEmojis_ClearState",
});
