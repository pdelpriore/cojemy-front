import React from "react";
import { capitalize } from "../../util/Util";
import { Nav, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { strings } from "../../strings/Strings";
import "./navbar.css";

//NavLink will be used for app navigation when user logged (another menu)

const navHomeItems = [
  { name: strings.navbar.navHomeItems.LOGO },
  { name: strings.navbar.navHomeItems.ABOUT },
  { name: strings.navbar.navHomeItems.CONTACT }
];

const navGetStartedItems = [
  { name: strings.navbar.navGetStartedItems.LOGIN, path: strings.path.LOGIN },
  { name: strings.navbar.navGetStartedItems.SIGNUP, path: strings.path.SIGNUP }
];

const Navbar = ({ path, url, isExact }) => {
  const logo = navHomeItems.map(
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
  );
  const homeMenu = navHomeItems.slice(1).map(item => (
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
  ));

  const getStartedMenu = navGetStartedItems.map(item =>
    item.name === strings.navbar.navGetStartedItems.SIGNUP ? (
      <Nav.Item as="li" className="signup" key={item.name}>
        <NavLink activeClassName="active" to={item.path} exact>
          {capitalize(item.name)}
        </NavLink>
      </Nav.Item>
    ) : (
      <Nav.Item as="li" key={item.name}>
        <NavLink activeClassName="active" to={item.path} exact>
          {capitalize(item.name)}
        </NavLink>
      </Nav.Item>
    )
  );
  return (
    <Row className="navbar">
      <Col xs={7}>
        <Nav fill as="ul">
          {logo}
        </Nav>
      </Col>
      <Col xs={5}>
        <Nav fill as="ul">
          {path === strings.path.HOME && url === strings.path.HOME && isExact
            ? homeMenu
            : (path === strings.path.LOGIN &&
                url === strings.path.LOGIN &&
                isExact) ||
              (path === strings.path.SIGNUP &&
                url === strings.path.SIGNUP &&
                isExact)
            ? getStartedMenu
            : null}
        </Nav>
      </Col>
    </Row>
  );
};

export default Navbar;
