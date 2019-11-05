import React, {Component} from 'react'
import TaskManager from '../../modules/TaskManager'
import Field from "../forms/field";
import {withRouter} from 'react-router-dom'

class TaskModal extends Component {
constructor(props) {
  super(props)
  this.state = {
    task: {},
    id: "",
    taskName: "",
    completed: false,
    date: "",
    loadingStatus: false,
    userId: parseInt(this.props.activeUser)

  }
}

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  updateExistingNote = evt => {
    const editedTask = {
      taskName: this.state.taskName,
      date: this.state.date,
      completed: this.state.completed,
      id: this.state.id,
      userId: this.state.userId
    }
    console.log(editedTask)
      this.props.updateNote(editedTask)
  }

  componentDidMount() {
    TaskManager.get(this.props.task.id)
      .then((task) => {
        console.log("note response", task)
        this.setState({
          task: task,
          id: task.id,
          taskName: task.taskName,
          date: task.date,
          completed: task.completed,
          userId: task.userId,
        })
      })
  }
  // grab the note id with match params
//fetch the note that you want
//populate state with the notes details
//set default value of fileds using state

  render() {
    return (
      <div className={this.props.editMode === true ? 'modal is-active' : 'modal'}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Edit Tasks for {this.state.title}</p>
            <button className="delete" aria-label="close" onClick={() => this.props.toggleEdit()}></button>
          </header>
          <section className="modal-card-body">
            <Field label="task">
              <input
                type="text"
                required
                className="input"
                onChange={this.handleFieldChange}
                id="taskName"
                defaultValue={this.props.task.taskName}
              />
            </Field>
            <Field label="Date">
              <input
                type="date"
                required
                className="input"
                onChange={this.handleFieldChange}
                id="date"
                defaultValue={this.props.task.date}
              />
            </Field>
            <Field label="Topic">
              <input
                type="checkbox"
                required
                className="input"
                onClick={this.handleClick}
                id="completed"
                checked={this.state.completed === true ? "checked" : ""}
                defaultValue={this.props.task.completed}
              />
            </Field>
          </section>
          <footer className="modal-card-foot">
            <div className="field is-grouped is-grouped-right">
              <p className="control">
                <a className="button is-danger" onClick={() => this.props.toggleEdit()}>Cancel</a>
              </p>
              <p className="control">
                <a className="button is-success" onClick={this.updateExistingTask}>Save changes</a>
              </p>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default withRouter(TaskModal)