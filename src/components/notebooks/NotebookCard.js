import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Notebook.css"

class NotebookCard extends Component {

  
  render() {
      console.log(this.props)
    return (

      <div class="card">
  <header class="card-header">
    <p class="card-header-title">
    <h3>class subject: <span className="card-notebookSubject">{this.props.notebook.subject}</span></h3>
    </p>

  </header>
  <div class="card-content">

  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item" onClick={() => this.props.deleteNotebook(this.props.notebook.id)}>Delete</a>
    <a href="#" class="card-footer-item" onClick={() => {this.props.history.push(`/notebooks/${this.props.notebook.id}/edit`)}}>Edit</a>
    <a href="#" class="card-footer-item" onClick={() => this.props.history.push(`/notebooks/${this.props.notebook.id}`)}>View Notes </a>
    {/* <Link to={`/notebooks/${this.props.notebook.id}`}>View Notes</Link> */}
  </footer>
</div>


  
    )
  }
}

export default NotebookCard;