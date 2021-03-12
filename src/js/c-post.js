const BASE_URL = 'http://localhost:4040';


const newContact = {
    name: '',
    number: ''
};

const options = {
    method: 'POST',
    headers: {
        "Content-Type": "aplication/json",
    },
    body: JSON.stringify(newContact)
}



function addContact(contact) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json',
        },
        body: JSON.stringify(contact)
    };
    return fetch((`${BASE_URL}/contacts`), options).then(res => res.json())
}