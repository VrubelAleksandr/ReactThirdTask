import { useState, useEffect } from 'react';


export default function useContacts() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(contacts => setContacts(contacts))
  }, [])

  function deleteUser(id) {
    fetch('https://jsonplaceholder.typicode.com/users' + id, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(() => {
        const newContacts = contacts.filter((item) => item.id !== id);
        setContacts(newContacts);
      })
  }

  function addContact(name, username, phone) {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: "POST",
      body: JSON.stringify({
        name,
        username,
        phone
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((contact) => {
        const newContacts = [...contacts, contact];
        setContacts(newContacts);
        console.log(newContacts);
      })
  }

  return {
    contacts,
    deleteUser,
    addContact
  }
}
