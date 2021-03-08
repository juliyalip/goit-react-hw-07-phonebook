import {createAction} from '@reduxjs/toolkit';
import shortid from "shortid";




export const addContact = createAction('contact/add', ({ name, number }) => {
    return {
        payload: {
            id: shortid.generate(),
            name,
            number
    }}
})

export const deleteContact = createAction('contact/delete')

export const changleFilter = createAction('contact/changeFilter')

//export const addContact = ({ name, number }) => ({
//    type: types.ADD,
 //   payload: {
 //       id: shortid.generate(),
 //       name,
 //       number

//    } });



//export const changleFilter = name => ({
//    type: types.CHANGE_FILTER,
  //  payload: name
//})



//export const deleteContact = contactId => ({
//    type: types.DELETE,
//    payload: contactId
//});


