import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { clearSignUpState } from "../../redux/signup/thunk/SignupThunk";
import { clearCustomerContactState } from "../../redux/customerContact/thunk/customerContactThunk";
import { clearRemindPasswordState } from "../../redux/remindPassword/thunk/remindPasswordThunk";
import { clearLoginState } from "../../redux/login/thunk/loginThunk";
import { clearSignUpGoogleUserState } from "../../redux/googleSignup/thunk/googleSignupThunk";

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

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      setNotification({});
      clearSignupState();
      clearCustomerState();
      clearRemindPassState();
      clearLoginReduxState();
      clearGoogleSignReduxState();
    }, 3500);
    return () => clearTimeout(timer);
  }, [
    notification,
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
