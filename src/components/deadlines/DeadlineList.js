import React, { Component } from 'react'
//import the components we will need
import DeadlineCard from './DeadlineCard'
import DeadlineManager from '../../modules/DeadlineManager'

class DeadlineList extends Component {
    //define what this component needs to render
    state = {
        deadlines: [],
    }

componentDidMount(){
    console.log("ANIMAL LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    DeadlineManager.getMyDeadlines(this.props.activeUser)
    .then((deadlines) => {
        this.setState({
            deadlines: deadlines
        })
    })
}
deleteDeadline = id => {
    DeadlineManager.delete(id)
    .then(() => {
      DeadlineManager.getMyDeadlines(parseInt(sessionStorage.getItem("activeUser")))
      .then((newDeadlines) => {
        this.setState({
            deadlines: newDeadlines
        })
      })
    })
  }

  render(){
    console.log("AnimalList: Render");

    return(
        <>
        <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {this.props.history.push("/deadlines/new")}}>
    Add Date
  </button>
</section>
      <div className="container-cards">
        {this.state.deadlines.map(deadline =>
          <DeadlineCard
            key={deadline.id}
            deadline={deadline}
            deleteDeadline={this.deleteDeadline}
            {...this.props}
          />
        )}
      </div>
      </>
    )
  }
}

export default DeadlineList;