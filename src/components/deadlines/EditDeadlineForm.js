import React, { Component } from "react"
import DeadlineManager from "../../modules/DeadlineManager"
import "./DeadlineForm.css"

class DeadlineEditForm extends Component {
    //set the initial state
    state = {
      currentUser: parseInt(this.props.activeUser),
      deadlineTitle: "",
      date: "",
      loadingStatus: true,
      userId:""
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingDeadline = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedDeadline = {
        id: this.props.match.params.deadlineId,
        title: this.state.deadlineTitle,
        date: this.state.date,
        userId: this.state.currentUser
      };

      DeadlineManager.update(editedDeadline)
      .then(() => this.props.history.push("/deadlines"))
    }

    componentDidMount() {
      DeadlineManager.get(this.props.match.params.deadlineId)
      .then(deadline => {
          this.setState({
            deadlineTitle: deadline.title,
            date: deadline.date,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="deadlineTitle"
                value={this.state.deadlineTitle}
              />
              <label htmlFor="deadlineTitle">Description</label>

              <input
                type="date"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="date"
                value={this.state.date}
              />
              <label htmlFor="breed">Date</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingDeadline}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default DeadlineEditForm