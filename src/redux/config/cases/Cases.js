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
