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
            let sessionUserId = parseInt(sessionStorage.getItem("credentials"));
            window.alert("Please input an animal name and breed");
        } else {
            let sessionUserId = parseInt(sessionStorage.getItem("credentials"));
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
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="deadlineTitle"
                        placeholder="description"
                        />
                        <label htmlFor="deadlineTitle">Description</label>
                        <input
                        type="date"
                        required
                        onChange={this.handleFieldChange}
                        id="date"
                        placeholder="date"
                        />
                        <label htmlFor="breed">Date</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewDeadline}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default DeadlineForm