import React, { Component } from 'react';
import NoteManager from '../../modules/NoteManager';
import './Note.css'

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
        id: ""
    }

    componentDidMount(){
        console.log("NoteDetail: ComponentDidMount");
        //get(id) from AnimalManager and hang on to that data; put it into state
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

        // NoteManager.getAll()
        // .then((newNotes) => {
        //   this.setStatee({
        //     notes: newNotes
    //       // })
    //     })
    //   })
    // }
  //   handleDelete = () => {
  //     //invoke the delete function in AnimalManger and re-direct to the animal list.
  //     this.setState({loadingStatus: true})
  //     NoteManager.delete(this.props.notebook.id)
      // .then(() => this.props.history.push(`/notebooks/${this.state.notebookId}`))
  // }

    render() {
      console.log("this is note detail props", this.props.match.params.notebookId)
      return (
        <div className="card">
          <div className="card-content">
            {/* <picture>
              <img src={require('./dog.svg')} alt="My Dog" />
            </picture> */}
            <h3>Title: <span style={{ color: 'darkslategrey' }}>{this.state.title}</span></h3>
            <p>date: {this.state.date}</p>
            <p>Topics: {this.state.topics}</p>
            <p>instructor: {this.state.instructor}</p>
            <p>content: {this.state.content}</p>
            <button type="button" onClick={() => this.deleteNote(this.state.id)}>Delete</button>
            {/* <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>delete</button> */}
            <button type="button" onClick={() => {this.props.history.push(`/notes/${this.state.id}/edit`)}}>Edit</button>
          </div>
        </div>
      );
    }
}

export default NoteDetail;