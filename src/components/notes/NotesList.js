import React, { Component } from 'react'
import NoteCard from './NotesCard'
import NoteManger from '../../modules/NoteManager'
import NotebookManager from '../../modules/NotebookManager';
import "./Note.css";

class NotesList extends Component {
    //define what this component needs to render
    state = {
        notes: [],
    }

    componentDidMount(){
        console.log("NOTE LIST: componentDidMount", this.props.activeUser);
        console.log("this is the props", this.props)
        //get user specific notes from NotesManager and hang on to that data; put it in a state
        NoteManger.getMyNotes(this.props.notebookId)
        .then(notes => {
            this.setState({
                notes: notes
            })
        })
    };
    deleteNote = id => {
        NoteManger.delete(id)
        .then(() => {
            NoteManger.getAll()
            .then((newNotes) => {
                this.setState({
                    notes: newNotes
                })
            })
        })
    }

    render(){
        console.log("NotesList: Render");

        return(
          <>

<nav class="panel notesList">
  <p class="panel-heading">
    Notes by subject:
  </p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>

  {this.state.notes.map(note =>
                    <NoteCard
                    key={note.id}
                    note={note}
                    deleteNote={this.deleteNote}
                    {...this.props}
                    />
                    )}
  <div class="panel-block">
  <button type= "button"
                className="button is-link is-outlined is-fullwidth"
                onClick={() => {this.props.history.push(`/notes/new/${this.props.match.params.notebookId}`)}}> Add Notes</button>
  </div>
</nav>
{/* <img className="noteImg2" src={`../images/notes2.png`}/> */}
</>

        )
    }
}

export default NotesList