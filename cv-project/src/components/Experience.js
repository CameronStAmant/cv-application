import React, { useState } from 'react';
import DisplayExperience from './DisplayExperience';

export default function Experience() {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [mainTasks, setMainTasks] = useState('');
  const [dates, setDates] = useState('');
  const [status, setStatus] = useState('Submit');

  const companyHandler = (company) => {
    setCompany(company.target.value);
  };

  const positionHandler = (position) => {
    setPosition(position.target.value);
  };

  const mainTasksHandler = (mainTasks) => {
    setMainTasks(mainTasks.target.value);
  };

  const datesHandler = (dates) => {
    setDates(dates.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hideForms = document.getElementsByClassName('form');
    const displayActualResults = document.getElementsByClassName(
      'displayActualResults'
    );
    const displayEditButton = document.getElementById('edit');
    if (status === 'Submit') {
      for (let i = 0; i < hideForms.length; i++) {
        hideForms[i].style.display = 'none';
        displayActualResults[i].style.display = 'inline';
      }
      displayEditButton.style.display = 'inline';
      setStatus('Edit');
    } else {
      for (let i = 0; i < hideForms.length; i++) {
        displayActualResults[i].style.display = 'none';
        hideForms[i].style.display = 'inline';
      }
      displayEditButton.style.display = 'none';
      setStatus('Submit');
    }
  };

  return (
    <div>
      <h3>Experience</h3>
      <form id="general" className="form" onSubmit={handleSubmit}>
        <label>Company: </label>
        <input
          type="text"
          name="company"
          value={company}
          onChange={companyHandler}
          className="input"
        />
        <br />
        <label>Position: </label>
        <input
          type="text"
          name="position"
          value={position}
          onChange={positionHandler}
          className="input"
        />
        <br />
        <label>Main Tasks: </label>
        <input
          type="text"
          name="mainTasks"
          value={mainTasks}
          onChange={mainTasksHandler}
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
        <br />
        <input type="submit" id="submit" value={status} />
      </form>
      <DisplayExperience
        company={company}
        position={position}
        mainTasks={mainTasks}
        dates={dates}
      />
      <br />
      <button value="Edit" id="edit" onClick={handleSubmit}>
        Edit
      </button>
    </div>
  );
}
