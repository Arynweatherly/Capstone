import React, { Component } from 'react'
import NoteManager from '../../modules/NotebookManager'

class NoteModal extends Component {
  state = {
    noteTitle: "",
    date: "",
    topics: "",
    instructor: "",
    content: "",
    notebookId: "",
    loadingStatus: true,
    id: ""
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
      id: this.props.noteId,
      title: this.state.noteTitle,
      date: this.state.date,
      topics: this.state.topics,
      instructor: this.state.instructor,
      content: this.state.content,
      notebookId: this.state.notebookId,
    };

    NoteManager.update(editedNote)
    .then(() => this.props.history.push(`/notes/${this.state.id}`))
  }

  componentDidMount() {
    NoteManager.get(this.props.noteId)
    .then(note => {
        this.setState({
          noteTitle: note.title,
          date: note.date,
          topics: note.topics,
          instructor: note.instructor,
          content: note.content,
          notebookId: note.notebookId,
          loadingStatus: false,
          id: note.id
        });
    });
  }
  render() {
        return (

<div className={this.props.editMode === true ? 'modal is-active' : 'modal'}>
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Edit Notes</p>
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
                value={this.state.noteTitle}
              />
              <label htmlFor="noteTitle">Title</label>

              <input
                type="date"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="date"
                value={this.state.date}
              />
              <label htmlFor="date">Date</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="topics"
                value={this.state.topics}
              />
              <label htmlFor="topics">Topics</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="instructor"
                value={this.state.instructor}
              />
              <label htmlFor="instructor">Instructor</label>

              <textarea
                type="textarea"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="content"
                value={this.state.content}
              ></textarea>
              <label htmlFor="content"></label>


            </div>
    
          </fieldset>
        </form>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" onClick={this.updateExistingNote}>Save changes</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>

        )
}
}
export default NoteModal