import React, { Component } from 'react'
//import the components we will need
import TaskCard from './TaskCard'
import TaskManager from '../../modules/TaskManager'

class TaskList extends Component {
    //define what this component needs to render
    state = {
        tasks: [],
    }
 componentDidMount(){
        console.log("TASK LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        TaskManager.getAll()
        .then((tasks) => {
            this.setState({
                tasks: tasks
            })
        })
    };
deleteTask = id => {
    TaskManager.delete(id)
    .then(() => {
        TaskManager.getAll()
        .then((newTasks) => {
            this.setState({
                tasks: newTasks
            })
        })
    })
};

render(){
    console.log("TASK LIST: Render");

    return(
        <>
        <section className="section-content">
        <button type="button"
      className="btn"
      onClick={() => {this.props.history.push("/tasks/new")}}>
      Add Task
    </button>
    </section>
        <div className="container-cards">
            {this.state.tasks.map(task => 
            <TaskCard
            key={task.id}
            task={task}
            deleteTask={this.deleteTask}
            {...this.props}
            />
            )}
        </div>
        </>
    )
}
}

export default TaskList