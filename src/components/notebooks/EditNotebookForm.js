import React, { Component } from "react";
import NotebookManager from "../../modules/NotebookManager";
import "./NotebookForm.css";

class NotebookEditForm extends Component {
  //set the initial state
  state = {
    currentUser: parseInt(this.props.activeUser),
    notebookSubject: "",
    loadingStatus: true
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingNotebook = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedNotebook = {
      id: this.props.match.params.notebookId,
      subject: this.state.notebookSubject,
      userId: this.state.currentUser
    };

    NotebookManager.update(editedNotebook).then(() =>
      this.props.history.push("/notebooks")
    );
  };

  componentDidMount() {
    NotebookManager.get(this.props.match.params.notebookId).then(notebook => {
      this.setState({
        notebookSubject: notebook.subject,
        loadingStatus: false,
        userId: this.state.userId
      });
    });
  }

  render() {
    return (
      <>
        <div className="box container notebook">
          <section className="is-left">
            <p className="title is-4">Add Notebook</p>
            <img className="notebookImg" src={`/images/newNotebook.png`} />
          </section>
          <form>
            <div className="field">
              <label className="label"></label>
              <div className="control">
                <input
                  type="input"
                  required
                  className="input"
                  onChange={this.handleFieldChange}
                  id="notebookSubject"
                  value={this.state.notebookSubject}
                />
              </div>
            </div>

            <label htmlFor="notebookSubject">Notebook Subject </label>

            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingNotebook}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default NotebookEditForm;
