import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Notebook.css";

class NotebookCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="tile is-ancestor card-container">
        <div className="tile is-vertical is-parent notebook">
          <div className="tile is-child box notebook">
            <h3>
              {" "}
              <span className="card-notebookSubject">
                {this.props.notebook.subject}
              </span>
            </h3>
            <hr />
            <footer className="buttonsNotebookContainer">
              <button
                type="button"
                className="buttonNotebook"
                onClick={() =>
                  this.props.deleteNotebook(this.props.notebook.id)
                }
              >
                Delete
              </button>
              <button
                type="button"
                className="buttonNotebook"
                onClick={() => {
                  this.props.history.push(
                    `/notebooks/${this.props.notebook.id}/edit`
                  );
                }}
              >
                Edit
              </button>
              <button
                type="button"
                className="buttonNotebook"
                onClick={() =>
                  this.props.history.push(
                    `/notebooks/${this.props.notebook.id}`
                  )
                }
              >
                View Notes{" "}
              </button>
            </footer>
            {/* <footer class="card-footer is-centered"> */}

            {/* </footer> */}
          </div>
        </div>
      </div>
    );
  }
}

export default NotebookCard;
