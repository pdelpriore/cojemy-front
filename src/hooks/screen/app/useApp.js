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
  const { windowOpen } = useSelector((state) => state.isConversationWindowOpen);
  const { messageId } = useSelector((state) => state.isMessageId);
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
      socket
        .off("newMessageSentAppInfo")
        .on("newMessageSentAppInfo", (result) => {
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
        .off("newConversationAppInfo")
        .on("newConversationAppInfo", (conversationMessageId) => {
          if (conversationMessageId) {
            if (windowOpen && conversationMessageId !== messageId) {
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
            } else if (!windowOpen) {
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
          }
        });
    }
    return () => {
      if ((socket.connected || socket.disconnected) && userLogged && isActive) {
        socket.removeAllListeners("messagesRetrieved");
        socket.removeAllListeners("getMessagesError");
        socket.removeAllListeners("newMessageSentAppInfo");
        socket.removeAllListeners("newConversationAppInfo");
        socket.removeAllListeners("messageUnreadSetInfo");
      }
    };
  }, [
    socket,
    userDataMemoized._id,
    isActive,
    userLogged,
    windowOpen,
    messageId,
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
