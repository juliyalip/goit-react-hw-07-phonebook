import shortid from "shortid";
import types from './contact-types'



export const addContact = ({ name, number }) => ({
    type: types.ADD,
    payload: {
        id: shortid.generate(),
        name,
        number

    }
});

export const deleteContact = contactId => ({
    type: types.DELETE,
    payload: contactId
});


export const changleFilter = name => ({
    type: types.CHANGE_FILTER,
    payload: name
})

export const chekUnigue = unicueName =>( {
  type: types.CHECK_UNIGUE,
    payload: unicueName
} )
