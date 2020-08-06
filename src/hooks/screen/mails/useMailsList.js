import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMessages } from "../../../redux/mails/setMessages/thunk/setMessagesThunk";

const useMailsList = () => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const { socket } = useSelector((state) => state.socketData);
  const { userData } = useSelector((state) => state.login);
  const { messages } = useSelector((state) => state.userMessages);

  useEffect(() => {
    setIsActive(true);
    return () => setIsActive(false);
  }, []);

  useEffect(() => {
    if (socket.connected && isActive) {
      setLoading(true);
      socket.emit("getMessages", userData._id);
      socket.on("messagesRetrieved", (data) => {
        if (data) {
          if (error.getMessagesError) {
            setError({});
          }
          setLoading(false);
          dispatch(setMessages(data));
        }
      });
      socket.on("getMessagesError", (err) => {
        if (err) {
          setError((error) => ({
            ...error,
            getMessagesError: err,
          }));
          setLoading(false);
        }
      });
    }
    return () => {
      if (socket.connected && isActive) {
        socket.removeAllListeners("messagesRetrieved");
        socket.removeAllListeners("getMessagesError");
      }
    };
  }, [socket, isActive, userData._id, error.getMessagesError, dispatch]);

  return { loading, error };
};

export default useMailsList;
