import React, { Component } from 'react';
import DeadlineManager from '../../modules/DeadlineManager';
import './DeadlineForm.css'

class DeadlineForm extends Component {
    state = {
        deadlineTitle: "",
        date: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewDeadline = evt => {
        evt.preventDefault();
        if (this.state.deadlineTitle === "" || this.state.date === "") {
            let sessionUserId = parseInt(this.props.activeUser);
            window.alert("Please input an animal name and breed");
        } else {
            let sessionUserId = parseInt(this.props.activeUser);
            this.setState({ loadingStatus: true });
            const deadline = {
                title: this.state.deadlineTitle,
                date: this.state.date,
                userId: sessionUserId
            };

            // Create the animal and redirect user to animal list
            DeadlineManager.post(deadline)
            .then(() => this.props.history.push("/deadlines"));
        }
    };

    render(){

        return(
            <>
            <div className="login card">
          <header className="card-header">
            <p className="card-header-title">
              Add New Deadline
            </p>
            <a href="#" className="card-header-icon" aria-label="more options">
                <span className="icon"></span>
            </a>
          </header>
          <div className="card-content">
            <div className="content">
              <div className="field">
                <label htmlFor="deadlineTitle">Description</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    required
                    onChange={this.handleFieldChange}
                    id="deadlineTitle"
                    placeholder="description"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Date</label>
                <div className="control">
                  <input
                    className="input"
                    type="date"
                    required
                    onChange={this.handleFieldChange}
                    id="date"
                    placeholder="date"
                  />
                </div>
              </div>
            </div>
          </div>
          <footer className="card-footer">
            <a onClick={this.constructNewDeadline} className="card-footer-item">Save</a>
          </footer>
        </div>
      </>
        )
    }
}

export default DeadlineForm