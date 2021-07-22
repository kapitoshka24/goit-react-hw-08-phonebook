import React, { Component } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import { existedContactError } from "../../ulits/pnotify";

class ContactForm extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
      .isRequired,
    onAdd: PropTypes.func.isRequired,
  };

  state = {
    id: "",
    name: "",
    number: "",
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = (evt) => {
    const { name, value } = evt.target;

    this.setState({
      [name]: value,
    });
  };

  findByName = (contactName) => {
    return this.props.contacts.some(({ name }) => name === contactName);
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { name, number } = this.state;

    if (this.findByName(name)) {
      existedContactError(name, number);
      return;
    }

    this.props.onAdd(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            id={this.nameInputId}
            autoComplete="off"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            onChange={this.handleChange}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            id={this.numberInputId}
            autoComplete="off"
            required
          />
        </label>
        <button>Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
