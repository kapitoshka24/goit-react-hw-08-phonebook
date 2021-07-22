import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";
import { contactsOperations } from "../../redux/contacts";
import Navigation from "./Navigation";

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

const mapDispatchToProps = {
  fetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
