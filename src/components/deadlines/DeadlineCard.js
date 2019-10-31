import React, { Component } from 'react';

class DeadlineCard extends Component {
  render() {
    return (
      <div className="deadline card">
      <div className="card-content">
        <p className="title is-5">
          {this.props.deadline.title}
        </p>
        <p className="subtitle is-8">
          Date: <strong>{this.props.deadline.date}</strong>
        </p>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <span>
            <a onClick={() => this.props.deleteDeadline(this.props.deadline.id)}>Delete</a>
          </span>
        </p>
        <p className="card-footer-item">
    <span>
      <a onClick={() => {this.props.history.push("/deadlines/${this.props.deadline.id}/edit")}}>Edit</a>
    </span>
        </p>
      </footer>
    </div>
  )
}
}

export default DeadlineCard;