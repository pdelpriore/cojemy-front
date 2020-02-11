import React from "react";
import { capitalize } from "../../util/Util";
import { Nav, Row, Col } from "react-bootstrap";
import "./navbar.css";

const navItems = [
  { name: "quoi manger ?" },
  { name: "à propos" },
  { name: "contact" },
  { name: "se connecter" },
  { name: "s'inscrire" }
];

const Navbar = () => {
  const menu = navItems.map(item => (
    <Nav.Item as="li" key={item.name}>
      {capitalize(item.name)}
    </Nav.Item>
  ));
  return (
    <Row>
      <Col md={12}>
        <Nav fill as="ul">
          {menu}
        </Nav>
      </Col>
    </Row>
  );
};

export default Navbar;
