export const signupCases = Object.freeze({
  LOADING: "signupLoading",
  USER_SIGNEDUP: "signupUserSignedup",
  ERROR: "signupError",
  CLEAR_STATE: "signupClearState",
});

export const customerContactCases = Object.freeze({
  LOADING: "customerContactLoading",
  EMAIL_SENT: "customerContactEmailSent",
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
  LOADING: "showRecipeDetailsCasesLoading",
  SHOWN: "showRecipeDetailsCasesShown",
  DETAILS_RETRIVED: "showRecipeDetailsCasesDetailsRetrieved",
  CLEAR_STATE: "showRecipeDetailsCasesClearState",
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
  RECIPE_LIST_ITEM_CHANGED: "changeRecipeListItemCasesRecipeListItemChanged",
});

export const changeRateCommentCases = Object.freeze({
  RATE_COMMENT_CHANGED: "changeRateCommentCasesRateCommentChanged",
});

export const turnOffRecipeButtonsCases = Object.freeze({
  SEARCH_INPUT_FILLED: "turnOffRecipeButtonsCasesSearchInputFilled",
});

export const recipeButtonTurnedOnCases = Object.freeze({
  BUTTON_PRESSES: "recipeButtonTurnedOnCasesButtonPressed",
});

export const retrieveMyRecipesCases = Object.freeze({
  LOADING: "retrieveMyRecipesCasesLoading",
  MY_RECIPES_RETRIEVED: "retrieveMyRecipesCasesMyRecipesRetrieved",
  ERROR: "retrieveMyRecipesCasesError",
  CLEAR_STATE: "retrieveMyRecipesCasesClearState",
});

export const showNewRecipeFormCases = Object.freeze({
  FORM_SHOWN: "showNewRecipeFormCasesFormShown",
});

export const toEditMyRecipeCases = Object.freeze({
  MY_RECIPE_TO_EDIT: "toEditMyRecipeCasesMyRecipeToEdit",
  CLEAR_STATE: "toEditMyRecipeCasesClearState",
});

export const myRecipePreviewCases = Object.freeze({
  PREVIEW_SHOWN: "myRecipePreviewCasesPreviewShown",
  PREVIEW_DATA_RECEIVED: "myRecipePreviewCasesPreviewDataReceived",
  CLEAR_STATE: "myRecipePreviewCasesClearState",
});

export const updateMyProfileCases = Object.freeze({
  PROFILE_UPDATED: "updateMyProfileCasesProfileUpdated",
});

export const userLoggedCases = Object.freeze({
  USER_LOGGED: "userLoggedCasesUserLogged",
});

export const showMyPasswordFormCases = Object.freeze({
  FORM_SHOWN: "showMyPasswordFormCasesFormShown",
});

export const changePasswordCases = Object.freeze({
  LOADING: "changePasswordCasesLoading",
  PASSWORD_CHANGED: "changePasswordCasesPasswordChanged",
  ERROR: "changePasswordCasesError",
  CLEAR_STATE: "changePasswordCasesClearState",
});

export const changeMyRecipesCases = Object.freeze({
  LOADING: "changeMyRecipesCasesLoading",
  RECIPE_UPDATED: "changeMyRecipesCasesRecipeUpdated",
  ERROR: "changeMyRecipesCasesError",
  CLEAR_STATE: "changeMyRecipesCasesClearState",
});

export const removeAccountCases = Object.freeze({
  LOADING: "removeAccountCasesLoading",
  ACCOUNT_REMOVED: "removeAccountCasesAccountRemoved",
  CLEAR_STATE: "removeAccountCasesClearState",
});

export const eventCategorySelectedCases = Object.freeze({
  BUTTON_ID_RETRIEVED: "eventCategorySelectedCasesButtonIdRetrieved",
});

export const showNewEventFormCases = Object.freeze({
  FORM_SHOWN: "showNewEventFormCasesFormShown",
});

export const getAddressCases = Object.freeze({
  LOADING: "getAddressCasesLoading",
  ADDRESSES_RETRIEVED: "getAddressCasesAddressesRetrieved",
  CLEAR_STATE: "getAddressCasesClearState",
});
