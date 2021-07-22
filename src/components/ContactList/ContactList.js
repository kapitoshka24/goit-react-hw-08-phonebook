import React from "react";
import shortid from "shortid";
import PropTypes from "prop-types";

const ContactList = ({ items, onDelete }) => (
  <ol>
    {items.map(({ id, name, number }) => (
      <li key={shortid.generate()}>
        {name}: {number}
        <button onClick={() => onDelete(id)}>Delete</button>
      </li>
    ))}
  </ol>
);

ContactList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
