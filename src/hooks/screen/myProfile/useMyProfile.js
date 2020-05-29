import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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

  const handleDeleteAccount = (e) => {
    e.preventDefault();
  };

  return { showRemoveAccount, handleTrash, handleCancel, handleDeleteAccount };
};

export default useMyProfile;
