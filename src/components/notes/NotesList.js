import React, { Component } from 'react'
import NoteCard from './NotesCard'
import NoteManger from '../../modules/NoteManager'
import NotebookManager from '../../modules/NotebookManager';

class NotesList extends Component {
    //define what this component needs to render
    state = {
        notes: [],
    }

    componentDidMount(){
        console.log("NOTE LIST: componentDidMount", sessionStorage.getItem("credentials"));
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
            <section className="section-content">
                <button type= "button"
                className="btn"
                onClick={() => {this.props.history.push(`/notes/new/${this.props.match.params.notebookId}`)}}> Add Notes</button>
            </section>
            <div className="container-cards">
                {this.state.notes.map(note =>
                    <NoteCard
                    key={note.id}
                    note={note}
                    deleteNote={this.deleteNote}
                    {...this.props}
                    />
                    )}
            </div>
            </>
        )
    }
}

export default NotesList