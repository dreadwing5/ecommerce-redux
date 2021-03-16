import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { logout } from "../actions/auth";
import {
  faSearch,
  faHome,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const guestLinks = [
  {
    route: "/home",
    icon: faHome,
    label: "Home",
  },
  {
    route: "/search",
    icon: faSearch,
    label: "Search",
  },
  {
    route: "/login",
    icon: faUserCircle,
    label: "Login",
  },
];
const authLinks = [
  {
    route: "/home",
    label: "Home",
    icon: faHome,
  },
  {
    route: "/search",
    label: "Search",
    icon: faSearch,
  },
  {
    route: "/logout",
    label: "Logout",
    icon: faUserCircle,
  },
];

const Navigation = (props) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  const navLinks = isAuthenticated ? authLinks : guestLinks;

  return (
    <div>
      {/* Top Bar */}
      <nav
        className="navbar navbar-expand-md navbar-light sticky-top d-none d-lg-block"
        role="navigation"
      >
        <div className="container-fluid">
          <a href="/home" className="navbar-brand">
            Brand
          </a>
          <Nav className="ml-auto">
            {navLinks.map((link, index) => (
              <NavItem key={`link-${index}`}>
                <NavLink to={link.route} className="nav-link">
                  {link.label}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </div>
      </nav>

      {/* Bottom Tab Navigation */}
      <nav
        className="navbar fixed-bottom navbar-light bottom-link-nav d-block d-lg-none"
        role="navigation"
      >
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {navLinks.map((link, index) => (
              <NavItem key={`link-${index}`}>
                <NavLink
                  to={link.route}
                  className="nav-link bottom-nav-link"
                  activeClassName="active"
                >
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon size="lg" icon={link.icon} />
                    <div className="bottom-tab-label">{link.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))}
          </div>
        </Nav>
      </nav>
    </div>
  );
};

export default Navigation;
