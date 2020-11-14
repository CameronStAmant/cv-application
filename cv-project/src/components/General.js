import React from 'react';

export default class General extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
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
        <h3>General Information</h3>
        <form id="general">
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            className="input"
          />
          <span class="error"></span>
          <p className="results">{this.state.name}</p>
          <br />
          <label>Email: </label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            className="input"
          />
          <p className="results">{this.state.email}</p>
          <br />
          <label>Phone Number: </label>
          <input
            type="text"
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
            className="input"
          />
          <p className="results">{this.state.phoneNumber}</p>
          <br />
        </form>
      </div>
    );
  }
}
