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
             let sessionUserId = parseInt(this.props.activeUser);
            window.alert("Please input an animal name and breed");
        } else {
            let sessionUserId = parseInt(this.props.activeUser);
            this.setState({ loadingStatus: true });
            const notebook = {
                subject: this.state.notebookSubject,
                userId: sessionUserId
            };

            // Create the animal and redirect user to animal list
            NotebookManager.post(notebook)
            .then(() => this.props.history.push("/notebooks"));
        }
    };

    render(){

        return(
            <>
            <div className="box container notebook">
                <section className="is-left">
                    <p className="title is-4">Add Notebook</p>
                    <img className= "notebookImg" src={`/images/newNotebook.png`}/>
                </section>
                <form>
                    <div className="field">
                    <label className="label"></label>
                    <div className="control">
                        <input
                        className="input"
                        type="text"
                        placeholder="notebook subject"
                        required=""
                        autofocus=""
                        onChange={this.handleFieldChange}
                        />
                    </div>
                    </div>

                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewNotebook}
                        >Submit</button>
                        </form>
                    </div>

        </>
        )
    }
}

export default NotebookForm