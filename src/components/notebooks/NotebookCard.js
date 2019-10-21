import React, { Component } from 'react';

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

        </div>
      </div>
    );
  }
}

export default NotebookCard;