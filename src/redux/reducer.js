import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {addContatcReguest, addContactSuccess, addContactError, deleteContact, changleFilter } from './contact-action';




const contactsReduser = createReducer([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
], {

    [addContactSuccess]: (state, { payload }) => [...state, payload],

    [deleteContact]: (state, { payload }) =>
        state.filter(({ id }) =>     id !== payload)
}
)


const loadingReduser = createReducer(false, {
    [addContatcReguest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false
})

 
const filterReduser = createReducer('', {
    [changleFilter]: (_, {payload}) => payload
})



export default combineReducers({
    contacts: contactsReduser, //описывается объект state за свойство контакт отвечает contacts
    filter: filterReduser,
    loading: loadingReduser
})