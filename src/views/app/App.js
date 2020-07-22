import React, { useMemo, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { strings } from "../../strings/Strings";
import Home from "../../components/home/Home";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import RecipeBook from "../recipeBook/RecipeBook";
import MyRecipes from "../myRecipes/MyRecipes";
import Mails from "../mails/Mails";
import MyEvents from "../myEvents/MyEvents";
import MyProfile from "../myProfile/MyProfile";
import { useSelector, useDispatch } from "react-redux";
import socketClient from "socket.io-client";
import { getUserSocketData } from "../../redux/mails/socketData/thunk/getSocketDataThunk";
import "./app.css";

const App = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.login);
  const { userLogged } = useSelector((state) => state.isUserLogged);

  const userDataMemoized = useMemo(() => {
    return { ...userData };
  }, [userLogged]);
  const socket = socketClient(strings.path.SERVER_PATH);

  useEffect(() => {
    if (userLogged) {
      socket.on("id", (id) => {
        dispatch(
          getUserSocketData({
            userId: userDataMemoized._id,
            userSocketId: id,
            socket: socket,
          })
        );
        socket.emit("userData", {
          userId: userDataMemoized._id,
          userSocketId: id,
        });
      });
    }
    return () => {
      socket.emit("disconnected", {
        userId: userDataMemoized._id,
      });
      socket.disconnect();
    };
  }, [userDataMemoized._id, userLogged, dispatch]);

  return (
    <>
      <Router>
        <Switch>
          {userDataMemoized.email !== undefined && (
            <Route path={strings.path.HOME} exact component={Home} />
          ) ? (
            <Redirect
              from={strings.path.HOME}
              to={strings.path.RECIPE_BOOK}
              exact
            />
          ) : (
            <Route path={strings.path.HOME} exact component={Home} />
          )}
          {userDataMemoized.email !== undefined && (
            <Route path={strings.path.LOGIN} exact component={Login} />
          ) ? (
            <Redirect
              from={strings.path.LOGIN}
              to={strings.path.RECIPE_BOOK}
              exact
            />
          ) : (
            <Route path={strings.path.LOGIN} exact component={Login} />
          )}
          {userDataMemoized.email !== undefined && (
            <Route path={strings.path.SIGNUP} exact component={Signup} />
          ) ? (
            <Redirect
              from={strings.path.SIGNUP}
              to={strings.path.RECIPE_BOOK}
            />
          ) : (
            <Route path={strings.path.SIGNUP} exact component={Signup} />
          )}
          {userDataMemoized.email !== undefined ? (
            <Route
              path={strings.path.RECIPE_BOOK}
              exact
              component={RecipeBook}
            />
          ) : (
            <Redirect to={strings.path.HOME} exact />
          )}
          {userDataMemoized.email !== undefined ? (
            <Route path={strings.path.MY_RECIPES} exact component={MyRecipes} />
          ) : (
            <Redirect to={strings.path.HOME} exact />
          )}
          {userDataMemoized.email !== undefined ? (
            <Route path={strings.path.MAILS} exact component={Mails} />
          ) : (
            <Redirect to={strings.path.HOME} exact />
          )}
          {userDataMemoized.email !== undefined ? (
            <Route path={strings.path.MY_EVENTS} exact component={MyEvents} />
          ) : (
            <Redirect to={strings.path.HOME} exact />
          )}
          {userDataMemoized.email !== undefined ? (
            <Route path={strings.path.MY_PROFILE} exact component={MyProfile} />
          ) : (
            <Redirect to={strings.path.HOME} exact />
          )}
        </Switch>
      </Router>
    </>
  );
};

export default App;
