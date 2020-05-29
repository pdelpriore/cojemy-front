import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { strings } from "../../../strings/Strings";

const useMyProfile = () => {
  const [showRemoveAccount, setShowRemoveAccount] = useState(true);
  const { userData } = useSelector((state) => state.login);

  const handleTrash = (e) => {
    e.preventDefault();
    setShowRemoveAccount(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setShowRemoveAccount(true);
  };

  return { showRemoveAccount, handleTrash, handleCancel };
};

export default useMyProfile;
