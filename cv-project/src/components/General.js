import React, { useState } from 'react';
import DisplayGeneral from './DisplayGeneral';

export default function General() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const nameHandler = (name) => {
    setName(name.target.value);
  };

  const emailHandler = (email) => {
    setEmail(email.target.value);
  };

  const phoneNumberHandler = (phoneNumber) => {
    setPhoneNumber(phoneNumber.target.value);
  };

  return (
    <div>
      <h3>General Information</h3>
      <form id="general" className="form">
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={nameHandler}
          className="input"
        />
        <br />
        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={emailHandler}
          className="input"
        />
        <br />
        <label>Phone Number: </label>
        <input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={phoneNumberHandler}
          className="input"
        />
        <br />
      </form>
      <DisplayGeneral name={name} email={email} phoneNumber={phoneNumber} />
    </div>
  );
}
