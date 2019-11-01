import React, { Component } from 'react';

class DeadlineCard extends Component {
  render() {
    return (
      <div className="card-dealines">
        <div className="deadline-card-content">
          <h3>date: <span className="card-deadline">{this.props.deadline.date}</span></h3>
          <p>{this.props.deadline.title}</p>
          <button type="deadline-button" onClick={() => this.props.deleteDeadline(this.props.deadline.id)}>delete</button>
          <button type="deadline-button" onClick={() => {this.props.history.push(`/deadlines/${this.props.deadline.id}/edit`)}}>Edit</button>
        </div>
      </div>
    );
  }
}

export default DeadlineCard;