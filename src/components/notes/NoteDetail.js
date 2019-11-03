import React, { Component } from 'react';
import NoteManager from '../../modules/NoteManager';
import './Note.css'
import NoteModal from './NoteModal'

class NoteDetail extends Component {

    state = {
        title: "",
        date: "",
        notebookId: "",
        topics: "",
        instructor: "",
        content: "",
        notebookId: "",
        loadingStatus: true,
        id: "",
        editMode: false
    }

    componentDidUpdate(){
      console.log("NoteDetail: ComponentDidMount. EditMode=" + this.state.editMode)
    }
    componentDidMount(){
        console.log("NoteDetail: ComponentDidMount. EditMode=" + this.state.editMode)

        NoteManager.get(this.props.notebookId)
        .then((note) => {
            this.setState({
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
      .then(() => { this.props.history.push(`/notebooks/${this.state.notebookId}`)})}

toggleEdit (){
  this.state.editMode = false;
}
    render() {
      console.log("this is note detail props", this.props.match.params.notebookId)
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
    <p>Topics: {this.state.topics}</p>
            <p>instructor: {this.state.instructor}</p>
            <p>content: {this.state.content}</p>
    
    </div>
  </div>
  <footer class="card-footer">

    <a href="#" class="card-footer-item" onClick={() => this.deleteNote(this.state.id)}>Delete</a>
    {/* <a href="#" class="card-footer-item" onClick={() => {this.props.history.push(`/notes/${this.state.id}/edit`)}}>Edit</a> */}
    <a href="#" class="card-footer-item" onClick={() => this.setState({editMode : true})}>Edit</a>
  </footer>
</div>
<NoteModal editMode={this.state.editMode} noteId={this.state.id} toggleEdit= {this.toggleEdit}/>

</>
      );
    }
}

export default NoteDetail;