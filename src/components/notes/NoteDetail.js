import React, {Component} from 'react'
import NoteManager from '../../modules/NoteManager'
import NoteModal from './NoteModal'
import './Note.css'

class NoteDetail extends Component {
  constructor(props) {
    super(props)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.updateNote = this.updateNote.bind(this)

    this.state = {
      note: {},
      id: "",
      title: "",
      date: "",
      topics: "",
      instructor: "",
      content: "",
      notebookId: "",
      rating: "",
      editMode: false,
      isLoaded: false
    }
  }

  componentDidMount() {
    NoteManager.get(this.props.match.params.notebookId)
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
          rating: note.rating,
          isLoaded: true
        })
      })
  }

  deleteNote = id => {
    NoteManager.delete(id)
      .then(() => {
        this.props.history.push(`/notebooks/${this.state.note.notebookId}`)
      })
  }

  toggleEdit() {
    this.setState({editMode: false})
  }

  updateNote(editedNote) {
    NoteManager.update(editedNote)
    this.setState({
      note: editedNote,
      editMode: false
    })
  }

  render() {
    return (
      <>
        <div className="note card">
          <header className="card-header">
            <p className="card-header-title">{this.state.note.title} (added on {this.state.note.date})</p>
          </header>
          <div className="card-content">
            <div className="content">
              <p>Topics: <span className="tag">{this.state.note.topics}</span></p>
              <p>Instructor: {this.state.note.instructor}</p>
              <p>Content: {this.state.note.content}</p>
            </div>
          </div>
          <footer className="card-footer">
            <a href="#" className="button is-danger card-footer-item" onClick={() => this.deleteNote(this.state.note.id)}>Delete</a>
            <a href="#" className="button is-success card-footer-item" onClick={() => this.setState({editMode: true})}>Edit</a>
          </footer>
        </div>
        {this.state.isLoaded &&
        <NoteModal editMode={this.state.editMode}
                   toggleEdit={this.toggleEdit}
                   updateNote={this.updateNote}
                   note={this.state.note}
                   noteId={this.state.id}
        />
        }
      </>
    )
  }
}

export default NoteDetail;