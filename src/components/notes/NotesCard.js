import React, { Component } from "react";
import "./Note.css";

class NoteCard extends Component {
render () {
  return (
  <div className="card">
        <div className="card-content">
          <h3>title: <span className="card-note">{this.props.note.title}</span></h3>
          <p>date: {this.props.note.date}</p>
          {/* <button type="button" onClick={() => this.props.deleteNotes(this.props.note.id)}>delete</button>
          <button type="button" onClick={() => {this.props.history.push(`/notes/${this.props.note.id}/edit`)}}>Edit</button> */}
        </div>
      </div>
    );
  }
}


export default NoteCard;
