export const signupCases = Object.freeze({
  LOADING: "signupLoading",
  USER_SIGNEDUP: "signupUserSignedup",
  ERROR: "signupError",
  CLEAR_STATE: "signupClearState"
});

export const customerContactCases = Object.freeze({
  LOADING: "customerContactLoading",
  EMAIL_SENT: "customerContactEmailSent",
  CLEAR_STATE: "customerContactClearState"
});

export const remindPassCases = Object.freeze({
  LOADING: "remindPassLoading",
  ERROR: "remindPassError",
  PASSWORD_SENT: "remindPassSent",
  CLEAR_STATE: "remindPassClearState"
});

export const showRemindPassCases = Object.freeze({
  SHOWED: "showRemindPassVisible",
  HIDED: "showRemindPassHide"
});

export const loginCases = Object.freeze({
  LOADING: "loginLoading",
  USER_DATA: "loginUserData",
  ERROR: "loginError",
  CLEAR_STATE: "loginClearState"
});

export const logoutCases = Object.freeze({
  LOADING: "logoutLoading",
  SIGNOUT: "logoutSignout",
  CLEAR_STATE: "logoutClearState"
});

export const googleLogoutCases = Object.freeze({
  LOADING: "googleLogoutLoading",
  SIGNOUT: "googleLogoutSignout",
  CLEAR_STATE: "googleLogoutClearState"
});

export const signupGoogleUserCases = Object.freeze({
  LOADING: "signupGoogleUserLoading",
  USER_GOOGLE_SIGNEDUP: "signupGoogleUserSignedUp",
  ERROR: "signupGoogleUserError",
  CLEAR_STATE: "signupGoogleUserClearState"
});

export const loginGoogleUserCases = Object.freeze({
  LOADING: "loginGoogleUserLoading",
  GOOGLE_USER_DATA: "loginGoogleUserData",
  GOOGLE_USER_ERROR: "loginGoogleUserError",
  CLEAR_STATE: "loginGoogleUserClearState"
});

export const retrieveRecipesCases = Object.freeze({
  LOADING: "retrieveRecipesLoading",
  RECIPE_RETRIVED: "retrieveRecipesRecipeRetrieved",
  ERROR: "retrieveRecipesError"
});

export const showRecipeDetailsCases = Object.freeze({
  SHOWED: "showRecipeDetailsCasesShowed",
  DETAILS_RETRIVED: "showRecipeDetailsCasesDetailsRetrieved",
  CLEAR_STATE: "showRecipeDetailsCasesClearState"
});

export const recipeCategorySelectedCases = Object.freeze({
  BUTTON_ID_RETRIEVED: "recipeCategorySelectedButtonIdRetrieved",
  CLEAR_STATE: "recipeCategorySelectedClearState"
});
