import React, { Component } from 'react';
import NoteManager from '../../modules/NoteManager';
import './Note.css'

class NoteForm extends Component {
    state = {
        noteTitle: "",
        date: "",
        topics: "",
        instructor: "",
        content: "",
        notebookId: parseInt(this.props.match.params.notebookId),
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewNote = evt => {
        evt.preventDefault();
        if (this.state.noteTitle === "" ) {
  
            window.alert("Please input an animal name and breed");
        } else {
            this.setState({ loadingStatus: true });
            const note = {
                title: this.state.noteTitle,
                date: this.state.date,
                topics: this.state.topics,
                instructor: this.state.instructor,
                content: this.state.content,
                notebookId: this.state.notebookId,

            };

            // Create the animal and redirect user to animal list
            NoteManager.post(note)
            .then(() => this.props.history.push(`/notebooks/${this.props.match.params.notebookId}`));
        }
    };

    render(){

        return(
            <>
            <form>
            <fieldset>
            <label className="noteTitle">Title::</label>
            <input
              type="text"
              placeholder="Title"
              id="noteTitle"
              onChange={this.handleFieldChange}
            ></input>

            <label className="dateName">Date:</label>
            <input
              type="date"
              required
              id="date"
              onChange={this.handleFieldChange}
              value={this.state.date}
            ></input>

            <label className="topics">Topics:</label>
            <input
              type="text"
              placeholder="topics"
              id="topics"
              onChange={this.handleFieldChange}
            ></input>
            <label className="instructor">instructor:</label>
            <input
              type="text"
              placeholder="instructor"
              id="instructor"
              onChange={this.handleFieldChange}
            ></input>

            <label className="content">content:</label>
            <input
              type="text"
              placeholder="content"
              id="content"
              onChange={this.handleFieldChange}
            ></input>
          </fieldset>
          <button type="button"   disabled={this.state.loadingStatus} onClick={this.constructNewNote}>
            Save Task
          </button>
            </form>
        </>
        )
    }
}

export default NoteForm