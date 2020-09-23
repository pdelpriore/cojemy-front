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
import { showEmojis } from "../../../redux/emoji/showEmojis/thunk/showEmojisThunk";
import { getEmojisClearState } from "../../../redux/emoji/getEmojis/thunk/getEmojisThunk";
import { conversationWindowOpen } from "../../../redux/mails/conversationWindowOpen/thunk/conversationWindowOpenThunk";
import { strings } from "../../../strings/Strings";
import { capitalizeFirst } from "../../../util/Util";

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
  const [recipients, setRecipients] = useState([]);
  const [error, setError] = useState({});
  const [inputHasFocus, setInputHasFocus] = useState("");

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
  const { mailError } = useSelector((state) => state.hasMailError);
  const { emojiCharacter } = useSelector((state) => state.selectedEmoji);

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };
  const handleFocus = (e) => {
    setInputHasFocus(e.target.name);
  };
  const handleBlur = (e) => {
    if (
      (e.relatedTarget &&
        e.relatedTarget.className &&
        !e.relatedTarget.className.includes("btn")) ||
      e.relatedTarget === null
    ) {
      setInputHasFocus("");
    }
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
        date: new Date(),
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
        date: new Date(),
      });
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
    if (emojiCharacter) {
      setInputs((inputs) => ({
        ...inputs,
        [inputHasFocus]: inputs[inputHasFocus].concat(emojiCharacter),
      }));
      dispatch(showEmojis(false));
    }
  }, [emojiCharacter, inputHasFocus, dispatch]);

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
            if (error.searchRecipientError) {
              setError({});
            }
            setSearchLoading(false);
            setRecipients(data);
          }
        });
      socket.off("searchRecipientError").on("searchRecipientError", (err) => {
        if (err) {
          setSearchLoading(false);
          setError((error) => ({
            ...error,
            searchRecipientError: err,
          }));
          setShowRecipientSuggestions(false);
        }
      });
    } else if (socket.connected && !inputs.to && isActive) {
      setShowRecipientSuggestions(false);
      if (error.searchRecipientError) {
        setError({});
      }
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
    }
  }, [socket, recipients, recipient, isActive]);

  useEffect(() => {
    if (
      socket.connected &&
      !inputs.to &&
      recipient.name &&
      recipients.length === 0 &&
      isActive
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
          if (
            userData._id ===
              result.newConversationContent[
                result.newConversationContent.length - 1
              ].author._id ||
            inputs.content === "" ||
            inputs.content === undefined
          )
            setInputs({});
        }
      });
    }
  }, [
    socket,
    inputs,
    recipients,
    recipient,
    userData._id,
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
    if (
      mailError === capitalizeFirst(strings.mails.error.CONNECTION_ERROR) &&
      isActive
    ) {
      setLoading(false);
      setSearchLoading(false);
      dispatch(chooseRecipientClearState());
      dispatch(setMessageIdClearState());
      setRecipients([]);
      setInputs({});
      dispatch(showEmojis(false));
      dispatch(getEmojisClearState());
      if (newMessageSelected) dispatch(newMessage(false));
      if (conversations.length > 0) dispatch(setConversationClearState());
    }
  }, [mailError, newMessageSelected, conversations, isActive, dispatch]);

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
    error,
    conversationScrollRef,
    inputHasFocus,
    handleInputChange,
    handleCancel,
    handleRemoveRecipient,
    handleSubmitMessage,
    handleFocus,
    handleBlur,
    showRecipientSuggestions,
  };
};

export default useMessageForm;
