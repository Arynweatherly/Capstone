import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./Note.css";

class NoteCard extends Component {
render () {
  return (
    <a class="panel-block is-active" onClick={() => {this.props.history.push(`/notes/${this.props.note.id}`)}}>

    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>

    </span>
    {this.props.note.title}
  </a>
    );
  }
}


export default NoteCard;
