import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import types from './contact-types'

import * as action from './contact-action'


const contactsReduser = createReducer(
    // первый аргумент нач. знач.  + объект кейса: тип + его редюсер
    [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    
    {
        [action.addContact]: (state, action) => [...state, action.payload],
        [action.deleteContact]: (state, action) => state.filter(({id }) => id !== action.payload)
     
    }
)



const filterReduser = createReducer('', {
    [action.changleFilter]: (_, {payload}) => payload
})

 
export default combineReducers({
    contacts: contactsReduser, //описывается объект state за свойство контакт отвечает contacts
    filter: filterReduser
})


