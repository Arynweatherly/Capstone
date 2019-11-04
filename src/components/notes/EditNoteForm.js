import React, { Component } from "react"
import NoteManager from "../../modules/NoteManager"
import "../notebooks/NotebookForm.css"

class NoteEditForm extends Component {
    //set the initial state
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
        id: this.props.match.params.noteId,
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
      NoteManager.get(this.props.match.params.noteId)
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
        <>
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
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingNote}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default NoteEditForm