import React from 'react';

export default class DisplayEducation extends React.Component {
  render() {
    return (
      <div className="displayActualResults">
        <span>School: {this.props.schoolName}</span>
        <br />
        <span>Field: {this.props.field}</span>
        <br />
        <span>Dates: {this.props.dates}</span>
        <br />
      </div>
    );
  }
}
