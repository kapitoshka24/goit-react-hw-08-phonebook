import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/auth-nav.scss";

const AuthNav = () => (
  <div>
    <NavLink to="/register" exact className="link" activeClassName="activeLink">
      Register
    </NavLink>
    <NavLink to="/login" exact className="link" activeClassName="activeLink">
      Login
    </NavLink>
  </div>
);

export default AuthNav;
