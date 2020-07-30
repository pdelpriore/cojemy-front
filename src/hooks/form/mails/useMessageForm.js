import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showNewMessageForm } from "../../../redux/mails/showNewMessageForm/thunk/showNewMessageThunk";
import { strings } from "../../../strings/Strings";

const useMessageForm = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [error, setError] = useState({});

  const { socket } = useSelector((state) => state.socketData);
  const { userData } = useSelector((state) => state.login);

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

  useEffect(() => {
    if (socket.connected && inputs.to) {
      setLoading(true);
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
        }
      });
    } else if (socket.connected && !inputs.to) {
      if (error.searchRecipientError || error.connectionError) {
        setError({});
      }
    } else if (socket.disconnected) {
      setError((error) => ({
        ...error,
        connectionError: strings.mails.error.CONNECTION_ERROR,
      }));
    }
  }, [socket, userData._id, inputs.to]);

  useEffect(() => {
    if (socket.connected && recipients.length > 0) {
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
    }
  }, [socket, recipients]);

  return {
    inputs,
    loading,
    messages,
    conversations,
    error,
    handleInputChange,
    handleCancel,
  };
};

export default useMessageForm;
