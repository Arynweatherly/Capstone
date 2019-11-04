import React, {Component} from 'react'
import NoteManager from '../../modules/NotebookManager'
import Field from "../forms/field";
import {withRouter} from 'react-router-dom'

class NoteModal extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    note: [],
    noteTitle: "",
    date: "",
    topics: "",
    instructor: "",
    content: "",
    notebookId: "",
    id: "",
    rating: ""
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  updateExistingNote = evt => {
    evt.preventDefault()
    const editedNote = {
      title: this.state.title,
      date: this.state.date,
      topics: this.state.topics,
      instructor: this.state.instructor,
      content: this.state.content,
      notebookId: this.state.notebookId,
      id: this.props.note.id,
      rating: this.props.note.rating
    }
    console.log(editedNote)

    NoteManager.update(editedNote)
      .then(this.props.updateNote(editedNote))
      .then(() => this.props.history.push(`/notes/${this.props.note.id}`))
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // all states are undefined or empty
    console.log(this.state)
  }

  componentDidMount() {
    // this is returning an empty array
    console.log(this.props.note)

    this.setState({
      note: this.props.note,
      title: this.props.note.title,
      date: this.props.note.date,
      topics: this.props.note.topics,
      instructor: this.props.note.instructor,
      content: this.props.note.content,
      notebookId: this.props.note.notebookId,
      rating: this.props.note.rating
    })
  }

  render() {
    return (
      <div className={this.props.editMode === true ? 'modal is-active' : 'modal'}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Edit Notes for {this.props.note.title}</p>
            <button className="delete" aria-label="close" onClick={() => this.props.toggleEdit()}></button>
          </header>
          <section className="modal-card-body">
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
          <footer className="modal-card-foot">
            <div className="field is-grouped is-grouped-right">
              <p className="control">
                <a className="button is-danger" onClick={() => this.props.toggleEdit()}>Cancel</a>
              </p>
              <p className="control">
                <a className="button is-success" onClick={this.updateExistingNote}>Save changes</a>
              </p>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default withRouter(NoteModal)