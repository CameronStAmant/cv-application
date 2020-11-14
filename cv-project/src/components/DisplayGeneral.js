import React from 'react';

export default class DisplayGeneral extends React.Component {
  render() {
    return (
      <div className="displayActualResults">
        <span>Name: {this.props.name}</span>
        <br />
        <span>Email: {this.props.email}</span>
        <br />
        <span>Phone Number: {this.props.phoneNumber}</span>
      </div>
    );
  }
}
