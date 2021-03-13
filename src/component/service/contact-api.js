import axios from 'axios';

axios.defaults.baseURL = ' http://localhost:4040';

const fetchContacts = () => {
    return axios.get('/contacts').then(response => response.data)
}

const addContact = contact => {
    return axios.post('/contacts', contact).then(({data}) => data)
}

const deleteContact = contactId => {
    return axios.delete(`/contacts/${contactId}`)
};





const contactAPI = { fetchContacts, addContact, deleteContact };

export default contactAPI