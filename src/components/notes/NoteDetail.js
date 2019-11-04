import React, {Component} from 'react';
import NoteManager from '../../modules/NoteManager';
import './Note.css'
import NoteModal from './NoteModal'

class NoteDetail extends Component {
  constructor(props) {
    super(props)
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  state = {
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
    console.log("NoteDetail: ComponentDidMount. EditMode=" + this.state.editMode + ", NoteId=" + this.state.id)

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
    console.log("toggling editMode")
    this.setState({editMode: false})
  }

  render() {
    return (
      <>
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              {this.state.title} <br/>
              {this.state.date}
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <p>Notebook ID: {this.state.notebookId}</p>
              <p>Note ID: {this.state.id}</p>
              <p>Topics: {this.state.topics}</p>
              <p>instructor: {this.state.instructor}</p>
              <p>content: {this.state.content}</p>
            </div>
          </div>
          <footer class="card-footer">

            <a href="#" class="card-footer-item" onClick={() => this.deleteNote(this.state.id)}>Delete</a>
            <a href="#" class="card-footer-item" onClick={() => this.setState({editMode: true})}>Edit</a>
          </footer>
        </div>
        {this.state.id &&
        <NoteModal editMode={this.state.editMode} note={this.state.note} toggleEdit={this.toggleEdit}/>
        }
      </>
    );
  }
}

export default NoteDetail;