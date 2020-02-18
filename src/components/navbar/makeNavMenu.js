import React from "react";
import { capitalize } from "../../util/Util";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { strings } from "../../strings/Strings";
import "./navbar.css";

const navHomeItems = [
  { name: strings.navbar.navHomeItems.LOGO },
  { name: strings.navbar.navHomeItems.ABOUT },
  { name: strings.navbar.navHomeItems.CONTACT }
];

const navGetStartedItems = [
  { name: strings.navbar.navGetStartedItems.LOGIN, path: strings.path.LOGIN },
  { name: strings.navbar.navGetStartedItems.SIGNUP, path: strings.path.SIGNUP }
];

export const makeNavMenu = type => {
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
    ? navGetStartedItems.map(item =>
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
      )
    : null;
};
