import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearLoginState } from "../../redux/login/thunk/loginThunk";
import { clearLogoutState } from "../../redux/logout/thunk/logoutThunk";
import { logoutUser } from "../../redux/logout/thunk/logoutThunk";
import { capitalize } from "../../util/Util";
import { capitalizeFirst } from "../../util/Util";
import { Nav, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { strings } from "../../strings/Strings";
import "./navbar.css";

const MakeNavMenu = ({ type }) => {
  const navHomeItems = [
    { name: strings.navbar.navHomeItems.LOGO, path: strings.path.HOME },
    { name: strings.navbar.navHomeItems.ABOUT },
    { name: strings.navbar.navHomeItems.CONTACT }
  ];

  const navGetStartedItems = [
    { name: strings.navbar.navGetStartedItems.LOGIN, path: strings.path.LOGIN },
    {
      name: strings.navbar.navGetStartedItems.SIGNUP,
      path: strings.path.SIGNUP
    }
  ];

  const navUserLoggedItems = [
    { name: strings.navbar.navHomeItems.LOGO, path: strings.path.RECIPE_BOOK },
    {
      name: strings.navbar.navUserLoggedItems.MY_RECIPES,
      path: strings.path.MY_RECIPES
    },
    { name: strings.navbar.navUserLoggedItems.MAILS, path: strings.path.MAILS },
    {
      name: strings.navbar.navUserLoggedItems.MY_EVENTS,
      path: strings.path.MY_EVENTS
    },
    {
      name: strings.navbar.navUserLoggedItems.MY_PROFILE,
      path: strings.path.MY_PROFILE
    },
    {
      name: strings.navbar.navUserLoggedItems.SIGNOUT,
      path: strings.path.SIGNOUT
    }
  ];
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.login);
  const { loading, userLoggedOut } = useSelector(state => state.logout);

  let clearLoginReduxState = useCallback(() => {
    dispatch(clearLoginState());
  }, [dispatch]);

  let clearLogoutReduxState = useCallback(() => {
    dispatch(clearLogoutState());
  }, [dispatch]);

  useEffect(() => {
    if (userLoggedOut) clearLoginReduxState();
    if (userData.email === undefined) clearLogoutReduxState();
  }, [userData, userLoggedOut, clearLoginReduxState, clearLogoutReduxState]);

  return type === strings.navbar.navType.LOGO
    ? navHomeItems.map(
        item =>
          item.name === strings.navbar.navHomeItems.LOGO && (
            <Nav.Item as="li" className="logo" key={item.name}>
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
        item =>
          item.name === strings.navbar.navHomeItems.LOGO && (
            <Nav.Item as="li" className="logo" key={item.name}>
              <NavLink activeClassName="active" to={item.path} exact>
                {capitalize(item.name)}
              </NavLink>
            </Nav.Item>
          )
      )
    : type === strings.navbar.navType.LOGO_USER_LOGGED
    ? navUserLoggedItems.map(
        item =>
          item.name === strings.navbar.navHomeItems.LOGO && (
            <Nav.Item as="li" className="logo" key={item.name}>
              <NavLink activeClassName="active" to={item.path} exact>
                {capitalize(item.name)}
              </NavLink>
            </Nav.Item>
          )
      )
    : type === strings.navbar.navType.HOME_MENU
    ? navHomeItems.slice(1).map(item => (
        <Nav.Item as="li" key={item.name}>
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
    ? navGetStartedItems.map(item => (
        <Nav.Item as="li" key={item.name}>
          <NavLink activeClassName="active" to={item.path} exact>
            {capitalize(item.name)}
          </NavLink>
        </Nav.Item>
      ))
    : type === strings.navbar.navType.USER_LOGGED_MENU
    ? navUserLoggedItems.slice(1).map(item =>
        item.name === strings.navbar.navUserLoggedItems.SIGNOUT ? (
          !loading ? (
            <Nav.Item as="li" key={item.name}>
              <NavLink
                onClick={e => {
                  e.preventDefault();
                  dispatch(logoutUser(userData.email));
                }}
                to={item.path}
                exact
              >
                {capitalize(item.name)}
              </NavLink>
            </Nav.Item>
          ) : (
            <div className="signout-loading" key={item.name}>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <Nav.Item as="li">
                <NavLink
                  onClick={e => {
                    e.preventDefault();
                    dispatch(logoutUser(userData.email));
                  }}
                  className="signout-loading-text"
                  to={item.path}
                  exact
                >
                  {capitalizeFirst(strings.logout.LOGOUT)}
                </NavLink>
              </Nav.Item>
            </div>
          )
        ) : (
          <Nav.Item as="li" key={item.name}>
            <NavLink activeClassName="active" to={item.path} exact>
              {capitalize(item.name)}
            </NavLink>
          </Nav.Item>
        )
      )
    : null;
};

export default MakeNavMenu;
