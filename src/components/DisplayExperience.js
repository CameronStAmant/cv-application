import React, { useState, useEffect } from 'react';

export default function DisplayExperience(props) {
  const [company, setCompany] = useState(props.company);
  const [position, setPosition] = useState(props.position);
  const [mainTasks, setMainTasks] = useState(props.mainTasks);
  const [dates, setDates] = useState(props.dates);

  useEffect(() => {
    setCompany(props.company);
  }, [props.company]);

  useEffect(() => {
    setPosition(props.position);
  }, [props.position]);

  useEffect(() => {
    setMainTasks(props.mainTasks);
  }, [props.mainTasks]);

  useEffect(() => {
    setDates(props.dates);
  }, [props.dates]);

  return (
    <div className="displayActualResults">
      <span>Company: {company}</span>
      <br />
      <span>Position: {position}</span>
      <br />
      <span>Main Tasks: {mainTasks}</span>
      <br />
      <span>Dates: {dates}</span>
      <br />
    </div>
  );
}
