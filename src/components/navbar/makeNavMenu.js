import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearLoginState } from "../../redux/login/loginUser/thunk/loginThunk";
import {
  clearLogoutState,
  logoutUser,
} from "../../redux/logout/thunk/logoutThunk";
import { myRecipesClearState } from "../../redux/myRecipes/retrieveMyRecipes/thunk/retrieveMyRecipesThunk";
import { recipeDetailsClearState } from "../../redux/recipeBook/showRecipeDetails/thunk/showRecipeDetailsThunk";
import { categorySelectedClearState } from "../../redux/recipeBook/recipeCategorySelected/thunk/recipeCategorySelectedThunk";
import { recipeBookClearState } from "../../redux/recipeBook/retrieveRecipe/thunk/retrieveRecipesThunk";
import { changeRecipeListItem } from "../../redux/recipeBook/changeRecipeListItem/thunk/changeRecipeListItemThunk";
import { toEditRateCommentClearState } from "../../redux/recipeBook/toEditRecipeRateComment/thunk/toEditRateCommentThunk";
import { toEditMyRecipeClearState } from "../../redux/myRecipes/toEditMyRecipe/thunk/toEditMyRecipeThunk";
import { myRecipePreviewClearState } from "../../redux/myRecipes/myRecipePreview/thunk/myRecipePreviewThunk";
import { getAddressClearState } from "../../redux/myEvents/getAddress/thunk/getAddressThunk";
import { selectEventAddressClearState } from "../../redux/myEvents/selectEventAddress/thunk/selectEventAddressThunk";
import { getLocationDetailsClearState } from "../../redux/myEvents/getLocationDetails/thunk/getLocationDetailsThunk";
import { getEventsClearState } from "../../redux/myEvents/retrieveEvents/thunk/retrieveEventsThunk";
import { eventPreviewClearState } from "../../redux/myEvents/eventPreview/thunk/eventPreviewThunk";
import { toEditEventClearState } from "../../redux/myEvents/toEditEvent/thunk/toEditEventThunk";
import { eventCategorySelectedClearState } from "../../redux/myEvents/eventCategorySelected/thunk/eventCategorySelectedThunk";
import { ioConnectClearState } from "../../redux/mails/socketData/thunk/ioConnectThunk";
import { setConversationClearState } from "../../redux/mails/setConversation/thunk/setConversationThunk";
import { setMessagesClearState } from "../../redux/mails/setMessages/thunk/setMessagesThunk";
import { searchEventFilled } from "../../redux/myEvents/searchEventFilled/thunk/searchEventFilledThunk";
import { loginUser } from "../../redux/login/userLogged/thunk/userLoggedThunk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { capitalize } from "../../util/Util";
import { capitalizeFirst } from "../../util/Util";
import { Nav, Spinner } from "react-bootstrap";
import Img from "react-image";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { strings } from "../../strings/Strings";
import { userGooglePhoto } from "../../shared/testWordsArray";
import { disconnectIOSocket } from "./disconnectIOSocket";
import "./navbar.css";

