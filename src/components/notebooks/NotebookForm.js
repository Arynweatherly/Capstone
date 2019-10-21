import React, { Component } from 'react';
import NotebookManager from '../../modules/NotebookManager';
import './NotebookForm.css'

class NotebookForm extends Component {
    state = {
        notebookSubject: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewNotebook = evt => {
        evt.preventDefault();
        if (this.state.notebookSubject === "" ) {
            window.alert("Please input an animal name and breed");
        } else {
            this.setState({ loadingStatus: true });
            const notebook = {
                subject: this.state.notebookSubject,
            };

            // Create the animal and redirect user to animal list
            NotebookManager.post(notebook)
            .then(() => this.props.history.push("/notebooks"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                    <label htmlFor="notebookSubject">Subject:</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="notebookSubject"
                        placeholder="Notebook Subject"
                        />
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewNotebook}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default NotebookForm