import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useMailsList = () => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState({});

  const { socket } = useSelector((state) => state.socketData);

  useEffect(() => {
    console.log("mounted");
  }, []);

  return { loading, messages, error };
};

export default useMailsList;
