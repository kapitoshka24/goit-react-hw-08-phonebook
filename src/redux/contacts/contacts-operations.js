import axios from "axios";
import { contactsActions } from "./";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const fetchContacts = () => async (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const response = await axios.get("/contacts");
    dispatch(contactsActions.fetchContactsSuccess(response.data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

const addContact = (contact) => (dispatch) => {
  dispatch(contactsActions.addContactRequest());

  try {
    const response = axios.post("/contacts", contact);
    dispatch(contactsActions.addContactSuccess(response.data));
  } catch (error) {
    dispatch(contactsActions.addContactError(error));
  }
};

const deleteContact = (contactId) => (dispatch) => {
  dispatch(contactsActions.deleteContactRequest());

  try {
    axios.delete(`/contacts/${contactId}`);
    dispatch(contactsActions.deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error));
  }
};

export default {
  fetchContacts,
  addContact,
  deleteContact,
};
