import React, { Component } from "react"
import TaskManager from "../../modules/TaskManager"
import "./TaskForm.css"

class TaskEditForm extends Component {
    //set the initial state
    state = {
        taskName: "",
        completed: false,
        date: "",
        loadingStatus: false,
        userId: parseInt(sessionStorage.getItem("credentials"))
      };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }
    handleClick = evt => {
      if (this.state.completed)
        {this.setState({completed: false})}
      else
        {this.setState({completed: true})}

    }
    updateExistingTask = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedTask = {
        id: this.props.match.params.taskId,
        taskName: this.state.taskName,
        completed: this.state.completed,
        date: this.state.date,
        userId: this.state.userId
      };

      TaskManager.update(editedTask)
      .then(() => this.props.history.push("/tasks"))
    }

    componentDidMount() {
      TaskManager.get(this.props.match.params.taskId)
      .then(task => {
        console.log(task)
          this.setState({
            taskName: task.taskName,
            completed: task.completed,
            date: task.date,
            loadingStatus: false,
          });
      });
    }

    render() {
      console.log(this.state.completed)
        return (
          <>
            <form>
              <fieldset>
                <div>
                  <label htmlFor="title">Task</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="taskName"
                    value={this.state.taskName}
                  />

                  <label htmlFor="date">Completion Date</label>
                  <input
                    type="date"
                    required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="date"
                    value={this.state.date}
                  />

                  <label htmlFor="synopsis">Status</label>
                  <input
                    type="checkbox"
                    required
                    onClick={this.handleClick}
                    id="completed"
                    checked={this.state.completed === true ? "checked" : ""}
                    value={this.state.completed}
                  />
                </div>
                <div>
                  <button
                    type="button"
                    disabled={this.state.loadingStatus}
                    onClick={this.updateExistingTask}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </fieldset>
            </form>
          </>
        );
      }
    }

    export default TaskEditForm;