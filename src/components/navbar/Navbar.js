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
  // options below will be used when user go to get started page
  //{ name: "se connecter", path: "/login" },
  //{ name: "s'inscrire", path: "/signup" }
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
  const homeMenu = navHomeItems.slice(1).map(item =>
    item.name === "s'inscrire" ? (
      <Nav.Item as="li" className="signup" key={item.name}>
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
    ) : (
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
            : null}
        </Nav>
      </Col>
    </Row>
  );
};

export default Navbar;
