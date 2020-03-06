import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearSignUpState } from "../../redux/signup/thunk/SignupThunk";
import { clearCustomerContactState } from "../../redux/customerContact/thunk/customerContactThunk";
import { clearRemindPasswordState } from "../../redux/remindPassword/thunk/remindPasswordThunk";
import { clearLoginState } from "../../redux/login/thunk/loginThunk";
import { clearSignUpGoogleUserState } from "../../redux/googleSignup/thunk/googleSignupThunk";
import { clearGoogleLoginState } from "../../redux/googleLogin/thunk/googleLoginThunk";

const useNotification = notificationMessage => {
  const [notifications, setNotification] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    setNotification(notifications => ({
      ...notifications,
      notification: notificationMessage
    }));
  }, [notificationMessage]);

  let { notification } = notifications;
  const { userSignedup, error } = useSelector(state => state.signup);
  const { passwordSent, remindPassError } = useSelector(
    state => state.remindPass
  );
  const { loginError } = useSelector(state => state.login);
  const { userGoogleSignedup, errorGoogleSignup } = useSelector(
    state => state.signGoogle
  );
  const { emailSent } = useSelector(state => state.customerContact);
  const { googleUserLoginError } = useSelector(state => state.loginGoogle);
  const dispatch = useDispatch();

  let clearSignupState = useCallback(() => {
    return dispatch(clearSignUpState());
  }, [dispatch]);

  let clearCustomerState = useCallback(() => {
    return dispatch(clearCustomerContactState());
  }, [dispatch]);

  let clearRemindPassState = useCallback(() => {
    return dispatch(clearRemindPasswordState());
  }, [dispatch]);

  let clearLoginReduxState = useCallback(() => {
    return dispatch(clearLoginState());
  }, [dispatch]);

  let clearGoogleSignReduxState = useCallback(() => {
    return dispatch(clearSignUpGoogleUserState());
  }, [dispatch]);

  let clearGoogleLoginReduxState = useCallback(() => {
    return dispatch(clearGoogleLoginState());
  }, [dispatch]);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      if (error || userSignedup) clearSignupState();
      if (emailSent) clearCustomerState();
      if (passwordSent || remindPassError) clearRemindPassState();
      if (loginError) clearLoginReduxState();
      if (errorGoogleSignup || userGoogleSignedup) clearGoogleSignReduxState();
      if (googleUserLoginError) clearGoogleLoginReduxState();
      setShow(false);
      setNotification({});
    }, 3500);
    return () => clearTimeout(timer);
  }, [
    notification,
    error,
    userSignedup,
    emailSent,
    passwordSent,
    remindPassError,
    loginError,
    userGoogleSignedup,
    errorGoogleSignup,
    googleUserLoginError,
    clearGoogleLoginReduxState,
    clearSignupState,
    clearCustomerState,
    clearRemindPassState,
    clearLoginReduxState,
    clearGoogleSignReduxState
  ]);

  return {
    notification,
    show
  };
};

export default useNotification;
