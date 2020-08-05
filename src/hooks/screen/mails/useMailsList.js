import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useMailsList = () => {
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState({});

  const { socket } = useSelector((state) => state.socketData);
  const { userData } = useSelector((state) => state.login);

  useEffect(() => {
    setIsActive(true);
    return () => setIsActive(false);
  }, []);

  useEffect(() => {
    if (socket.connected && messages.length === 0 && isActive) {
      setLoading(true);
      socket.emit("getMessages", userData._id);
      socket.on("messagesRetrieved", (data) => {
        if (data) {
          if (error.getMessagesError) {
            setError({});
          }
          setLoading(false);
          // dispatchuj do reduxa wszystkie wiadomosci, zeby nie zniknely po odswiezeniu
          setMessages(data);
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
      if (
        socket.connected &&
        (messages.length > 0 || messages.length === 0) &&
        isActive
      ) {
        socket.removeAllListeners("messagesRetrieved");
        socket.removeAllListeners("getMessagesError");
      }
    };
  }, [socket, messages, isActive, userData._id, error.getMessagesError]);

  console.log(messages);

  return { loading, messages, error };
};

export default useMailsList;
