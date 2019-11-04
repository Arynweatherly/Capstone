import React, {Component} from 'react'
import NoteManager from '../../modules/NoteManager'
import NoteModal from './NoteModal'

class NoteDetail extends Component {
  constructor(props) {
    super(props)
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  state = {
    note: [],
    title: "",
    date: "",
    notebookId: "",
    topics: "",
    instructor: "",
    content: "",
    loadingStatus: true,
    id: "",
    editMode: false
  }

  componentDidMount() {
    NoteManager.get(this.props.match.params.notebookId)
      .then((note) => {
        this.setState({
          note: note,
          title: note.title,
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

  deleteNote = id => {
    NoteManager.delete(id)
      .then(() => {
        this.props.history.push(`/notebooks/${this.state.notebookId}`)
      })
  }

  toggleEdit() {
    this.setState({editMode: false})
  }

  render() {
    return (
      <>
        <div class="card">
          <header class="card-header">
            <p className="card-header-title">{this.state.note.title} (added on {this.state.note.date})</p>
          </header>
          <div class="card-content">
            <div class="content">
              <p>Topics: <span className="tag">{this.state.note.topics}</span></p>
              <p>Instructor: {this.state.note.instructor}</p>
              <p>Content: {this.state.note.content}</p>
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="button is-danger card-footer-item" onClick={() => this.deleteNote(this.state.note.id)}>Delete</a>
            <a href="#" class="button is-success card-footer-item" onClick={() => this.setState({editMode: true})}>Edit</a>
          </footer>
        </div>
        <NoteModal editMode={this.state.editMode} note={this.state.note} toggleEdit={this.toggleEdit}/>
      </>
    )
  }
}

export default NoteDetail;