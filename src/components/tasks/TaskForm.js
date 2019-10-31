import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import TaskManager from "../../modules/TaskManager";
import "./TaskForm.css"

 class TaskForm extends Component {
  state = {
    taskName: "",
    completed: false,
    date: "",
    loadingStatus: false,
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

constructNewTask = evt => {
    evt.preventDefault();
    if (this.state.taskName === "" ) {
      let sessionUserId = parseInt(this.props.activeUser);
        window.alert("Please input an animal name and breed");
    } else {
      let sessionUserId = parseInt(this.props.activeUser);
        this.setState({ loadingStatus: true });
        const task = {
            taskName: this.state.taskName,
            completed: this.state.completed,
            date:this.state.date,
            userId: sessionUserId
  

        };

        // Create the animal and redirect user to animal list
        TaskManager.post(task)
        .then(() => this.props.history.push("/tasks"));
    }
};

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <label className="taskName">Task::</label>
            <input
              type="text"
              placeholder="Enter Task Here"
              id="taskName"
              onChange={this.handleFieldChange}
            ></input>

            <label className="dateName">Completion Date:</label>
            <input
              type="date"
              required
              id="date"
              onChange={this.handleFieldChange}
              value={this.state.date}
            ></input>

            <label className="taskStatus">Status:</label>
            <input
              type="checkbox"
              id="completed"
              onChange={this.handleFieldChange}
            ></input>

          </fieldset>
          <button type="button"    disabled={this.state.loadingStatus} onClick={this.constructNewTask}>
            Save Task
          </button>
        </form>
      </div>
    );
  }
}

export default TaskForm; 