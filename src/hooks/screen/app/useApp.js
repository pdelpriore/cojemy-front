import { useMemo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ioConnect } from "../../../redux/mails/socketData/thunk/ioConnectThunk";
import { setMessages } from "../../../redux/mails/setMessages/thunk/setMessagesThunk";

const useApp = () => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);

  const { userData } = useSelector((state) => state.login);
  const { userLogged } = useSelector((state) => state.isUserLogged);
  const { newMessageSelected } = useSelector(
    (state) => state.isNewMessageSelected
  );
  const { windowOpen } = useSelector((state) => state.isConversationWindowOpen);
  const { socket } = useSelector((state) => state.socketData);

  const userDataMemoized = useMemo(() => {
    return { ...userData };
  }, [userData]);

  useEffect(() => {
    setIsActive(true);
    return () => setIsActive(false);
  }, []);

  useEffect(() => {
    if (
      (socket.connected || socket.disconnected) &&
      !newMessageSelected &&
      !windowOpen &&
      isActive
    ) {
      socket.emit("getMessages", userDataMemoized._id);
      socket.off("messagesRetrieved").on("messagesRetrieved", (data) => {
        if (data.length > 0) {
          dispatch(setMessages(data));
        }
      });
    }
  }, [
    socket,
    newMessageSelected,
    windowOpen,
    userDataMemoized._id,
    isActive,
    dispatch,
  ]);

  useEffect(() => {
    if (userLogged) {
      dispatch(ioConnect(userDataMemoized._id, userDataMemoized.email));
    }
  }, [userDataMemoized._id, userDataMemoized.email, userLogged, dispatch]);

  return { userDataMemoized };
};

export default useApp;
