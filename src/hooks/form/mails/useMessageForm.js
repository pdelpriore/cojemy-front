import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showNewMessageForm } from "../../../redux/mails/showNewMessageForm/thunk/showNewMessageThunk";
import {
  chooseRecipient,
  chooseRecipientClearState,
} from "../../../redux/mails/chooseRecipient/thunk/chooseRecipientThunk";
import { strings } from "../../../strings/Strings";

const useMessageForm = () => {
  const dispatch = useDispatch();

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

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    dispatch(showNewMessageForm(false));
    setInputs({});
  };

  const handleRemoveRecipient = (e) => {
    e.preventDefault();
    dispatch(chooseRecipientClearState());
  };

  useEffect(() => {
    if (socket.connected && inputs.to) {
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
    } else if (socket.connected && !inputs.to) {
      setShowRecipientSuggestions(false);
      if (error.searchRecipientError || error.connectionError) {
        setError({});
      }
    } else if (socket.disconnected) {
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
    inputs.to,
    error.searchRecipientError,
    error.connectionError,
  ]);

  useEffect(() => {
    if (socket.connected && recipients.length > 0 && !recipient.name) {
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
    } else if (socket.disconnected) {
      setError((error) => ({
        ...error,
        connectionError: strings.mails.error.CONNECTION_ERROR,
      }));
      setLoading(false);
      setShowRecipientSuggestions(false);
    }
  }, [socket, recipients, recipient]);

  useEffect(() => {
    if (socket.connected && recipient.name && recipients.length > 0) {
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
    } else if (socket.disconnected) {
      setError((error) => ({
        ...error,
        connectionError: strings.mails.error.CONNECTION_ERROR,
      }));
      setLoading(false);
      setShowRecipientSuggestions(false);
    }
  }, [socket, recipients, recipient, dispatch]);

  useEffect(() => {
    if (recipient.name) {
      setShowRecipientSuggestions(false);
      setRecipients([]);
      setInputs((inputs) =>
        (({ to, ...others }) => ({
          ...others,
        }))(inputs)
      );
    }
  }, [recipient]);

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
    showRecipientSuggestions,
  };
};

export default useMessageForm;
