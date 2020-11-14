import React from 'react';
import DisplayEducation from './DisplayEducation';

export default class Education extends React.Component {
  constructor() {
    super();
    this.state = {
      schoolName: '',
      field: '',
      dates: '',
      status: 'Submit',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <h3>School Information</h3>
        <form id="general" className="form">
          <label>School: </label>
          <input
            type="text"
            name="schoolName"
            value={this.state.schoolName}
            onChange={this.handleChange}
            className="input"
          />
          <p className="results">{this.state.schoolName}</p>
          <br />
          <label>Field: </label>
          <input
            type="text"
            name="field"
            value={this.state.field}
            onChange={this.handleChange}
            className="input"
          />
          <p className="results">{this.state.field}</p>
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
        </form>
        <DisplayEducation
          schoolName={this.state.schoolName}
          field={this.state.field}
          dates={this.state.dates}
        />
      </div>
    );
  }
}
