import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faCheckCircle,
} from "@fortawesome/free-regular-svg-icons";
import useNotification from "../../hooks/notifications/useNotification";
import { useSelector } from "react-redux";
import { capitalizeFirst } from "../../util/Util";
import "./notification.css";

const Notification = ({ notificationMessage }) => {
  const { notification, show } = useNotification(notificationMessage);
  const { error } = useSelector((state) => state.signup);
  const { emailSentError } = useSelector((state) => state.customerContact);
  const { remindPassError } = useSelector((state) => state.remindPass);
  const { loginError } = useSelector((state) => state.login);
  const { logoutError } = useSelector((state) => state.logout);
  const { changeUserPasswordError } = useSelector(
    (state) => state.isUserPasswordChanged
  );
  const { errorGoogleSignup } = useSelector((state) => state.signGoogle);
  const { myRecipeChangeError } = useSelector(
    (state) => state.isMyRecipeChanged
  );
  const { eventChangeError } = useSelector((state) => state.isEventChanged);
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

  return (
    show &&
    notification !== null &&
    notification !== undefined && (
      <div className="notification">
        {notification === error ||
        notification === emailSentError ||
        notification === remindPassError ||
        notification === loginError ||
        notification === logoutError ||
        notification === errorGoogleSignup ||
        notification === myRecipeChangeError ||
        notification === changeUserPasswordError ||
        notification === eventChangeError ||
        notification === addressesRetrievedError ||
        notification === locationDetailsError ||
        notification === detailsDataError ||
        notification === removingAccountError ? (
          <div className="notification-icon-error">
            <FontAwesomeIcon icon={faTimesCircle} />
          </div>
        ) : (
          <div className="notification-icon-success">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
        )}
        {notification === error ||
        notification === emailSentError ||
        notification === remindPassError ||
        notification === loginError ||
        notification === logoutError ||
        notification === errorGoogleSignup ||
        notification === myRecipeChangeError ||
        notification === changeUserPasswordError ||
        notification === eventChangeError ||
        notification === addressesRetrievedError ||
        notification === locationDetailsError ||
        notification === detailsDataError ||
        notification === removingAccountError ? (
          <div className="notification-message">
            {capitalizeFirst(notification)}
          </div>
        ) : (
          <div className="notification-message-success">
            {capitalizeFirst(notification)}
          </div>
        )}
      </div>
    )
  );
};

export default Notification;
