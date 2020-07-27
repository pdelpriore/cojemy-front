import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useMails = () => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [error, setError] = useState({});

  const { socket } = useSelector((state) => state.socketData);

  return { loading, messages, conversations, error };
};

export default useMails;
