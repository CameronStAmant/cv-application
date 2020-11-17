import React, { useState } from 'react';
import DisplayEducation from './DisplayEducation';

export default function Education() {
  const [schoolName, setSchoolName] = useState('');
  const [field, setField] = useState('');
  const [dates, setDates] = useState('');

  const schoolNameHandler = (schoolName) => {
    setSchoolName(schoolName.target.value);
  };

  const fieldHandler = (field) => {
    setField(field.target.value);
  };

  const datesHandler = (dates) => {
    setDates(dates.target.value);
  };

  return (
    <div>
      <h3>School Information</h3>
      <form id="general" className="form">
        <label>School: </label>
        <input
          type="text"
          name="schoolName"
          value={schoolName}
          onChange={schoolNameHandler}
          className="input"
        />
        <br />
        <label>Field: </label>
        <input
          type="text"
          name="field"
          value={field}
          onChange={fieldHandler}
          className="input"
        />
        <br />
        <label>Dates: </label>
        <input
          type="text"
          name="dates"
          value={dates}
          onChange={datesHandler}
          className="input"
        />
        <br />
      </form>
      <DisplayEducation schoolName={schoolName} field={field} dates={dates} />
    </div>
  );
}
