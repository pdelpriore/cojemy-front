export const signupCases = Object.freeze({
  LOADING: "signupLoading",
  USER_SIGNEDUP: "signupUserSignedup",
  ERROR: "signupError",
  CLEAR_STATE: "signupClearState",
});

export const customerContactCases = Object.freeze({
  LOADING: "customerContactLoading",
  EMAIL_SENT: "customerContactEmailSent",
  ERROR: "customerContactError",
  CLEAR_STATE: "customerContactClearState",
});

export const remindPassCases = Object.freeze({
  LOADING: "remindPassLoading",
  ERROR: "remindPassError",
  PASSWORD_SENT: "remindPassSent",
  CLEAR_STATE: "remindPassClearState",
});

export const showRemindPassCases = Object.freeze({
  FORM_SHOWN: "showRemindPassVisible",
});

export const loginCases = Object.freeze({
  LOADING: "loginLoading",
  LOADING_GOOGLE: "loadingGoogle",
  USER_DATA: "loginUserData",
  ERROR: "loginError",
  CLEAR_STATE: "loginClearState",
  CLEAR_ERROR_STATE: "loginCasesClearErrorState",
});

export const logoutCases = Object.freeze({
  LOADING: "logoutLoading",
  SIGNOUT: "logoutSignout",
  ERROR: "logoutError",
  CLEAR_STATE: "logoutClearState",
});

export const googleLogoutCases = Object.freeze({
  LOADING: "googleLogoutLoading",
  SIGNOUT: "googleLogoutSignout",
  CLEAR_STATE: "googleLogoutClearState",
});

export const signupGoogleUserCases = Object.freeze({
  LOADING: "signupGoogleUserLoading",
  USER_GOOGLE_SIGNEDUP: "signupGoogleUserSignedUp",
  ERROR: "signupGoogleUserError",
  CLEAR_STATE: "signupGoogleUserClearState",
});

export const retrieveRecipesCases = Object.freeze({
  LOADING: "retrieveRecipesLoading",
  RECIPE_RETRIVED: "retrieveRecipesRecipeRetrieved",
  ERROR: "retrieveRecipesError",
  CLEAR_STATE: "retrieveRecipesCasesClearState",
});

export const showRecipeDetailsCases = Object.freeze({
  LOADING: "showRecipeDetailsLoading",
  SHOWN: "showRecipeDetailsShown",
  DETAILS_RETRIVED: "showRecipeDetailsDetailsRetrieved",
  ERROR: "showRecipeDetailsError",
  CLEAR_STATE: "showRecipeDetailsClearState",
  CLEAR_ERROR_STATE: "showRecipeDetailsClearErrorState",
});

export const recipeCategorySelectedCases = Object.freeze({
  BUTTON_ID_RETRIEVED: "recipeCategorySelectedButtonIdRetrieved",
  CLEAR_STATE: "recipeCategorySelectedClearState",
});

export const toEditRecipeRateCommentCases = Object.freeze({
  RATE_COMMENT_RETRIEVED: "toEditRecipeRateCommentRateCommentRetrieved",
  CLEAR_STATE: "toEditRecipeRateCommentClearState",
});

export const changeRecipeListItemCases = Object.freeze({
  RECIPE_LIST_ITEM_CHANGED: "changeRecipeListItemRecipeListItemChanged",
});

export const changeRateCommentCases = Object.freeze({
  RATE_COMMENT_CHANGED: "changeRateCommentRateCommentChanged",
});

export const turnOffRecipeButtonsCases = Object.freeze({
  SEARCH_INPUT_FILLED: "turnOffRecipeButtonsSearchInputFilled",
});

export const recipeButtonTurnedOnCases = Object.freeze({
  BUTTON_PRESSES: "recipeButtonTurnedOnButtonPressed",
});

export const retrieveMyRecipesCases = Object.freeze({
  LOADING: "retrieveMyRecipesLoading",
  MY_RECIPES_RETRIEVED: "retrieveMyRecipesMyRecipesRetrieved",
  ERROR: "retrieveMyRecipesError",
  CLEAR_STATE: "retrieveMyRecipesClearState",
});

export const showNewRecipeFormCases = Object.freeze({
  FORM_SHOWN: "showNewRecipeFormFormShown",
});

