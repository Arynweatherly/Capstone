
import React, {Component} from 'react'
import NoteManager from '../../modules/NotebookManager'
import Field from "../forms/field";
import {withRouter} from 'react-router-dom'

class NoteModal extends Component {
constructor(props) {
  super(props)
  this.state = {
    note: {},
    id: "",
    title: "",
    date: "",
    topics: "",
    instructor: "",
    content: "",
    notebookId: "",
    rating: ""
  }
}

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  updateExistingNote = evt => {
    const editedNote = {
      title: this.state.title,
      date: this.state.date,
      topics: this.state.topics,
      instructor: this.state.instructor,
      content: this.state.content,
      notebookId: this.state.notebookId,
      id: this.state.id,
      rating: this.state.rating
    }
      this.props.updateNote(editedNote)
  }

  componentDidMount() {
    NoteManager.get(this.props.note.id)
      .then((note) => {
        this.setState({
          note: note,
          id: note.id,
          title: note.title,
          date: note.date,
          topics: note.topics,
          instructor: note.instructor,
          content: note.content,
          notebookId: note.notebookId,
          rating: note.rating
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
            <p className="modal-card-title">Edit Notes for {this.state.title}</p>
            <button className="delete" aria-label="close" onClick={() => this.props.toggleEdit()}></button>
          </header>
          <section className="modal-card-body">
            <Field label="Title">
              <input
                type="text"
                required
                className="input"
                onChange={this.handleFieldChange}
                id="title"
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