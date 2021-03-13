import axios from 'axios';
import * as actions from './contact-action';

axios.defaults.baseURL = ' http://localhost:4040';

export const fetchContact = () => dispatch => {
    dispatch(actions.fetchContatcReguest());

    axios.get('/contacts')
        .then(({ data }) => dispatch(actions.fetchContatcReguest(data)))
        .catch(error => dispatch(actions.fetchContactError(error)))
}



export const addContact = ({ name, number} ) => dispatch => {
    const contact = {
        name,
        number,
    };

    dispatch(actions.addContatcReguest());

    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(actions.addContactSuccess(data)))
        .catch(error => dispatch(actions.addContactError(error)))
}

export const deleteContact = contactId => dispatch => {
    dispatch(actions.deleteContactReguest())

    axios.delete(`/contacts/${contactId}`)
        .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch(error => dispatch(actions.deleteContactError(error)))

}