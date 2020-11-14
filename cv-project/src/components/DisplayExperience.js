import React from 'react';

export default class DisplayExperience extends React.Component {
  render() {
    return (
      <div className="displayActualResults">
        <span>Company: {this.props.company}</span>
        <br />
        <span>Position: {this.props.position}</span>
        <br />
        <span>Main Tasks: {this.props.mainTasks}</span>
        <br />
        <span>Dates: {this.props.dates}</span>
        <br />
      </div>
    );
  }
}
