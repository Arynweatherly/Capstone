import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Notebook.css"

class NotebookCard extends Component {
  render() {
      console.log(this.props)
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
          </picture>
          <h3>class subject: <span className="card-notebookSubject">{this.props.notebook.subject}</span></h3>
        <button type="button" onClick={() => this.props.deleteNotebook(this.props.notebook.id)}>Delete</button>
        <button type="button" onClick={() => {this.props.history.push(`/notebooks/${this.props.notebook.id}/edit`)}}>Edit</button>
        <Link to={`/notebooks/${this.props.notebook.id}`}><button>View Notes</button></Link>
        </div>
      </div>
    );
  }
}

export default NotebookCard;