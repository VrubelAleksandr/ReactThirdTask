import React from 'react'
import { useState } from 'react';
import Tablecontacts from "./components/Tablecontacts";
import Form from "./components/Form";
import useContacts from './components/useContacts';
import "./App.css"

function App() {
  const { contacts, setContacts, deleteUser, addContact } = useContacts();

  const [showForm, setShowForm] = useState('false');
  function handlertoggleForm() {
    setShowForm(!showForm);
  }

  function cancel() {
    handlertoggleForm();
  }



  return (
    <>
      <div>
        <h1 className='contact-title'>Contacts List</h1>
        <Tablecontacts contacts={contacts} onDelete={deleteUser}/>
      </div>
      <div>
        <h1>Form Contacts</h1>
        <button className='add-form' onClick={handlertoggleForm}>
          Add new contact
        </button>
        {!showForm ? <Form onaddContact={addContact} oncancel={cancel}/> : undefined}

      </div>

    </>
  )
}

export default App;