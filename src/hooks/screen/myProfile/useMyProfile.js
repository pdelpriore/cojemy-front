import { useEffect, useState } from "react";
import { removeAccount } from "../../../redux/updateMyProfile/removeAccount/thunk/removeAccountThunk";
import { logoutUser } from "../../../redux/logout/thunk/logoutThunk";
import { removeAccountClearState } from "../../../redux/updateMyProfile/removeAccount/thunk/removeAccountThunk";
import { disconnectIOSocket } from "../../../components/navbar/disconnectIOSocket";
import { useSelector, useDispatch } from "react-redux";

const useMyProfile = () => {
  const dispatch = useDispatch();
  const [showRemoveAccount, setShowRemoveAccount] = useState(true);

  const { userData } = useSelector((state) => state.login);
  const { accountRemoved } = useSelector((state) => state.isAccountRemoved);
  const { socket } = useSelector((state) => state.socketData);

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
    dispatch(removeAccount(userData._id, userData.email));
  };

  useEffect(() => {
    (async () => {
      if (accountRemoved && socket.connected) {
        dispatch(removeAccountClearState());
        await disconnectIOSocket(socket, userData._id);
        dispatch(logoutUser(userData._id, userData.email));
      }
    })();
  }, [accountRemoved, socket, userData._id, userData.email, dispatch]);

  return { showRemoveAccount, handleTrash, handleCancel, handleDeleteAccount };
};

export default useMyProfile;
