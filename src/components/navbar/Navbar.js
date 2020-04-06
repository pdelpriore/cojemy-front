import React from "react";
import { Nav, Row, Col } from "react-bootstrap";
import { strings } from "../../strings/Strings";
import MakeNavMenu from "./makeNavMenu";
import "./navbar.css";

const Navbar = ({ path, url, isExact }) => {
  return (
    <Row className="navbar">
      <Col xs={6}>
        <Nav fill as="ul">
          {path === strings.path.HOME &&
          url === strings.path.HOME &&
          isExact ? (
            <MakeNavMenu type={strings.navbar.navType.LOGO} />
          ) : (path === strings.path.LOGIN &&
              url === strings.path.LOGIN &&
              isExact) ||
            (path === strings.path.SIGNUP &&
              url === strings.path.SIGNUP &&
              isExact) ? (
            <MakeNavMenu type={strings.navbar.navType.LOGO_GET_STARTED} />
          ) : (path === strings.path.RECIPE_BOOK &&
              url === strings.path.RECIPE_BOOK &&
              isExact) ||
            (path === strings.path.MY_RECIPES &&
              url === strings.path.MY_RECIPES &&
              isExact) ||
            (path === strings.path.MAILS &&
              url === strings.path.MAILS &&
              isExact) ||
            (path === strings.path.MY_EVENTS &&
              url === strings.path.MY_EVENTS &&
              isExact) ||
            (path === strings.path.MY_PROFILE &&
              url === strings.path.MY_PROFILE &&
              isExact) ? (
            <MakeNavMenu type={strings.navbar.navType.LOGO_USER_LOGGED} />
          ) : null}
        </Nav>
      </Col>
      <Col xs={6}>
        <Nav fill as="ul">
          {path === strings.path.HOME &&
          url === strings.path.HOME &&
          isExact ? (
            <MakeNavMenu type={strings.navbar.navType.HOME_MENU} />
          ) : (path === strings.path.LOGIN &&
              url === strings.path.LOGIN &&
              isExact) ||
            (path === strings.path.SIGNUP &&
              url === strings.path.SIGNUP &&
              isExact) ? (
            <MakeNavMenu type={strings.navbar.navType.GET_STARTED_MENU} />
          ) : (path === strings.path.RECIPE_BOOK &&
              url === strings.path.RECIPE_BOOK &&
              isExact) ||
            (path === strings.path.MY_RECIPES &&
              url === strings.path.MY_RECIPES &&
              isExact) ||
            (path === strings.path.MAILS &&
              url === strings.path.MAILS &&
              isExact) ||
            (path === strings.path.MY_EVENTS &&
              url === strings.path.MY_EVENTS &&
              isExact) ||
            (path === strings.path.MY_PROFILE &&
              url === strings.path.MY_PROFILE &&
              isExact) ? (
            <MakeNavMenu type={strings.navbar.navType.USER_LOGGED_MENU} />
          ) : null}
        </Nav>
      </Col>
    </Row>
  );
};

export default Navbar;