const MakeNavMenu = ({ type }) => {
  const navHomeItems = [
    { name: strings.navbar.navHomeItems.LOGO, path: strings.path.HOME },
    { name: strings.navbar.navHomeItems.MAIN },
    { name: strings.navbar.navHomeItems.ABOUT },
    { name: strings.navbar.navHomeItems.CONTACT },
  ];

  const navGetStartedItems = [
    { name: strings.navbar.navGetStartedItems.LOGIN, path: strings.path.LOGIN },
    {
      name: strings.navbar.navGetStartedItems.SIGNUP,
      path: strings.path.SIGNUP,
    },
  ];

  const navUserLoggedItems = [
    { name: strings.navbar.navHomeItems.LOGO, path: strings.path.RECIPE_BOOK },
    {
      name: strings.navbar.navUserLoggedItems.RECIPE_BOOK,
      path: strings.path.RECIPE_BOOK,
    },
    {
      name: strings.navbar.navUserLoggedItems.MY_RECIPES,
      path: strings.path.MY_RECIPES,
    },
    { name: strings.navbar.navUserLoggedItems.MAILS, path: strings.path.MAILS },
    {
      name: strings.navbar.navUserLoggedItems.MY_EVENTS,
      path: strings.path.MY_EVENTS,
    },
    {
      name: strings.navbar.navUserLoggedItems.MY_PROFILE,
      path: strings.path.MY_PROFILE,
    },
    {
      name: strings.navbar.navUserLoggedItems.USER_PHOTO,
      path: strings.path.USER_PHOTO,
    },
    {
      name: strings.navbar.navUserLoggedItems.SIGNOUT,
      path: strings.path.SIGNOUT,
    },
  ];
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.login);
  const { loading, userLoggedOut } = useSelector((state) => state.logout);
  const { socket } = useSelector((state) => state.socketData);

  useEffect(() => {
    if (socket.disconnected && userLoggedOut) {
      dispatch(clearLoginState());
      dispatch(loginUser(false));
      dispatch(recipeDetailsClearState());
      dispatch(myRecipePreviewClearState());
      dispatch(categorySelectedClearState());
      dispatch(myRecipesClearState());
      dispatch(recipeBookClearState());
      dispatch(toEditRateCommentClearState());
      dispatch(toEditMyRecipeClearState());
      dispatch(changeRecipeListItem(true));
      dispatch(getAddressClearState());
      dispatch(selectEventAddressClearState());
      dispatch(getLocationDetailsClearState());
      dispatch(getEventsClearState());
      dispatch(eventPreviewClearState());
      dispatch(toEditEventClearState());
      dispatch(eventCategorySelectedClearState());
      dispatch(searchEventFilled(false));
      dispatch(ioConnectClearState());
      dispatch(setConversationClearState());
      dispatch(setMessagesClearState());
    }
  }, [userLoggedOut, socket, dispatch]);

  useEffect(() => {
    if (userData.email === undefined) dispatch(clearLogoutState());
  }, [userData.email, dispatch]);

  return type === strings.navbar.navType.LOGO
    ? navHomeItems.map(
        (item, index) =>
          item.name === strings.navbar.navHomeItems.LOGO && (
            <Nav.Item as="li" className="logo" key={index}>
              <Link
                activeClass="active"
                to={item.name}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {capitalize(item.name)}
              </Link>
            </Nav.Item>
          )
      )
    : type === strings.navbar.navType.LOGO_GET_STARTED
    ? navHomeItems.map(
        (item, index) =>
          item.name === strings.navbar.navHomeItems.LOGO && (
            <Nav.Item as="li" className="logo" key={index}>
              <NavLink activeClassName="active" to={item.path} exact>
                {capitalize(item.name)}
              </NavLink>
            </Nav.Item>
          )
      )
    : type === strings.navbar.navType.LOGO_USER_LOGGED
    ? navUserLoggedItems.map(
        (item, index) =>
          item.name === strings.navbar.navHomeItems.LOGO && (
            <Nav.Item as="li" className="logo" key={index}>
              <NavLink activeClassName="active" to={item.path} exact>
                {capitalize(item.name)}
              </NavLink>
            </Nav.Item>
          )
      )
    : type === strings.navbar.navType.HOME_MENU
    ? navHomeItems.slice(1).map((item, index) => (
        <Nav.Item as="li" key={index}>
          <Link
            activeClass="active"
            to={item.name}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            {capitalize(item.name)}
          </Link>
        </Nav.Item>
      ))
    : type === strings.navbar.navType.GET_STARTED_MENU
    ? navGetStartedItems.map((item, index) => (
        <Nav.Item as="li" key={index}>
          <NavLink activeClassName="active" to={item.path} exact>
            {capitalize(item.name)}
          </NavLink>
        </Nav.Item>
      ))
    : type === strings.navbar.navType.USER_LOGGED_MENU
    ? navUserLoggedItems.slice(1).map((item, index) =>
        item.name === strings.navbar.navUserLoggedItems.SIGNOUT ? (
          !loading ? (
            <Nav.Item as="li" key={index}>
              <NavLink
                onClick={async (e) => {
                  e.preventDefault();
                  if (userData.email !== undefined) {
                    if (socket.connected)
                      await disconnectIOSocket(socket, userData._id);
                    dispatch(logoutUser(userData._id, userData.email));
                  }
                }}
                to={item.path}
                exact
              >
                {capitalize(item.name)}
              </NavLink>
            </Nav.Item>
          ) : (
            <div className="signout-loading" key={index}>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <Nav.Item as="li">
                <NavLink className="signout-loading-text" to={item.path} exact>
                  {capitalizeFirst(strings.logout.LOGOUT)}
                </NavLink>
              </Nav.Item>
            </div>
          )
        ) : item.name === strings.navbar.navUserLoggedItems.USER_PHOTO ? (
          userData.photo ? (
            <Img
              key={index}
              className="navbar-user-photo"
              src={
                userGooglePhoto.some(
                  (element) =>
                    userData.photo && userData.photo.includes(element)
                )
                  ? userData.photo
                  : strings.path.IMAGE_REQUEST + userData.photo
              }
              loader={<Spinner animation="border" size="sm" variant="dark" />}
            />
          ) : (
            <FontAwesomeIcon
              key={index}
              className="navbar-user-icon"
              icon={faUserCircle}
            />
          )
        ) : (
          <Nav.Item as="li" key={index}>
            <NavLink activeClassName="active" to={item.path} exact>
              {capitalize(item.name)}
            </NavLink>
          </Nav.Item>
        )
      )
    : null;
};

export default MakeNavMenu;
