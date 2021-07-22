import React from "react";
import "../../styles/avatar.scss";

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className="user-container">
    <img src={avatar} alt="" width="32" className="user-avatar" />
    <span className="user-name">Welcome, {name}</span>
    <button type="button" onClick={onLogout} className="logout-btn">
      Logout
    </button>
  </div>
);

export default UserMenu;
