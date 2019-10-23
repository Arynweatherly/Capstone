import React, { Component } from 'react';
import NotebookManager from '../../modules/NotebookManager';
import './Notebook.css'

class NotebookDetail extends Component {

  state = {
      subject: "",
      loadingStatus:true,
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    NotebookManager.delete(this.props.notebookId)
    .then(() => this.props.history.push("/notebooks"))
}

  componentDidMount(){
    console.log("NotebookDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    NotebookManager.getMyNotebooks(this.props.notebookId)
    .then((notebook) => {
      this.setState({
        subject: notebook.subject,
        loadingStatus: false
      });
    });
  }


  render() {
    return (
      <div className="card">
        <div className="card-notebookSubject">
          <picture>
            {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
          </picture>
            <h3>Subject: <span style={{ color: 'darkslategrey' }}>{this.state.subject}</span></h3>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

export default NotebookDetail;