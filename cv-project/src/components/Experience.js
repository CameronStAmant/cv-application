import React from 'react';

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
    const hideInput = document.getElementsByClassName('input');
    const showResults = document.getElementsByClassName('results');
    if (this.state.status === 'Submit') {
      for (let i = 0; i < hideInput.length; i++) {
        hideInput[i].style.display = 'none';
        showResults[i].style.display = 'inline';
      }
      this.setState({ status: 'Edit' });
    } else {
      for (let i = 0; i < hideInput.length; i++) {
        hideInput[i].style.display = 'inline';
        showResults[i].style.display = 'none';
      }
      this.setState({ status: 'Submit' });
    }
  }

  render() {
    return (
      <div>
        <h3>Experience</h3>
        <form id="general" onSubmit={this.handleSubmit}>
          <label>Company: </label>
          <input
            type="text"
            name="company"
            value={this.state.company}
            onChange={this.handleChange}
            className="input"
          />
          <p className="results">{this.state.company}</p>
          <br />
          <label>Position: </label>
          <input
            type="text"
            name="position"
            value={this.state.position}
            onChange={this.handleChange}
            className="input"
          />
          <p className="results">{this.state.position}</p>
          <br />
          <label>Main Tasks: </label>
          <input
            type="text"
            name="mainTasks"
            value={this.state.mainTasks}
            onChange={this.handleChange}
            className="input"
          />
          <p className="results">{this.state.mainTasks}</p>
          <br />
          <label>Dates: </label>
          <input
            type="text"
            name="dates"
            value={this.state.dates}
            onChange={this.handleChange}
            className="input"
          />
          <p className="results">{this.state.dates}</p>
          <br />
          <br />
          <input type="submit" id="submit" value={this.state.status} />
        </form>
      </div>
    );
  }
}
