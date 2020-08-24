import { useMemo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ioConnect } from "../../../redux/mails/socketData/thunk/ioConnectThunk";
import {
  setMessages,
  setMessagesClearState,
} from "../../../redux/mails/setMessages/thunk/setMessagesThunk";

const useApp = () => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);

  const { userData } = useSelector((state) => state.login);
  const { userLogged } = useSelector((state) => state.isUserLogged);
  const { socket } = useSelector((state) => state.socketData);

  const userDataMemoized = useMemo(() => {
    return { ...userData };
  }, [userData]);

  useEffect(() => {
    setIsActive(true);
    return () => setIsActive(false);
  }, []);

  useEffect(() => {
    if ((socket.connected || socket.disconnected) && userLogged && isActive) {
      socket.emit("getMessages", userDataMemoized._id);
      socket.off("messagesRetrieved").on("messagesRetrieved", (data) => {
        if (data.length > 0) {
          dispatch(setMessages(data));
        }
      });
      socket.off("getMessagesError").on("getMessagesError", (err) => {
        if (err) {
          dispatch(setMessagesClearState());
        }
      });
      socket.off("newMessageSentInfo").on("newMessageSentInfo", (result) => {
        if (result) {
          socket.emit("getMessages", userDataMemoized._id);
          socket.off("messagesRetrieved").on("messagesRetrieved", (data) => {
            if (data.length > 0) {
              dispatch(setMessages(data));
            }
          });
        }
      });
      socket
        .off("newConversationInfo")
        .on("newConversationInfo", (conversationMessageId) => {
          if (conversationMessageId) {
            socket.emit("messageUnread", conversationMessageId);
            socket
              .off("messageUnreadSetInfo")
              .on("messageUnreadSetInfo", (result) => {
                if (result) {
                  socket.emit("getMessages", userDataMemoized._id);
                  socket
                    .off("messagesRetrieved")
                    .on("messagesRetrieved", (data) => {
                      if (data.length > 0) {
                        dispatch(setMessages(data));
                      }
                    });
                }
              });
          }
        });
    }
    return () => {
      if ((socket.connected || socket.disconnected) && userLogged && isActive) {
        socket.removeAllListeners("messagesRetrieved");
        socket.removeAllListeners("getMessagesError");
        socket.removeAllListeners("newMessageSentInfo");
        socket.removeAllListeners("newConversationInfo");
        socket.removeAllListeners("messageUnreadSetInfo");
      }
    };
  }, [socket, userDataMemoized._id, isActive, userLogged, dispatch]);

  useEffect(() => {
    if (userLogged) {
      dispatch(ioConnect(userDataMemoized._id, userDataMemoized.email));
    }
  }, [userDataMemoized._id, userDataMemoized.email, userLogged, dispatch]);

  return { userDataMemoized };
};

export default useApp;
