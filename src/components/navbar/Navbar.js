import React from "react";
import { Nav, Row, Col } from "react-bootstrap";
import { strings } from "../../strings/Strings";
import { makeNavMenu } from "./makeNavMenu";
import "./navbar.css";

//NavLink will be used for app navigation when user logged (another menu)

const Navbar = ({ path, url, isExact }) => {
  return (
    <Row className="navbar">
      <Col xs={7}>
        <Nav fill as="ul">
          {path === strings.path.HOME && url === strings.path.HOME && isExact
            ? makeNavMenu(strings.navbar.navType.LOGO)
            : (path === strings.path.LOGIN &&
                url === strings.path.LOGIN &&
                isExact) ||
              (path === strings.path.SIGNUP &&
                url === strings.path.SIGNUP &&
                isExact)
            ? makeNavMenu(strings.navbar.navType.LOGO_GET_STARTED)
            : null}
        </Nav>
      </Col>
      <Col xs={5}>
        <Nav fill as="ul">
          {path === strings.path.HOME && url === strings.path.HOME && isExact
            ? makeNavMenu(strings.navbar.navType.HOME_MENU)
            : (path === strings.path.LOGIN &&
                url === strings.path.LOGIN &&
                isExact) ||
              (path === strings.path.SIGNUP &&
                url === strings.path.SIGNUP &&
                isExact)
            ? makeNavMenu(strings.navbar.navType.GET_STARTED_MENU)
            : null}
        </Nav>
      </Col>
    </Row>
  );
};

export default Navbar;
