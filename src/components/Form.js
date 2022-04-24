import React from 'react';
import { useState } from 'react';

export default function Form({ contacts, onaddContact, oncancel }) {

  const [item, setItem] = useState({
    name: '',
    username: '',
    phone: ''
  });

  function changeHandler(e) {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    })
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(item);
    onaddContact(item.name, item.username, item.phone);
    setItem({
      name: '',
      username: '',
      phone: ''
    })
    oncancel();
  }

  function cancel(e) {
    e.preventDefault();
    oncancel();
  }

  return (
    <form className='form-users'
      onSubmit={submitHandler}
    >
      <input
        type='text'
        placeholder='Name'
        name='name'
        onChange={changeHandler}
        value={item.name}
        key={1} />
      <input
        type='text'
        placeholder='Username'
        name='username'
        onChange={changeHandler}
        value={item.username}
        key={2} />
      <input
        type='tel'
        placeholder='Phone'
        name='phone'
        onChange={changeHandler}
        value={item.phone}
        key={3} />
      <button key={4} type="submit" className='btn'>Save contact</button>
      <button key={5} className='btn' onClick={cancel} >Cancel</button>
    </form>
  )
}
