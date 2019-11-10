import React, { Component } from 'react';

class DeadlineCard extends Component {
  render() {
    return (
      <div class="box deadline-card">
        <div className="deadline-card-content">
          <h3>date: <span className="card-deadline"><u>{this.props.deadline.date}</u></span></h3>
          <div className="content">{this.props.deadline.title}</div>
          <footer class="card-footer">
          <button type="deadline-button" onClick={() => this.props.deleteDeadline(this.props.deadline.id)}>delete</button>
          <button type="deadline-button" onClick={() => {this.props.history.push(`/deadlines/${this.props.deadline.id}/edit`)}}>Edit</button>
          </footer>
        </div>
        </div>
    );
  }
}

export default DeadlineCard;