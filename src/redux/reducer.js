import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';


import * as action from './contact-action'


const contactsReduser = createReducer(
    // первый аргумент нач. знач.  + объект кейса: тип + его редюсер
    [],
    
    {
        addContactSuccess: (state, action) => [...state, action.payload],
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


