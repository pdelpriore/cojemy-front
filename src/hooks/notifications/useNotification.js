import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearSignUpState } from "../../redux/signup/thunk/SignupThunk";
import { clearCustomerContactState } from "../../redux/customerContact/thunk/customerContactThunk";
import { clearRemindPasswordState } from "../../redux/remindPassword/thunk/remindPasswordThunk";
import { clearLoginState } from "../../redux/login/thunk/loginThunk";
import { clearSignUpGoogleUserState } from "../../redux/googleSignup/thunk/googleSignupThunk";
import { strings } from "../../strings/Strings";

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
  const { error } = useSelector(state => state.signup);
  const { passwordSent, remindPassError } = useSelector(
    state => state.remindPass
  );
  const { loginError } = useSelector(state => state.login);
  const { errorGoogleSignup } = useSelector(state => state.signGoogle);
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
      if (notification === error || notification === strings.signup.CHECK_EMAIL)
        clearSignupState();
      clearCustomerState();
      if (notification === passwordSent || notification === remindPassError)
        clearRemindPassState();
      if (notification === loginError) clearLoginReduxState();
      if (
        notification === errorGoogleSignup ||
        notification === strings.signupGoogle.GOOGLE_USER_CREATED
      )
        clearGoogleSignReduxState();
      setShow(false);
      setNotification({});
    }, 3500);
    return () => clearTimeout(timer);
  }, [
    notification,
    error,
    passwordSent,
    remindPassError,
    loginError,
    errorGoogleSignup,
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
