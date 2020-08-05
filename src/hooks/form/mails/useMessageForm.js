import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showNewMessageForm } from "../../../redux/mails/showNewMessageForm/thunk/showNewMessageThunk";
import {
  chooseRecipient,
  chooseRecipientClearState,
} from "../../../redux/mails/chooseRecipient/thunk/chooseRecipientThunk";
import { newMessage } from "../../../redux/mails/newMessageSelected/thunk/newMessageSelectedThunk";
import { strings } from "../../../strings/Strings";

const useMessageForm = () => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);
  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(false);
  const [showRecipientSuggestions, setShowRecipientSuggestions] = useState(
    false
  );
  const [messages, setMessages] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [error, setError] = useState({});

  const { socket } = useSelector((state) => state.socketData);
  const { userData } = useSelector((state) => state.login);
  const { recipient } = useSelector((state) => state.isRecipientChosen);
  const { newMessageSelected } = useSelector(
    (state) => state.isNewMessageSelected
  );

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
      !newMessageSelected
    ) {
      console.log(
        "tu bedziemy emitowac nowe konwersacje do istniejacego message'a"
      );
      setLoading(false);
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
    setRecipients([]);
    setInputs({});
    if (newMessageSelected) dispatch(newMessage(false));
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
      setLoading(true);
      setShowRecipientSuggestions(true);
      socket.emit("searchRecipient", {
        sender: userData._id,
        searchedUser: inputs.to,
      });
      socket.on("searchRecipientResult", (data) => {
        if (data) {
          if (error.searchRecipientError || error.connectionError) {
            setError({});
          }
          setLoading(false);
          setRecipients(data);
        }
      });
      socket.on("searchRecipientError", (err) => {
        if (err) {
          setError((error) => ({
            ...error,
            searchRecipientError: err,
          }));
          setLoading(false);
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
      setLoading(false);
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
      socket.on("userActive", (userId) => {
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
      socket.on("userInactive", (userId) => {
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
      socket.on("userActive", (userId) => {
        if (userId) {
          if (recipient._id === userId)
            dispatch(chooseRecipient({ ...recipient, isConnected: true }));
        }
      });
      socket.on("userInactive", (userId) => {
        if (userId) {
          if (recipient._id === userId)
            dispatch(chooseRecipient({ ...recipient, isConnected: false }));
        }
      });
      socket.on("newMessageSent", (result) => {
        if (result) {
          console.log(result);
          // dispatchuj racej conversation, zeby sie nie skasowalo jak bedzie odswiezona strona !
          setConversations(result.messageSent);
          setLoading(false);
          setInputs({});
          dispatch(newMessage(false));
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
  }, [socket, inputs, recipients, recipient, isActive, dispatch]);

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

  useEffect(() => {
    return () => {
      if (
        socket.connected &&
        !inputs.to &&
        !recipient.name &&
        recipients.length === 0 &&
        isActive
      ) {
        socket.removeAllListeners("searchRecipientResult");
        socket.removeAllListeners("searchRecipientError");
        socket.removeAllListeners("userActive");
        socket.removeAllListeners("userInactive");
        socket.removeAllListeners("newMessageSent");
      }
    };
  }, [socket, inputs, recipients, recipient, isActive]);

  return {
    inputs,
    recipients,
    loading,
    messages,
    conversations,
    error,
    handleInputChange,
    handleCancel,
    handleRemoveRecipient,
    handleSubmitMessage,
    showRecipientSuggestions,
  };
};

export default useMessageForm;
