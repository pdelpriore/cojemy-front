import React from "react";
import { capitalize } from "../../util/Util";
import { Nav, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "./navbar.css";

//NavLink will be used for app navigation when user logged

const navItems = [
  { name: "quoi manger ?" },
  { name: "à propos" },
  { name: "contact" },
  { name: "se connecter", path: "/login" },
  { name: "s'inscrire", path: "/signup" }
];

const Navbar = () => {
  const menu = navItems.map(item => (
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
  return (
    <Row className="navbar">
      <Col xs>
        <Nav fill as="ul">
          {menu}
        </Nav>
      </Col>
    </Row>
  );
};

export default Navbar;
