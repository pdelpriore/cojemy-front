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
  const { remindPassError } = useSelector((state) => state.remindPass);
  const { loginError } = useSelector((state) => state.login);
  const { errorGoogleSignup } = useSelector((state) => state.signGoogle);

  return (
    show &&
    notification !== null &&
    notification !== undefined && (
      <div className="notification">
        {notification === error ||
        notification === remindPassError ||
        notification === loginError ||
        notification === errorGoogleSignup ? (
          <div className="notification-icon-error">
            <FontAwesomeIcon icon={faTimesCircle} />
          </div>
        ) : (
          <div className="notification-icon-success">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
        )}
        {notification === error ||
        notification === remindPassError ||
        notification === loginError ||
        notification === errorGoogleSignup ? (
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
