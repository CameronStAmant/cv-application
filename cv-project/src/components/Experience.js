import React from 'react';
import DisplayExperience from './DisplayExperience';

export default class Experience extends React.Component {
  constructor() {
    super();
    this.state = {
      company: '',
      position: '',
      mainTasks: '',
      dates: '',
      status: 'Submit',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const hideForms = document.getElementsByClassName('form');
    const displayActualResults = document.getElementsByClassName(
      'displayActualResults'
    );
    const displayEditButton = document.getElementById('edit');
    if (this.state.status === 'Submit') {
      for (let i = 0; i < hideForms.length; i++) {
        hideForms[i].style.display = 'none';
        displayActualResults[i].style.display = 'inline';
      }
      displayEditButton.style.display = 'inline';
      this.setState({ status: 'Edit' });
    } else {
      for (let i = 0; i < hideForms.length; i++) {
        displayActualResults[i].style.display = 'none';
        hideForms[i].style.display = 'inline';
      }
      displayEditButton.style.display = 'none';
      this.setState({ status: 'Submit' });
    }
  }

  render() {
    return (
      <div>
        <h3>Experience</h3>
        <form id="general" className="form" onSubmit={this.handleSubmit}>
          <label>Company: </label>
          <input
            type="text"
            name="company"
            value={this.state.company}
            onChange={this.handleChange}
            className="input"
          />
          <br />
          <label>Position: </label>
          <input
            type="text"
            name="position"
            value={this.state.position}
            onChange={this.handleChange}
            className="input"
          />
          <br />
          <label>Main Tasks: </label>
          <input
            type="text"
            name="mainTasks"
            value={this.state.mainTasks}
            onChange={this.handleChange}
            className="input"
          />
          <br />
          <label>Dates: </label>
          <input
            type="text"
            name="dates"
            value={this.state.dates}
            onChange={this.handleChange}
            className="input"
          />
          <br />
          <br />
          <input type="submit" id="submit" value={this.state.status} />
        </form>
        <DisplayExperience
          company={this.state.company}
          position={this.state.position}
          mainTasks={this.state.mainTasks}
          dates={this.state.dates}
        />
        <br />
        <button value="Edit" id="edit" onClick={this.handleSubmit}>
          Edit
        </button>
      </div>
    );
  }
}
