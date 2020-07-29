import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showNewMessageForm } from "../../../redux/mails/showNewMessageForm/thunk/showNewMessageThunk";

const useMessage = () => {
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
          setLoading(false);
          setRecipients(data);
        }
      });
      socket.on("userActive", (userId) => {
        console.log("active");
        if (userId && recipients.length > 0) {
          recipients.forEach((recipient) => {
            if (recipient._id === userId) {
              recipient.isConnected = true;
            }
          });
        }
      });
      socket.on("userInactive", (userId) => {
        console.log("inactive");
        if (userId && recipients.length > 0) {
          recipients.forEach((recipient) => {
            if (recipient._id === userId) {
              recipient.isConnected = false;
            }
          });
        }
      });
    }
  }, [socket, inputs.to]);

  console.log(recipients);

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

export default useMessage;