export const toEditMyRecipeCases = Object.freeze({
  MY_RECIPE_TO_EDIT: "toEditMyRecipeMyRecipeToEdit",
  CLEAR_STATE: "toEditMyRecipeClearState",
});

export const myRecipePreviewCases = Object.freeze({
  PREVIEW_SHOWN: "myRecipePreviewPreviewShown",
  PREVIEW_DATA_RECEIVED: "myRecipePreviewPreviewDataReceived",
  CLEAR_STATE: "myRecipePreviewClearState",
});

export const updateMyProfileCases = Object.freeze({
  PROFILE_UPDATED: "updateMyProfileProfileUpdated",
});

export const userLoggedCases = Object.freeze({
  USER_LOGGED: "userLoggedUserLogged",
});

export const showMyPasswordFormCases = Object.freeze({
  FORM_SHOWN: "showMyPasswordFormFormShown",
});

export const changePasswordCases = Object.freeze({
  LOADING: "changePasswordLoading",
  PASSWORD_CHANGED: "changePasswordPasswordChanged",
  ERROR: "changePasswordError",
  CLEAR_STATE: "changePasswordClearState",
});

export const changeMyRecipesCases = Object.freeze({
  LOADING: "changeMyRecipesLoading",
  RECIPE_UPDATED: "changeMyRecipesRecipeUpdated",
  ERROR: "changeMyRecipesError",
  CLEAR_STATE: "changeMyRecipesClearState",
});

export const removeAccountCases = Object.freeze({
  LOADING: "removeAccountLoading",
  ACCOUNT_REMOVED: "removeAccountAccountRemoved",
  ERROR: "removeAccountError",
  CLEAR_STATE: "removeAccountClearState",
});

export const eventCategorySelectedCases = Object.freeze({
  BUTTON_ID_RETRIEVED: "eventCategorySelectedButtonIdRetrieved",
});

export const showNewEventFormCases = Object.freeze({
  FORM_SHOWN: "showNewEventFormFormShown",
});

export const getAddressCases = Object.freeze({
  LOADING: "getAddressLoading",
  ADDRESSES_RETRIEVED: "getAddressAddressesRetrieved",
  ERROR: "getAddressError",
  CLEAR_STATE: "getAddressClearState",
});

export const selectEventAddressCases = Object.freeze({
  ADDRESS_SELECTED: "selectEventAddressAddressSelected",
  CLEAR_STATE: "selectEventAddressClearState",
});

export const chooseEventAddressCases = Object.freeze({
  ADDRESS_CHOSEN: "chooseEventAddressAddressChosen",
});

export const getLocationDetailsCases = Object.freeze({
  LOADING: "getLocationDetailsLoading",
  LOCATION_DETAILS_RETRIEVED: "getLocationDetailsLoactionDetalsRetrieved",
  ERROR: "getLocationDetailsError",
  CLEAR_STATE: "getLocationDetailsClearState",
});

export const changeEventCases = Object.freeze({
  LOADING: "changeEventLoading",
  EVENT_CHANGED: "changeEventEventChanged",
  ERROR: "changeEventError",
  CLEAR_STATE: "changeEventClearState",
});

export const retrieveEventsCases = Object.freeze({
  LOADING: "retrieveEventsLoading",
  EVENTS_RETRIEVED: "retrieveEventsEventsRetrieved",
  ERROR: "retrieveEventsError",
  CLEAR_STATE: "retrieveEventsClearState",
});

export const myEventPreviewCases = Object.freeze({
  LOADING: "myEventPreviewLoading",
  PREVIEW_SHOWN: "myEventPreviewPreviewShown",
  PREVIEW_DATA_RECEIVED: "myEventPreviewPreviewDataReceived",
  ERROR: "myEventPreviewError",
  CLEAR_ERROR_STATE: "myEventPreviewClearErrorState",
  CLEAR_STATE: "myEventPreviewClearState",
});

export const toEditEventCases = Object.freeze({
  EVENT_TO_EDIT: "toEditEventEventToEdit",
  CLEAR_STATE: "toEditEventClearState",
});

export const searchEventFilledCases = Object.freeze({
  FORM_FILLED: "searchEventFilledFormFilled",
});

export const ioConnectCases = Object.freeze({
  iO_CONNECTED: "ioConnectIoConnected",
  CLEAR_STATE: "ioConnectCLearState",
});
