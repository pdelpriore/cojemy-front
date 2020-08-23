import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/logout/thunk/logoutThunk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { capitalize } from "../../util/Util";
import { capitalizeFirst } from "../../util/Util";
import useNavMenu from "../../hooks/screen/nav/useNavMenu";
import { Nav, Spinner } from "react-bootstrap";
import Img from "react-image";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { strings } from "../../strings/Strings";
import { userGooglePhoto } from "../../shared/testWordsArray";
import { disconnectIOSocket } from "./disconnectIOSocket";
import "./navbar.css";

const MakeNavMenu = ({ type }) => {
  const dispatch = useDispatch();

  const { socket } = useSelector((state) => state.socketData);
  const { userData } = useSelector((state) => state.login);
  const { loading, unreadMessages } = useNavMenu();

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
        ) : item.name === strings.navbar.navUserLoggedItems.MAILS ? (
          <div className="navbar-mails-box" key={index}>
            <div className="navbar-mails-counter-box">
              {unreadMessages > 0 && (
                <div className="navbar-mails-counter">{unreadMessages}</div>
              )}
            </div>
            <Nav.Item as="li">
              <NavLink to={item.path} exact>
                {capitalizeFirst(item.name)}
              </NavLink>
            </Nav.Item>
          </div>
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
