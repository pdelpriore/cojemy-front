import { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ioConnect } from "../../../redux/mails/socketData/thunk/ioConnectThunk";

const useApp = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.login);
  const { userLogged } = useSelector((state) => state.isUserLogged);

  const userDataMemoized = useMemo(() => {
    return { ...userData };
  }, [userData]);

  useEffect(() => {
    if (userLogged) {
      dispatch(ioConnect(userDataMemoized._id, userDataMemoized.email));
    }
  }, [userDataMemoized._id, userDataMemoized.email, userLogged, dispatch]);

  return { userDataMemoized };
};

export default useApp;
