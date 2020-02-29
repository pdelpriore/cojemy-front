import React, { useState, useEffect } from "react";
import useRemindPassForm from "../../hooks/form/remindPass/useRemindPassForm";

const RemindPassword = () => {
  const { show } = useRemindPassForm();
  console.log("show in component: ", show);
  return show && <div>remindPasswordComponent</div>;
};

export default RemindPassword;
