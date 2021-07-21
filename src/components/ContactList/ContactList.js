import React, { Component } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { items, onDelete } = this.props;
    return (
      <ol>
        {items.map(({ id, name, number }) => (
          <li key={shortid.generate()}>
            {name}: {number}
            <button onClick={() => onDelete(id)}>Delete</button>
          </li>
        ))}
      </ol>
    );
  }
}

ContactList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
