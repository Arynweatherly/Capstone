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
      };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingTask = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedTask = {
        id: this.props.match.params.taskId,
        taskName: this.state.taskName,
        completed: this.state.completed,
        date: this.state.date
      };

      TaskManager.update(editedTask)
      .then(() => this.props.history.push("/tasks"))
    }

    componentDidMount() {
      TaskManager.get(this.props.match.params.Id)
      .then(task => {
          this.setState({
            taskName: task.taskName,
            completed: task.completed,
            date: task.date,
            loadingStatus: false,
          });
      });
    }

    render() {
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
                    id="completionDate"
                    value={this.state.date}
                  />

                  <label htmlFor="synopsis">Status</label>
                  <input
                    type="checkbox"
                    required
                    onChange={this.handleFieldChange}
                    id="completed"
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