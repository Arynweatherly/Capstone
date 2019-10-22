import React, { Component } from 'react'
//import the components we will need
import NotebookCard from './NotebookCard'
import NotebookManager from '../../modules/NotebookManager'

class NotebookList extends Component {
    //define what this component needs to render
    state = {
        notebooks: [],
    }

componentDidMount(){
    console.log("NOTEBOOK LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    NotebookManager.getAll()
    .then((notebooks) => {
        this.setState({
            notebooks: notebooks
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
            <button type="button"
                className="btn"
                onClick={() => {this.props.history.push("/notebooks/new")}}>
      Add Notebook
  </button>
</section>
      <div className="container-cards">
        {this.state.notebooks.map(notebook =>
          <NotebookCard
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

export default NotebookList