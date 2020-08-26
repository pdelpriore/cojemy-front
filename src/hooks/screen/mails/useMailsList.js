import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setMessages,
  setMessagesClearState,
} from "../../../redux/mails/setMessages/thunk/setMessagesThunk";
import { mailsComponentActive } from "../../../redux/mails/mailsComponentActive/thunk/mailsComponentActiveThunk";
import {
  setMailError,
  mailErrorClearState,
} from "../../../redux/mails/mailError/thunk/mailErrorThunk";
import { strings } from "../../../strings/Strings";
import { capitalizeFirst } from "../../../util/Util";

const useMailsList = () => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const { socket } = useSelector((state) => state.socketData);
  const { userData } = useSelector((state) => state.login);
  const { messages } = useSelector((state) => state.userMessages);
  const { newMessageSelected } = useSelector(
    (state) => state.isNewMessageSelected
  );
  const { windowOpen } = useSelector((state) => state.isConversationWindowOpen);
  const { messageId } = useSelector((state) => state.isMessageId);
  const { mailError } = useSelector((state) => state.hasMailError);

  useEffect(() => {
    setIsActive(true);
    dispatch(mailsComponentActive(true));
    return () => {
      setIsActive(false);
      dispatch(mailsComponentActive(false));
    };
  }, [dispatch]);

  useEffect(() => {
    if (socket.connected && !newMessageSelected && !windowOpen && isActive) {
      setLoading(true);
      socket.emit("getMessages", userData._id);
      socket.off("messagesRetrieved").on("messagesRetrieved", (data) => {
        if (data.length > 0) {
          if (mailError) {
            dispatch(mailErrorClearState());
          }
          setLoading(false);
          dispatch(setMessages(data));
        }
      });
      socket.off("getMessagesError").on("getMessagesError", (err) => {
        if (err) {
          setLoading(false);
          dispatch(setMailError(err));
          dispatch(setMessagesClearState());
        }
      });
    }
  }, [
    socket,
    isActive,
    mailError,
    userData._id,
    error.getMessagesError,
    windowOpen,
    newMessageSelected,
    dispatch,
  ]);

  useEffect(() => {
    if (
      socket.connected &&
      windowOpen &&
      messageId &&
      messages.length > 0 &&
      isActive
    ) {
      const messageUnread = messages.filter(
        (message) => message._id.toString() === messageId
      )[0];
      if (
        messageUnread &&
        messageUnread._id &&
        ((userData._id === messageUnread.recipient._id &&
          userData._id !==
            messageUnread.conversations[messageUnread.conversations.length - 1]
              .author._id) ||
          (userData._id === messageUnread.sender._id &&
            userData._id !==
              messageUnread.conversations[
                messageUnread.conversations.length - 1
              ].author._id))
      ) {
        socket.emit("messageRead", messageUnread._id);
        socket
          .off("messageReadSetListInfo")
          .on("messageReadSetListInfo", (result) => {
            if (result) {
              socket.emit("getMessages", userData._id);
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
  }, [
    socket,
    windowOpen,
    messageId,
    userData._id,
    error.getMessagesError,
    isActive,
    dispatch,
  ]);

  useEffect(() => {
    if (socket.connected && messages.length > 0 && isActive) {
      socket.off("userActiveListInfo").on("userActiveListInfo", (res) => {
        if (res || !res) {
          socket.emit("getMessages", userData._id);
          socket.off("messagesRetrieved").on("messagesRetrieved", (data) => {
            if (data.length > 0) {
              dispatch(setMessages(data));
            }
          });
        }
      });
    }
  }, [
    socket,
    isActive,
    messages,
    error.getMessagesError,
    userData._id,
    dispatch,
  ]);

  useEffect(() => {
    if (socket.connected && isActive) {
      socket
        .off("newMessageSentListInfo")
        .on("newMessageSentListInfo", (result) => {
          if (result) {
            socket.emit("getMessages", userData._id);
            socket.off("messagesRetrieved").on("messagesRetrieved", (data) => {
              if (data.length > 0) {
                if (mailError) {
                  dispatch(mailErrorClearState());
                }
                dispatch(setMessages(data));
              }
            });
          }
        });
      socket
        .off("messageReadSetListInfo")
        .on("messageReadSetListInfo", (result) => {
          if (result) {
            socket.emit("getMessages", userData._id);
            socket.off("messagesRetrieved").on("messagesRetrieved", (data) => {
              if (data.length > 0) {
                dispatch(setMessages(data));
              }
            });
          }
        });
      socket
        .off("newConversationListInfo")
        .on("newConversationListInfo", (conversationMessageId) => {
          if (conversationMessageId) {
            if (windowOpen && conversationMessageId !== messageId) {
              socket.emit("messageUnread", conversationMessageId);
              socket
                .off("messageUnreadSetListInfo")
                .on("messageUnreadSetListInfo", (result) => {
                  if (result) {
                    socket.emit("getMessages", userData._id);
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
                .off("messageUnreadSetListInfo")
                .on("messageUnreadSetListInfo", (result) => {
                  if (result) {
                    socket.emit("getMessages", userData._id);
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
      socket.off("disconnect").on("disconnect", () => {
        setLoading(false);
        dispatch(
          setMailError(capitalizeFirst(strings.mails.error.CONNECTION_ERROR))
        );
        dispatch(setMessagesClearState());
      });
      socket.off("reconnect").on("reconnect", () => {
        setLoading(true);
        socket.emit("getMessages", userData._id);
        socket.off("messagesRetrieved").on("messagesRetrieved", (data) => {
          if (data.length > 0) {
            if (mailError) {
              dispatch(mailErrorClearState());
            }
            setLoading(false);
            dispatch(setMessages(data));
          }
        });
        socket.off("getMessagesError").on("getMessagesError", (err) => {
          if (err) {
            setLoading(false);
            dispatch(setMailError(err));
            dispatch(setMessagesClearState());
          }
        });
      });
    }
  }, [
    socket,
    userData._id,
    error.getMessagesError,
    isActive,
    messageId,
    windowOpen,
    dispatch,
  ]);

  useEffect(() => {
    return () => {
      if (socket.connected && isActive) {
        socket.removeAllListeners("messagesRetrieved");
        socket.removeAllListeners("getMessagesError");
        socket.removeAllListeners("userActiveListInfo");
        socket.removeAllListeners("messageReadSetListInfo");
        socket.removeAllListeners("messageUnreadSetListInfo");
        socket.removeAllListeners("newMessageSentListInfo");
        socket.removeAllListeners("newConversationListInfo");
        socket.removeAllListeners("disconnect");
        socket.removeAllListeners("reconnect");
      }
    };
  }, [socket, isActive]);

  return { loading, error };
};

export default useMailsList;
