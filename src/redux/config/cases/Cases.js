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
  SHOWED: "showRemindPassVisible",
  HIDED: "showRemindPassHide",
});

export const loginCases = Object.freeze({
  LOADING: "loginLoading",
  LOADING_GOOGLE: "loadingGoogle",
  USER_DATA: "loginUserData",
  ERROR: "loginError",
  CLEAR_STATE: "loginClearState",
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
});

export const showRecipeDetailsCases = Object.freeze({
  LOADING: "showRecipeDetailsCasesLoading",
  SHOWED: "showRecipeDetailsCasesShowed",
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

export const hideRateCommentFormCases = Object.freeze({
  RECIPE_LIST_ITEM_CHANGED: "hideRateCommentFormCasesRecipeListItemChanged",
});

export const editRateCommentFormCases = Object.freeze({
  RECIPE_UPDATED: "editRateCommentFormCasesRecipeUpdated",
});

export const addRateCommentCases = Object.freeze({
  RATE_COMMENT_ADDED: "addRateCommentCasesRateCommentAdded",
});

export const removeRateCommentCases = Object.freeze({
  RATE_COMMENT_REMOVED: "removeRateCommentCasesRateCommentRemoved",
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
});

export const showNewRecipeFormCases = Object.freeze({
  FORM_SHOWED: "showNewRecipeFormCasesFormShowed",
});
