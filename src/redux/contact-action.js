import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:4040'

export const addContact = ({ name, number }) => dispatch => {
    const contact = { name, number }
    
    dispatch({type: 'contact/addContactRequest'})

    axios
        .post('/contacts', contact)
        .then(({ data }) =>
            dispatch({ type: 'contact/addContactSuccess', payload: data })
        )
        .catch(error => dispatch({type: 'contact/addContactError', payload: error}))
}





export const deleteContact = createAction('contact/delete')

export const changleFilter = createAction('contact/changeFilter')





