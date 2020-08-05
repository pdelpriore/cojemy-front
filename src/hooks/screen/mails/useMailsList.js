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
    if (socket.connected && isActive) {
      socket.emit("getMessages", userData._id);
    }
    return () => {
      if (socket.connected && messages.length > 0 && isActive) {
        socket.removeAllListeners("getMessages");
      }
    };
  }, [socket, messages, isActive, userData._id]);

  return { loading, messages, error };
};

export default useMailsList;
