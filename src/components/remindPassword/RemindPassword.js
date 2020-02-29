import React from "react";
import RemindPasswordForm from "../../forms/remindPassword/RemindPasswordForm";

const RemindPassword = ({ show }) => {
  return show !== undefined && show && <RemindPasswordForm />;
};

export default RemindPassword;
