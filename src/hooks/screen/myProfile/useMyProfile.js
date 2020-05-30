import { useEffect, useState } from "react";
import { removeAccount } from "../../../redux/updateMyProfile/removeAccount/thunk/removeAccountThunk";
import { logoutUser } from "../../../redux/logout/thunk/logoutThunk";
import { removeAccountClearState } from "../../../redux/updateMyProfile/removeAccount/thunk/removeAccountThunk";
import { useSelector, useDispatch } from "react-redux";

const useMyProfile = () => {
  const dispatch = useDispatch();
  const [showRemoveAccount, setShowRemoveAccount] = useState(true);

  const { userData } = useSelector((state) => state.login);
  const { accountRemoved } = useSelector((state) => state.isAccountRemoved);

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
    dispatch(removeAccount(userData.email));
  };

  useEffect(() => {
    if (accountRemoved) {
      dispatch(removeAccountClearState());
      dispatch(logoutUser(userData.email));
    }
  }, [accountRemoved, dispatch]);

  return { showRemoveAccount, handleTrash, handleCancel, handleDeleteAccount };
};

export default useMyProfile;
