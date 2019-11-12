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
            <div className="box container deadline">

            <section className="is-left">
            <p className="title is-4 deadlineForm">
              Add New Deadline
            </p>
            <img className="deadlineImg" src={`/images/deadline1.png`} />
            </section>

          <form>
          <div className="field">
            <div className="control">
                  <input
                    className="input"
                    type="text"
                    required=""
                    autofocus=""
                    onChange={this.handleFieldChange}
                    id="deadlineTitle"
                    placeholder="description"
                  />
                </div>
              </div>

              <div className="field is-right">
                <div className="control">
                  <input
                    className="input"
                    type="date"
                    required=""
                    autoFocus=""
                    value={this.state.date}
                    onChange={this.handleFieldChange}
                    id="date"
                    placeholder="date"
                  />
                </div>
              </div>
  
    
            <button type="button"   disabled={this.state.loadingStatus} onClick={this.constructNewDeadline}>Save</button>
  </form>
        </div>
      </>
        )
    }
}

export default DeadlineForm