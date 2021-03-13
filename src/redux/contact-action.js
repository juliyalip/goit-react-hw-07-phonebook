import { createAction } from '@reduxjs/toolkit';


export const fetchContatcReguest = createAction('contact/fetchContactRequest');
export const fetchContactSuccess = createAction('contact/fetchContactSuccess');
export const fetchContactError = createAction('contact/fetchContactError');


export const addContatcReguest = createAction('contact/addContactRequest');
export const addContactSuccess = createAction('contact/addContactSuccess');
export const addContactError = createAction('contact/addContactError');

export const deleteContactReguest = createAction('contact/deleteContactRequest');
export const deleteContactSuccess = createAction('contact/deleteContactSuccess');
export const deleteContactError = createAction('contact/deleteContactError');




// export const deleteContact = createAction('contact/delete')

export const changleFilter = createAction('contact/changeFilter')


