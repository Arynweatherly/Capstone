import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Notebook.css"

class NotebookCard extends Component {

  
  render() {
      console.log(this.props)
    return (

      <div className="card-notebook">
  {/* <header class="card-header">
    <p class="card-header-title">
    <h3>class subject: <span className="card-notebookSubject">{this.props.notebook.subject}</span></h3>
    </p>

  </header> */}

  <div class="card-content">
  <h3> <span className="card-notebookSubject">{this.props.notebook.subject}</span></h3>
  </div>
  
  <footer class="card-footer">
    <a href="#" className="card-footer-item" onClick={() => this.props.deleteNotebook(this.props.notebook.id)}>Delete</a>
    <a href="#" className="card-footer-item" onClick={() => {this.props.history.push(`/notebooks/${this.props.notebook.id}/edit`)}}>Edit</a>
    <a href="#" className="card-footer-item" onClick={() => this.props.history.push(`/notebooks/${this.props.notebook.id}`)}>View Notes </a>
    {/* <Link to={`/notebooks/${this.props.notebook.id}`}>View Notes</Link> */}
  </footer>
</div>

// <div class="tile is-parent">
//         <article class="tile is-child notification is-info">
//           <p class="title">Middle tile</p>
//           <p class="subtitle">With an image</p>
//           <figure class="image is-4by3">
//             <img src="https://bulma.io/images/placeholders/640x480.png">
//           </figure>
//         </article>
//       </div>

    )
  }
}

export default NotebookCard;