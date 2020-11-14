import React from 'react';

export default class General extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
    };
    const hideInput = document.getElementsByClassName('input');
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.hideInput.style.display = 'none';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            class="input"
          />
          <p>{this.state.name}</p>
          <br />
          <label>Email: </label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            class="input"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
