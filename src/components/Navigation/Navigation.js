import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/auth-nav.scss";

class Navigation extends Component {
  handleClick = () => {
    this.props.fetchContacts();
  };

  render() {
    const { isAuthenticated } = this.props;
    return (
      <nav>
        <NavLink to="/" exact className="link" activeClassName="activeLink">
          Home
        </NavLink>

        {isAuthenticated && (
          <>
            <NavLink
              to="/contacts-add"
              exact
              className="link"
              activeClassName="activeLink"
            >
              Add contacts
            </NavLink>
            <NavLink
              to="/contacts-list"
              exact
              className="link"
              activeClassName="activeLink"
              onClick={this.handleClick}
            >
              Phonebook
            </NavLink>
          </>
        )}
      </nav>
    );
  }
}

export default Navigation;
