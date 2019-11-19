import React, { Component } from "react";
import TaskManager from "../../modules/TaskManager";
import "./TaskForm.css";

class TaskEditForm extends Component {
  //set the initial state
  state = {
    taskName: "",
    completed: false,
    date: "",
    loadingStatus: false,
    userId: parseInt(this.props.activeUser)
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };
  handleClick = evt => {
    if (this.state.completed) {
      this.setState({ completed: false });
    } else {
      this.setState({ completed: true });
    }
  };
  updateExistingTask = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedTask = {
      id: this.props.match.params.taskId,
      taskName: this.state.taskName,
      completed: this.state.completed,
      date: this.state.date,
      userId: this.state.userId
    };

    TaskManager.update(editedTask).then(() =>
      this.props.history.push("/tasks")
    );
  };

  componentDidMount() {
    TaskManager.get(this.props.match.params.taskId).then(task => {
      console.log(task);
      this.setState({
        taskName: task.taskName,
        completed: task.completed,
        date: task.date,
        loadingStatus: false
      });
    });
  }

  render() {
    console.log(this.state.completed);
    return (
      <>
        <div className="box container task">
          <section className="is-left">
            <p className="title is-4 task">Edit Task</p>
            {/* <img src={`../../images/signIn.svg`}/> */}
            <img className="noteImg" src={`/images/Group 4.png`} />
          </section>
          <form>
            <div className="field">
              <label htmlFor="title">Task</label>
              <div className="control">
                <input
                  type="text"
                  required=""
                  className="input"
                  onChange={this.handleFieldChange}
                  id="taskName"
                  value={this.state.taskName}
                  autoFocus=""
                />
              </div>
              <div className="field is-right">
                <label htmlFor="date">Completion Date</label>
                <div className="control">
                  <input
                    type="date"
                    required
                    className="input"
                    onChange={this.handleFieldChange}
                    id="date"
                    autoFocus=""
                    value={this.state.date}
                  />
                </div>
              </div>

              <div className="field is-right">
                <label className="label"></label>
                <div className="control">
                  <input
                    type="checkbox"
                    required
                    onClick={this.handleClick}
                    id="completed"
                    checked={this.state.completed === true ? "checked" : ""}
                    value={this.state.completed}
                  />
                </div>
              </div>

              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingTask}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default TaskEditForm;
