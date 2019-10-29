import React, { Component } from 'react'
//import the components we will need
import FriendNotebookCard from './FriendNotebooksCard'
import NotebookManager from '../../modules/NotebookManager'

class FriendNotebookList extends Component {
    //define what this component needs to render
    state = {
        notebooks: [],
    }

componentDidMount(){
    console.log("NOTEBOOK LIST: ComponentDidMount", sessionStorage.getItem("credentials"));
    //getAll from AnimalManager and hang on to that data; put it in state
    NotebookManager.getUserSpecificNotebooks(this.props.match.params.userId)
    .then(notebooks => {
        this.setState({
            notebooks: notebooks,

        })
    })
};
deleteNotebook = id => {
    NotebookManager.delete(id)
    .then(() => {
      NotebookManager.getAll()
      .then((newNotebooks) => {
        this.setState({
            notebooks: newNotebooks
        })
      })
    })
  }


render(){
    console.log("NotebookList: Render");

    return(
        <>
        <section className="section-content">
            <button type="notebookbutton"
                className="btn"
                onClick={() => {this.props.history.push("/notebooks/new")}}>
      Add Notebook
  </button>
</section>
      <div className="container-card-notebook">
        {this.state.notebooks.map(notebook =>
          <FriendNotebookCard
            key={notebook.id}
            notebook={notebook}
            deleteNotebook={this.deleteNotebook}
            {...this.props}
          />
        )}
      </div>
      </>
    )
  }
}

export default FriendNotebookList