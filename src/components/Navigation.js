import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { authSelectors } from "../redux/auth";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#2A363B",
  },
  activeLink: {
    color: "#4caf50",
  },
};

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
      Home
    </NavLink>

    {/* {isAuthenticated && ( */}
    <NavLink
      to="/contacts-add"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Add contacts
    </NavLink>
    <NavLink
      to="/contacts-list"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Phonebook
    </NavLink>
    {/* )} */}
  </nav>
);

// const mapStateToProps = (state) => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Navigation);

export default Navigation;
