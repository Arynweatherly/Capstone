import React, { Component } from "react"
import NotebookManager from "../../modules/NotebookManager"
import "./NotebookForm.css"

class NotebookEditForm extends Component {
    //set the initial state
    state = {
      currentUser: this.props.currentUser,
      notebookSubject: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingNotebook = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedNotebook = {
        id: this.props.match.params.notebookId,
        subject: this.state.notebookSubject,
        userId: this.state.currentUser
      };

      NotebookManager.update(editedNotebook)
      .then(() => this.props.history.push("/notebooks"))
    }

    componentDidMount() {
      NotebookManager.get(this.props.match.params.notebookId)
      .then(notebook => {
          this.setState({
            notebookSubject: notebook.subject,
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
                id="notebookSubject"
                value={this.state.notebookSubject}
              />
              <label htmlFor="notebookSubject">Notebook Subject </label>

            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingNotebook}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default NotebookEditForm