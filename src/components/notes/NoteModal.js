import React, {Component} from 'react'
import NoteManager from '../../modules/NotebookManager'
import Field from "../forms/field";
import {withRouter} from 'react-router-dom'

class NoteModal extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    noteTitle: "",
    date: "",
    topics: "",
    instructor: "",
    content: "",
    notebookId: "",
    loadingStatus: false,
    id: ""
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  updateExistingNote = evt => {
    evt.preventDefault()
    this.setState({loadingStatus: true})
    const editedNote = {
      id: this.props.note.id,
      title: this.state.noteTitle,
      date: this.state.date,
      topics: this.state.topics,
      instructor: this.state.instructor,
      content: this.state.content,
      notebookId: this.state.notebookId,
    }
    console.log(editedNote)
    NoteManager.update(editedNote)
      .then(() => this.props.toggleEdit())
      .then(() => this.props.history.push(`/notes/${this.props.note.id}`))
  }

  componentDidMount() {
    this.setState({noteTitle: this.props.note.title})
    this.setState({date: this.props.note.date})
    this.setState({topics: this.props.note.topics})
    this.setState({instructor: this.props.note.instructor})
    this.setState({content: this.props.note.content})
    this.setState({notebookId: this.props.note.notebookId})
  }

  render() {
    return (
      <div className={this.props.editMode === true ? 'modal is-active' : 'modal'}>
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Edit Notes for {this.props.note.title}</p>
            <button class="delete" aria-label="close" onClick={() => this.props.toggleEdit()}></button>
          </header>
          <section class="modal-card-body">
            <Field label="Title">
              <input
                type="text"
                required
                className="input"
                onChange={this.handleFieldChange}
                id="noteTitle"
                defaultValue={this.props.note.title}
              />
            </Field>
            <Field label="Date">
              <input
                type="date"
                required
                className="input"
                onChange={this.handleFieldChange}
                id="date"
                defaultValue={this.props.note.date}
              />
            </Field>
            <Field label="Topic">
              <input
                type="text"
                required
                className="input"
                onChange={this.handleFieldChange}
                id="topics"
                defaultValue={this.props.note.topics}
              />
            </Field>
            <Field label="Instructor">
              <input
                type="text"
                required
                className="input"
                onChange={this.handleFieldChange}
                id="instructor"
                defaultValue={this.props.note.instructor}
              />
            </Field>
            <Field label="Content">
              <textarea
                type="textarea"
                required
                className="textarea"
                onChange={this.handleFieldChange}
                id="content"
                defaultValue={this.props.note.content}
              ></textarea>
            </Field>
          </section>
          <footer class="modal-card-foot">
            <div className="field is-grouped is-grouped-right">
              <p className="control">
                <a className="button is-danger" onClick={() => this.props.toggleEdit()}>Cancel</a>
              </p>
              <p className="control">
                <a class="button is-success" onClick={this.updateExistingNote}>Save changes</a>
              </p>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default withRouter(NoteModal)