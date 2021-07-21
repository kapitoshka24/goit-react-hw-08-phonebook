import { connect } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts/";
import ContactList from "./ContactList";

const mapStateToProps = (state) => ({
  items: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = {
  onDelete: contactsOperations.deleteContact,
  fetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
