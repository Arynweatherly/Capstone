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
    console.log("NOTEBOOK LIST: ComponentDidMount", this.props.activeUser);
    //getAll from AnimalManager and hang on to that data; put it in state
    NotebookManager.getMyNotebooks(this.props.activeUser)
    .then(notebooks => {
        this.setState({
            notebooks: notebooks
        })
    })
};
deleteNotebook = id => {
    NotebookManager.delete(id)
    .then(() => {
      NotebookManager.getMyNotebooks(parseInt(sessionStorage.getItem("activeUser")))
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
        
        <section className="section-content-add">
            <button type="notebookbutton"
                className="btn"
                onClick={() => {this.props.history.push("/notebooks/new")}}>
      Add Notebook
  </button>
  <p></p>
</section>
<hr />
<div className='home-notebooks'>
    
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