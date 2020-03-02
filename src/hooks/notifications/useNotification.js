import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSignUpState } from "../../redux/signup/thunk/SignupThunk";
import { clearCustomerContactState } from "../../redux/customerContact/thunk/customerContactThunk";
import { clearRemindPasswordState } from "../../redux/remindPassword/thunk/remindPasswordThunk";
import { showRemindPassComponent } from "../../redux/showRemindPass/thunk/showRemindPassThunk";

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

  const { passwordSent } = useSelector(state => state.remindPass);

  let clearSignupState = useCallback(() => {
    return dispatch(clearSignUpState());
  }, [dispatch]);

  let clearCustomerState = useCallback(() => {
    return dispatch(clearCustomerContactState());
  }, [dispatch]);

  let clearRemindPassState = useCallback(() => {
    return dispatch(clearRemindPasswordState());
  }, [dispatch]);

  let hideRemindPassComponent = useCallback(() => {
    return dispatch(showRemindPassComponent(false));
  }, [dispatch]);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      setNotification({});
      clearSignupState();
      clearCustomerState();
      clearRemindPassState();
      if (passwordSent) hideRemindPassComponent();
    }, 3500);
    return () => clearTimeout(timer);
  }, [
    notification,
    clearSignupState,
    clearCustomerState,
    clearRemindPassState,
    passwordSent,
    hideRemindPassComponent
  ]);

  return {
    notification,
    show
  };
};

export default useNotification;
