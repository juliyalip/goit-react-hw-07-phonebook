import {createAction} from '@reduxjs/toolkit';
import shortid from "shortid";
import types from './contact-types'




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





