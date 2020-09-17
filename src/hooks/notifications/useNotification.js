import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cookie from "react-cookies";
import { clearSignUpState } from "../../redux/signup/thunk/SignupThunk";
import { clearCustomerContactState } from "../../redux/customerContact/thunk/customerContactThunk";
import { clearRemindPasswordState } from "../../redux/remindPassword/remindUserPassword/thunk/remindPasswordThunk";
import { clearLoginErrorState } from "../../redux/login/loginUser/thunk/loginThunk";
import { clearLogoutState } from "../../redux/logout/thunk/logoutThunk";
import { clearSignUpGoogleUserState } from "../../redux/googleSignup/thunk/googleSignupThunk";
import { changeUserPasswordClearState } from "../../redux/updateMyProfile/changePassword/thunk/changePasswordThunk";
import { changeMyRecipesClearState } from "../../redux/myRecipes/changeMyRecipes/thunk/changeMyRecipesThunk";
import { changeEventClearState } from "../../redux/myEvents/changeEvent/thunk/changeEventThunk";
import { eventPreviewClearErrorState } from "../../redux/myEvents/eventPreview/thunk/eventPreviewThunk";
import { getAddressClearState } from "../../redux/myEvents/getAddress/thunk/getAddressThunk";
import { getLocationDetailsClearState } from "../../redux/myEvents/getLocationDetails/thunk/getLocationDetailsThunk";
import { recipeDetailsClearErrorState } from "../../redux/recipeBook/showRecipeDetails/thunk/showRecipeDetailsThunk";
import { removeAccountClearState } from "../../redux/updateMyProfile/removeAccount/thunk/removeAccountThunk";
import { getEmojisClearState } from "../../redux/emoji/getEmojis/thunk/getEmojisThunk";

const useNotification = (notificationMessage) => {
  const [notifications, setNotification] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    setNotification((notifications) => ({
      ...notifications,
      notification: notificationMessage,
    }));
  }, [notificationMessage]);

  let { notification } = notifications;
  const { userSignedup, error } = useSelector((state) => state.signup);
  const { passwordSent, remindPassError } = useSelector(
    (state) => state.remindPass
  );
  const { loginError } = useSelector((state) => state.login);
  const { logoutError } = useSelector((state) => state.logout);
  const { emojiError } = useSelector((state) => state.emojis);
  const { userPasswordChanged, changeUserPasswordError } = useSelector(
    (state) => state.isUserPasswordChanged
  );
  const { userGoogleSignedup, errorGoogleSignup } = useSelector(
    (state) => state.signGoogle
  );
  const { emailSent, emailSentError } = useSelector(
    (state) => state.customerContact
  );
  const { myRecipeChangeError } = useSelector(
    (state) => state.isMyRecipeChanged
  );
  const { eventChangeError } = useSelector((state) => state.isEventChanged);
  const { eventPreviewError } = useSelector((state) => state.eventPreview);
  const { addressesRetrievedError } = useSelector(
    (state) => state.addressSuggestions
  );
  const { locationDetailsError } = useSelector(
    (state) => state.locationDetails
  );
  const { detailsDataError } = useSelector(
    (state) => state.isRecipeDetailsShown
  );
  const { removingAccountError } = useSelector(
    (state) => state.isAccountRemoved
  );
  const emailConfirmed = cookie.load("emailConfirmed");

  const dispatch = useDispatch();

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      if (error || userSignedup) {
        dispatch(clearSignUpState());
      } else if (emailSent || emailSentError) {
        dispatch(clearCustomerContactState());
      } else if (passwordSent || remindPassError) {
        dispatch(clearRemindPasswordState());
      } else if (loginError) {
        dispatch(clearLoginErrorState());
      } else if (logoutError) {
        dispatch(clearLogoutState());
      } else if (errorGoogleSignup || userGoogleSignedup) {
        dispatch(clearSignUpGoogleUserState());
      } else if (myRecipeChangeError) {
        dispatch(changeMyRecipesClearState());
      } else if (userPasswordChanged || changeUserPasswordError) {
        dispatch(changeUserPasswordClearState());
      } else if (eventChangeError) {
        dispatch(changeEventClearState());
      } else if (eventPreviewError) {
        dispatch(eventPreviewClearErrorState());
      } else if (addressesRetrievedError) {
        dispatch(getAddressClearState());
      } else if (locationDetailsError) {
        dispatch(getLocationDetailsClearState());
      } else if (detailsDataError) {
        dispatch(recipeDetailsClearErrorState());
      } else if (removingAccountError) {
        dispatch(removeAccountClearState());
      } else if (emojiError) {
        dispatch(getEmojisClearState());
      } else if (emailConfirmed) {
        cookie.remove("emailConfirmed", { path: "/" });
      }
      setShow(false);
      setNotification({});
    }, 3500);
    return () => clearTimeout(timer);
  }, [
    notification,
    error,
    userSignedup,
    emailSent,
    emailSentError,
    passwordSent,
    remindPassError,
    loginError,
    logoutError,
    emojiError,
    userGoogleSignedup,
    errorGoogleSignup,
    myRecipeChangeError,
    userPasswordChanged,
    changeUserPasswordError,
    eventChangeError,
    eventPreviewError,
    addressesRetrievedError,
    locationDetailsError,
    detailsDataError,
    removingAccountError,
    emailConfirmed,
    dispatch,
  ]);

  return {
    notification,
    show,
  };
};

export default useNotification;
