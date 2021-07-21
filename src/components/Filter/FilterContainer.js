import { connect } from "react-redux";
import { contactsSelectors, contactsActions } from "../../redux/contacts/";
import Filter from "./Filter";

const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
