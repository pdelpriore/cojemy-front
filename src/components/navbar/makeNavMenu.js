import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearLoginState } from "../../redux/login/thunk/loginThunk";
import {
  clearLogoutState,
  logoutUser,
} from "../../redux/logout/thunk/logoutThunk";
import { clearGoogleLoginState } from "../../redux/googleLogin/thunk/googleLoginThunk";
import {
  clearGoogleLogoutState,
  logoutGoogleUser,
} from "../../redux/googleLogout/thunk/googleLogoutThunk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { capitalize } from "../../util/Util";
import { capitalizeFirst } from "../../util/Util";
import { Nav, Spinner } from "react-bootstrap";
import Img from "react-image";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { strings } from "../../strings/Strings";
import "./navbar.css";

const MakeNavMenu = ({ type }) => {
  const navHomeItems = [
    { name: strings.navbar.navHomeItems.LOGO, path: strings.path.HOME },
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
  const { googleUserData } = useSelector((state) => state.loginGoogle);
  const { googleLogoutLoading, googleUserLoggedOut } = useSelector(
    (state) => state.googleLogout
  );

  useEffect(() => {
    if (userLoggedOut) dispatch(clearLoginState());
    if (userData.email === undefined) dispatch(clearLogoutState());
    if (googleUserLoggedOut) dispatch(clearGoogleLoginState());
    if (googleUserData.email === undefined) dispatch(clearGoogleLogoutState());
  }, [userData, userLoggedOut, googleUserData, googleUserLoggedOut, dispatch]);

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
          !loading || !googleLogoutLoading ? (
            <Nav.Item as="li" key={index}>
              <NavLink
                onClick={(e) => {
                  e.preventDefault();
                  if (userData.email !== undefined) {
                    dispatch(logoutUser(userData.email));
                  } else if (googleUserData.email !== undefined) {
                    dispatch(logoutGoogleUser(googleUserData.email));
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
          userData.photo || googleUserData.googlePhoto ? (
            <Img
              key={index}
              className="navbar-user-photo"
              src={
                userData.photo
                  ? userData.photo
                  : googleUserData.googlePhoto
                  ? googleUserData.googlePhoto
                  : null
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
