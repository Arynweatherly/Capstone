import React, { Component } from "react";
import "./news.css";
import { Button } from "reactstrap";

class NoteCard extends Component {
  render() {
    console.log("renderingggg");
    return (
      <div className="newsContainer">
        <div className="articleContainer"></div>
        <p className="sectionTitle">
          <b>
            <u></u>
          </b>
        </p>
        <p className="bigTitle">{this.props.notes.title}</p>
        <p className="sectionTitle">
          <b>
            <u>Synopsis:</u>
          </b>
        </p>
        <p>{this.props.article.synopsis}</p>
        <p className="sectionTitle">
          <b>
            <u>URL:</u>
          </b>
        </p>
        <p>{this.props.article.URL}</p>
        <p className="sectionTitle">
          <b>
            <u>Published Date:</u>
          </b>
        </p>
        <p>{this.props.article.date}</p>
        <div className="newsButtons">
          <Button
            type="deleteNewsbutton"
            color="danger"
            onClick={() => this.props.deleteArticle(this.props.article.id)}
          >
            Delete
          </Button>
          <Button
            type="editNewsbutton"
            color="warning"
            onClick={() => {
              this.props.history.push(`/news/${this.props.article.id}/edit`);
            }}
          >
            Edit
          </Button>
        </div>
      </div>
    );
  }
}

export default NoteCard;
