import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Notebook.css"

class NotebookCard extends Component {

  
  render() {
      console.log(this.props)
    return (

      <div className="tile is-ancestor card-container">
<div className= "tile is-vertical is-parent">
  <div className="tile is-child box">
  <h3> <span className="card-notebookSubject">{this.props.notebook.subject}</span></h3>
  <br />
  <hr />
  <button type="button is-left" className="deleteNotebook" onClick={() => this.props.deleteNotebook(this.props.notebook.id)}>Delete</button>
  <button type="button is-centered" className="editNotebooks" onClick={() => {this.props.history.push(`/notebooks/${this.props.notebook.id}/edit`)}}>Edit</button>
  <button type="button is-right" className="viewNotebooks" onClick={() => this.props.history.push(`/notebooks/${this.props.notebook.id}`)}>View Notes </button>
  {/* <footer class="card-footer is-centered"> */}
{/* 
    <div class="field is-grouped">
  <p class="control">
  <button type="button is-left" className="deleteNotebook" onClick={() => this.props.deleteNotebook(this.props.notebook.id)}>Delete</button>
  <button type="button is-centered" className="editNotebooks" onClick={() => {this.props.history.push(`/notebooks/${this.props.notebook.id}/edit`)}}>Edit</button>
  <button type="button is-right" className="viewNotebooks" onClick={() => this.props.history.push(`/notebooks/${this.props.notebook.id}`)}>View Notes </button> */}
    {/* <Link to={`/notebooks/${this.props.notebook.id}`}>View Notes</Link> */}
    {/* </p>
    </div> */}
  
  
  {/* </footer> */}
</div>
</div>
</div>

    )
  }
}

export default NotebookCard;