import React, { useState, useEffect } from 'react';

export default function DisplayGeneral(props) {
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber);

  useEffect(() => {
    setName(props.name);
  }, [props.name]);

  useEffect(() => {
    setEmail(props.email);
  }, [props.email]);

  useEffect(() => {
    setPhoneNumber(props.phoneNumber);
  }, [props.phoneNumber]);

  return (
    <div className="displayActualResults">
      <span>Name: {name}</span>
      <br />
      <span>Email: {email}</span>
      <br />
      <span>Phone Number: {phoneNumber}</span>
    </div>
  );
}
