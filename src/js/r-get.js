const BASE_URL = 'http://localhost:4040'


function fetchContact() {
    return fetch(`${BASE_URL}/contacts`)
        .then(res => res.json())
        .then(console.log)
};

function fetchContactId(contactId) {
    return fetch(`${BASE_URL}/contacts/${contactId}`).then(res => res.json())
}