import axios from 'axios';
import * as actions from './contact-action';

axios.defaults.baseURL = ' http://localhost:4040';

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

