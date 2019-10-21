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
}

render(){
    console.log("NOTEBOOK LIST: Render");
    console.log(this.state.notebooks)

    return(
        <div className="container-cards">
            {this.state.notebooks.map(notebook =>
            <NotebookCard key={notebook.id} notebook={notebook}/>
            )}
        </div>
    )
}
}

export default NotebookList