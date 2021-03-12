import { createAction } from '@reduxjs/toolkit';



export const addContatcReguest = createAction('contact/addContactRequest');
export const addContactSuccess = createAction('contact/addContactSuccess');
export const addContactError = createAction('contact/addContactError')



//export const addContact = createAction('contact/add', ({ name, number }) => ({
//    payload: {
//        id: shortid.generate(),
//        name, 
//        number
//    }
//   }) )


export const deleteContact = createAction('contact/delete')

export const changleFilter = createAction('contact/changeFilter')


