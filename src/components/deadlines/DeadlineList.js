import React, { Component } from "react";
import DeadlineCard from "./DeadlineCard";
import DeadlineManager from "../../modules/DeadlineManager";
import "./Deadline.css";

class DeadlineList extends Component {
  //define what this component needs to render
  state = {
    deadlines: []
  };

  componentDidMount() {
    DeadlineManager.getMyDeadlines(this.props.activeUser).then(deadlines => {
      this.setState({
        deadlines: deadlines
      });
    });
  }
  deleteDeadline = id => {
    DeadlineManager.delete(id).then(() => {
      DeadlineManager.getMyDeadlines(
        parseInt(sessionStorage.getItem("activeUser"))
      ).then(newDeadlines => {
        this.setState({
          deadlines: newDeadlines
        });
      });
    });
  };

  render() {
    return (
      <>
        <div className="container-card-deadline">
          {this.state.deadlines.map(deadline => (
            <DeadlineCard
              key={deadline.id}
              deadline={deadline}
              deleteDeadline={this.deleteDeadline}
              {...this.props}
            />
          ))}
        </div>
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/deadlines/new");
            }}
          >
            Add Date
          </button>
        </section>
      </>
    );
  }
}

export default DeadlineList;
