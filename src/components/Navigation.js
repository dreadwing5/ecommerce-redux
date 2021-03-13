import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const tabs = [
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

const Navigation = (props) => {
  return (
    <div>
      {/* Top Bar */}
      <nav
        className="navbar navbar-expand-md navbar-light sticky-top d-none d-lg-block"
        role="navigation"
      >
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Brand
          </a>
          <Nav className="ml-auto">
            <NavItem>
              <NavLink to="/search" exact className="nav-link">
                Search
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </nav>

      {/* Bottom Tab Navigation */}
      <nav
        className="navbar fixed-bottom navbar-light bottom-tab-nav d-block d-lg-none"
        role="navigation"
      >
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {tabs.map((tab, index) => (
              <NavItem key={`tab-${index}`}>
                <NavLink
                  to={tab.route}
                  className="nav-link bottom-nav-link"
                  activeClassName="active"
                >
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon size="lg" icon={tab.icon} />
                    <div className="bottom-tab-label">{tab.label}</div>
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
