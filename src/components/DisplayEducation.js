import React, { useState, useEffect } from 'react';

export default function DisplayEducation(props) {
  const [schoolName, setSchoolName] = useState(props.schoolName);
  const [field, setField] = useState(props.field);
  const [dates, setDates] = useState(props.dates);

  useEffect(() => {
    setSchoolName(props.schoolName);
  }, [props.schoolName]);

  useEffect(() => {
    setField(props.field);
  }, [props.field]);

  useEffect(() => {
    setDates(props.dates);
  }, [props.dates]);

  return (
    <div className="displayActualResults">
      <span>School: {schoolName}</span>
      <br />
      <span>Field: {field}</span>
      <br />
      <span>Dates: {dates}</span>
      <br />
    </div>
  );
}
