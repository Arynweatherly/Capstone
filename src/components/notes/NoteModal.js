import React, { Component } from 'react'
import NoteManager from '../../modules/NotebookManager'
import {withRouter} from 'react-router-dom'
class NoteModal extends Component {
  constructor(props){
    super(props)
  }
  state = {
    noteTitle: "",
    date: "",
    topics: "",
    instructor: "",
    content: "",
    notebookId: "",
    loadingStatus: true,
    id: this.props.note.id
  };
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  updateExistingNote = evt => {
    evt.preventDefault()
    this.setState({ loadingStatus: true });
    const editedNote = {
      id: this.props.note.id,
      title: this.props.note.title,
      date: this.state.date,
      topics: this.state.topics,
      instructor: this.state.instructor,
      content: this.state.content,
      notebookId: this.state.notebookId,
    };
    console.log(editedNote)
    NoteManager.update(editedNote)
    .then(() => this.props.toggleEdit())
    .then(() => this.props.history.push(`/notes/${this.props.note.id}`))
  }

  render() {
        return (

<div className={this.props.editMode === true ? 'modal is-active' : 'modal'}>
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Edit Notes {this.props.note.title}</p>
      <button class="delete" aria-label="close" onClick={() => this.props.toggleEdit}></button>
    </header>
    <section class="modal-card-body">
    <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="noteTitle"
                defaultValue={this.props.note.title}
              />
              <label htmlFor="noteTitle">Title</label>

              <input
                type="date"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="date"
                defaultValue={this.props.note.date}
              />
              <label htmlFor="date">Date</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="topics"
                defaultValue={this.props.note.topics}
              />
              <label htmlFor="topics">Topics</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="instructor"
                defaultValue={this.props.note.instructor}
              />
              <label htmlFor="instructor">Instructor</label>

              <textarea
                type="textarea"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="content"
                defaultValue={this.props.note.content}
              ></textarea>
              <label htmlFor="content"></label>
            </div>
          </fieldset>
        </form>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" onClick={this.updateExistingNote}>Save changes</button>
      <button class="button" onClick={() => this.props.toggleEdit}>Cancel</button>
    </footer>
  </div>
</div>

        )
}
}
export default withRouter(NoteModal)