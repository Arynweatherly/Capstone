import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import TaskManager from "../../modules/TaskManager";
import "./TaskForm.css"

 class TaskForm extends Component {
  state = {
    taskName: "",
    completed: false,
    date: "",
    loadingStatus: false,
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

constructNewTask = evt => {
    evt.preventDefault();
    if (this.state.taskName === "" ) {
      let sessionUserId = parseInt(this.props.activeUser);
        window.alert("Please input an animal name and breed");
    } else {
      let sessionUserId = parseInt(this.props.activeUser);
        this.setState({ loadingStatus: true });
        const task = {
            taskName: this.state.taskName,
            completed: this.state.completed,
            date:this.state.date,
            userId: sessionUserId
  

        };

        // Create the animal and redirect user to animal list
        TaskManager.post(task)
        .then(() => this.props.history.push("/tasks"));
    }
};

  render() {
    return (
      <>
      <div className="box container task">
            <section className="is-left">
					<p className="title is-4 task">Add Task</p>
				{/* <img src={`../../images/signIn.svg`}/> */}
			<img className= "noteImg" src={`/images/Group 4.png`}/>
				</section>
            <form>
 
            <div className="field">
            <label className="label"></label>
            <div className="control">
              <input
               className="input"
               type="text"
              placeholder="Enter Task Here"
              id="taskName"
              required=""
              autoFocus=""
              onChange={this.handleFieldChange}
            />

</div>
            </div>
        
            <div className="field is-right">
              <label className="label"></label>
              <div className="control">
                <input
                className="input"
              type="date"
              required
              id="date"
              onChange={this.handleFieldChange}
              value={this.state.date}
              autoFocus= ""
              />

            </div>
              </div>

              <div className="field is-right">
              <label className="label"></label>
              <div className="control">
            <input
              type="checkbox"
              id="completed"
              onChange={this.handleFieldChange}
              ></input>
              </div>
              </div>

        
          <button type="button"    disabled={this.state.loadingStatus} onClick={this.constructNewTask}>
            Save Task
          </button>
        </form>
      </div>
      </>
    );
  }
}

export default TaskForm; 