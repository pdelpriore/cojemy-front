import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showNewMessageForm } from "../../../redux/mails/showNewMessageForm/thunk/showNewMessageThunk";

const useMessage = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [conversations, setConversations] = useState([]);
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
      socket.emit("searchRecipient", {
        sender: userData._id,
        searchedUser: inputs.to,
      });
      socket.on("searchRecipientResult", (data) => console.log(data));
    }
  }, [socket, inputs.to]);

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
