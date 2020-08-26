import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showNewMessageForm } from "../../../redux/mails/showNewMessageForm/thunk/showNewMessageThunk";
import {
  chooseRecipient,
  chooseRecipientClearState,
} from "../../../redux/mails/chooseRecipient/thunk/chooseRecipientThunk";
import { newMessage } from "../../../redux/mails/newMessageSelected/thunk/newMessageSelectedThunk";
import {
  setConversation,
  setConversationClearState,
} from "../../../redux/mails/setConversation/thunk/setConversationThunk";
import {
  setMessageId,
  setMessageIdClearState,
} from "../../../redux/mails/setMessageId/thunk/setMessageIdThunk";
import { conversationWindowOpen } from "../../../redux/mails/conversationWindowOpen/thunk/conversationWindowOpenThunk";
import { strings } from "../../../strings/Strings";

const useMessageForm = () => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);
  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [newTopPosition, setNewTopPosition] = useState(null);
  const [showRecipientSuggestions, setShowRecipientSuggestions] = useState(
    false
  );
  const [messages, setMessages] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [error, setError] = useState({});

  const conversationScrollRef = useRef(null);

  const { socket } = useSelector((state) => state.socketData);
  const { userData } = useSelector((state) => state.login);
  const { recipient } = useSelector((state) => state.isRecipientChosen);
  const { newMessageSelected } = useSelector(
    (state) => state.isNewMessageSelected
  );
  const { conversations } = useSelector((state) => state.userConversations);
  const { windowOpen } = useSelector((state) => state.isConversationWindowOpen);
  const { messageId } = useSelector((state) => state.isMessageId);

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      socket.connected &&
      recipient.name &&
      inputs.content &&
      newMessageSelected
    ) {
      socket.emit("sendNewMessage", {
        sender: userData._id,
        recipient: recipient._id,
        content: inputs.content,
      });
    } else if (
      socket.connected &&
      recipient.name &&
      inputs.content &&
      !newMessageSelected &&
      messageId
    ) {
      socket.emit("sendNewConversation", {
        messageId: messageId,
        sender: userData._id,
        recipient: recipient._id,
        content: inputs.content,
      });
    } else if (socket.disconnected) {
      setLoading(false);
      setError((error) => ({
        ...error,
        connectionError: strings.mails.error.CONNECTION_ERROR,
      }));
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    if (recipient.name) dispatch(chooseRecipientClearState());
    dispatch(showNewMessageForm(false));
    dispatch(setMessageIdClearState());
    setRecipients([]);
    setInputs({});
    if (newMessageSelected) dispatch(newMessage(false));
    dispatch(conversationWindowOpen(false));
    if (conversations.length > 0) dispatch(setConversationClearState());
  };

  const handleRemoveRecipient = (e) => {
    e.preventDefault();
    dispatch(chooseRecipientClearState());
  };

  useEffect(() => {
    setIsActive(true);
    return () => setIsActive(false);
  }, []);

  useEffect(() => {
    if (socket.connected && inputs.to && isActive) {
      setSearchLoading(true);
      setShowRecipientSuggestions(true);
      socket.emit("searchRecipient", {
        sender: userData._id,
        searchedUser: inputs.to,
      });
      socket
        .off("searchRecipientResult")
        .on("searchRecipientResult", (data) => {
          if (data.length > 0) {
            if (error.searchRecipientError || error.connectionError) {
              setError({});
            }
            setSearchLoading(false);
            setRecipients(data);
          }
        });
      socket.off("searchRecipientError").on("searchRecipientError", (err) => {
        if (err) {
          setError((error) => ({
            ...error,
            searchRecipientError: err,
          }));
          setSearchLoading(false);
          setShowRecipientSuggestions(false);
        }
      });
    } else if (socket.connected && !inputs.to && isActive) {
      setShowRecipientSuggestions(false);
      if (error.searchRecipientError || error.connectionError) {
        setError({});
      }
    } else if (socket.disconnected && isActive) {
      setError((error) => ({
        ...error,
        connectionError: strings.mails.error.CONNECTION_ERROR,
      }));
      setSearchLoading(false);
      setShowRecipientSuggestions(false);
    }
  }, [
    socket,
    userData._id,
    isActive,
    inputs.to,
    error.searchRecipientError,
    error.connectionError,
  ]);

  useEffect(() => {
    if (
      socket.connected &&
      recipients.length > 0 &&
      !recipient.name &&
      isActive
    ) {
      socket.off("userActive").on("userActive", (userId) => {
        if (userId) {
          setRecipients(
            recipients.map((recipient) =>
              recipient._id.toString() === userId
                ? { ...recipient, isConnected: true }
                : recipient
            )
          );
        }
      });
      socket.off("userInactive").on("userInactive", (userId) => {
        if (userId) {
          setRecipients(
            recipients.map((recipient) =>
              recipient._id.toString() === userId
                ? { ...recipient, isConnected: false }
                : recipient
            )
          );
        }
      });
    } else if (socket.disconnected && isActive) {
      setError((error) => ({
        ...error,
        connectionError: strings.mails.error.CONNECTION_ERROR,
      }));
      setLoading(false);
      setShowRecipientSuggestions(false);
    }
  }, [socket, recipients, recipient, isActive]);

  useEffect(() => {
    if (
      (socket.connected && !inputs.to,
      recipient.name && recipients.length === 0 && isActive)
    ) {
      socket.off("userActive").on("userActive", (userId) => {
        if (userId) {
          if (recipient._id === userId)
            dispatch(chooseRecipient({ ...recipient, isConnected: true }));
        }
      });
      socket.off("userInactive").on("userInactive", (userId) => {
        if (userId) {
          if (recipient._id === userId)
            dispatch(chooseRecipient({ ...recipient, isConnected: false }));
        }
      });
      socket.off("newMessageSent").on("newMessageSent", (result) => {
        if (result) {
          setLoading(false);
          dispatch(setConversation(result.messageSent));
          dispatch(setMessageId(result.messageSent[0].message));
          setInputs({});
          dispatch(newMessage(false));
        }
      });
      socket.off("newConversationSent").on("newConversationSent", (result) => {
        if (
          result &&
          windowOpen &&
          result.newConversationContent[0].message === messageId
        ) {
          setLoading(false);
          dispatch(setConversation(result.newConversationContent));
          setInputs({});
        }
      });
    } else if (socket.disconnected && isActive) {
      setError((error) => ({
        ...error,
        connectionError: strings.mails.error.CONNECTION_ERROR,
      }));
      setLoading(false);
      setShowRecipientSuggestions(false);
    }
  }, [
    socket,
    inputs,
    recipients,
    recipient,
    windowOpen,
    messageId,
    isActive,
    dispatch,
  ]);

  useEffect(() => {
    if (recipient.name && isActive) {
      setShowRecipientSuggestions(false);
      setRecipients([]);
      setInputs((inputs) =>
        (({ to, ...others }) => ({
          ...others,
        }))(inputs)
      );
    }
  }, [recipient, isActive]);

  let scrollRefCurrentHeight =
    conversationScrollRef.current &&
    conversationScrollRef.current.state.realHeight;

  useEffect(() => {
    setNewTopPosition(
      conversationScrollRef.current.state.realHeight -
        conversationScrollRef.current.state.containerHeight
    );
  }, [scrollRefCurrentHeight]);

  useEffect(() => {
    conversationScrollRef.current.scrollArea.scrollYTo(newTopPosition);
  }, [newTopPosition]);

  useEffect(() => {
    return () => {
      if (socket.connected && isActive) {
        socket.removeAllListeners("searchRecipientResult");
        socket.removeAllListeners("searchRecipientError");
        socket.removeAllListeners("userActive");
        socket.removeAllListeners("userInactive");
        socket.removeAllListeners("newMessageSent");
        socket.removeAllListeners("newConversationSent");
      }
    };
  }, [socket, isActive]);

  return {
    inputs,
    recipients,
    loading,
    searchLoading,
    messages,
    error,
    conversationScrollRef,
    handleInputChange,
    handleCancel,
    handleRemoveRecipient,
    handleSubmitMessage,
    showRecipientSuggestions,
  };
};

export default useMessageForm;
