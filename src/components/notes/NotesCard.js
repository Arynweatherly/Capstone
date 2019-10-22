import React, { Component } from "react";
import "./Note.css";
import { Button } from "reactstrap";

class NoteCard extends Component {
  render() {
    console.log("renderingggg");
    return (
      <div className="noteContainer">
        <div className="secondContainer"></div>
        <p className="sectionTitle">
          <b>
            <u>Title</u>
          </b>
        </p>
        <p className="bigTitle">{this.props.notes.title}</p>
        <p className="sectionTitle">
          <b>
            <u>topics:</u>
          </b>
        </p>
        <p className="bigTitle">{this.props.notes.topics}</p>
        <p className="sectionTitle">
          <b>
            <u>instructor:</u>
          </b>
        </p>
        <p className="bigTitle">{this.props.notes.instructor}</p>
        <p className="sectionTitle">
          <b>
            <u>content:</u>
          </b>
        </p>
        <p>{this.props.note.content}</p>
        <p className="sectionTitle">
          <b>
            <u>date:</u>
          </b>
        </p>
        <p>{this.props.note.date}</p>
        <div className="noteButton">
          <Button
            type="deleteNotebutton"
            color="danger"
            onClick={() => this.props.deleteNote(this.props.note.id)}
          >
            Delete
          </Button>
          <Button
            type="editNotes"
            color="warning"
            onClick={() => {
              this.props.history.push(`/notes/${this.props.note.id}/edit`);
            }}
          >
            Edit
          </Button>
        </div>
      </div>
    );
  }
}

export default NoteCard;
