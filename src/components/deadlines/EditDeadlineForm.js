import React, { Component } from "react";
import DeadlineManager from "../../modules/DeadlineManager";
import "./DeadlineForm.css";

class DeadlineEditForm extends Component {
  //set the initial state
  state = {
    currentUser: parseInt(this.props.activeUser),
    deadlineTitle: "",
    date: "",
    loadingStatus: true,
    userId: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingDeadline = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedDeadline = {
      id: this.props.match.params.deadlineId,
      title: this.state.deadlineTitle,
      date: this.state.date,
      userId: this.state.currentUser
    };

    DeadlineManager.update(editedDeadline).then(() =>
      this.props.history.push("/deadlines")
    );
  };

  componentDidMount() {
    DeadlineManager.get(this.props.match.params.deadlineId).then(deadline => {
      this.setState({
        deadlineTitle: deadline.title,
        date: deadline.date,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <>
        <div className="box container deadline">
          <section className="is-left">
            <p className="title is-4 deadlineForm">Add New Deadline</p>
            <img className="deadlineImg" src={`/images/deadline1.png`} />
          </section>

          <form>
            <div className="field">
              <div className="control">
                <input
                  type="text"
                  required
                  className="input"
                  autofocus=""
                  onChange={this.handleFieldChange}
                  id="deadlineTitle"
                  value={this.state.deadlineTitle}
                />
              </div>
            </div>

            <label htmlFor="deadlineTitle">Description</label>
            <div className="field is-right">
              <div className="control">
                <input
                  type="date"
                  required
                  autoFocus=""
                  className="input"
                  onChange={this.handleFieldChange}
                  id="date"
                  value={this.state.date}
                />
                <label htmlFor="date">Date</label>
              </div>
            </div>

            <button
              type="button"
              disabled={this.state.loadingStatus}
              onClick={this.updateExistingDeadline}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default DeadlineEditForm;
