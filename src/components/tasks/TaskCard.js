import React, { Component } from 'react';
import "./Task.css"
import TaskManager from '../../modules/TaskManager'

class TaskCard extends Component {
markComplete = () => {
    TaskManager.get("task", this.props.task.id).then(task => {
        task.completed = true;
        });
      };
  render() {
    return (
      <div className="tile is-ancestor">
<div className= "tile is-vertical is-parent">
  <div className="tile is-child box task">
          <h3>Task: <span className="card-task">{this.props.task.taskName}</span></h3>
          <p>Date:<u> {this.props.task.date}</u></p>
          <p>
          {" "}
          Completed
          <input type="checkbox" onClick={this.markComplete}></input>
        </p>
        <hr />
          <button type="button" onClick={() => this.props.deleteTask(this.props.task.id)}>Delete</button>
          <button type="button" onClick={() => {this.props.history.push(`/tasks/${this.props.task.id}/edit`)}}>Edit</button>
        </div>
      </div>
      </div>
    );
  }
}

export default TaskCard;