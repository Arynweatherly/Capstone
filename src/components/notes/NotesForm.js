import React, { Component } from 'react';
import NoteManager from '../../modules/NoteManager';
import './Note.css'
import Dropzone from 'react-dropzone';
import request from 'superagent';

const uploadPreset = 'notesapp';
const uploadURL = 'https://api.cloudinary.com/v1_1/dicoaixm8/image/upload';

class NoteForm extends Component {
    state = {
        noteTitle: "",
        date: "",
        topics: "",
        instructor: "",
        imageURL: "",
        uploadedFile: null,
        content: "",
        notebookId: parseInt(this.props.match.params.notebookId),
        loadingStatus: false,
    };


    onImageDrop(files) {
      this.setState({
          uploadedFile: files[0]
      });

      this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
      let upload = request.post(uploadURL)
          .field('upload_preset', uploadPreset)
          .field('file', file);

      upload.end((err, response) => {
          if (err) {
              console.error(err);
          }

          if (response.body.secure_url !== '') {
              this.setState({
                  imageURL: response.body.secure_url
              });
          }
      });
  }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewNote = evt => {
        evt.preventDefault();
        if (this.state.noteTitle === "" ) {
  
            window.alert("Please input an animal name and breed");
        } else {
            this.setState({ loadingStatus: true });
            const note = {
                title: this.state.noteTitle,
                date: this.state.date,
                topics: this.state.topics,
                imageURL: this.state.imageURL,
                uploadedFile: this.state.uploadedFile,
                instructor: this.state.instructor,
                content: this.state.content,
                notebookId: this.state.notebookId,

            };

            // Create the animal and redirect user to animal list
            NoteManager.post(note)
            .then(() => this.props.history.push(`/notebooks/${this.props.match.params.notebookId}`));
        }
    };

    render(){

        return(
            <>
            <form>
            <fieldset>
            <label className="noteTitle">Title::</label>
            <input
              type="text"
              placeholder="Title"
              id="noteTitle"
              onChange={this.handleFieldChange}
            ></input>

            <label className="dateName">Date:</label>
            <input
              type="date"
              required
              id="date"
              onChange={this.handleFieldChange}
              value={this.state.date}
            ></input>

            <label className="topics">Topics:</label>
            <input
              type="text"
              placeholder="topics"
              id="topics"
              onChange={this.handleFieldChange}
            ></input>
            <label className="instructor">instructor:</label>
            <input
              type="text"
              placeholder="instructor"
              id="instructor"
              onChange={this.handleFieldChange}
            ></input>

            <label className="content">content:</label>
            <textarea
              type="textarea"
              placeholder="content"
              id="content"
              onChange={this.handleFieldChange}
            ></textarea>
           <Dropzone
              onDrop={this.onImageDrop.bind(this)}
              accept="image/*"
              multiple={true}>
              {({getRootProps, getInputProps}) => {
                return (
                    <div
                      {...getRootProps()}
                    >
                      <input {...getInputProps()} />
                      {
                        <p>Try dropping some files here, or click to select files to upload.</p>
                      }
                </div>
               )
              }}
          </Dropzone>
          <div>
              {this.state.imageURL === '' ? null :
          <div>
            <p>{this.state.uploadedFile.name}</p>
          <img alt="previewImg" className="preview-img" src={this.state.imageURL} />
          </div>}
         </div>
          </fieldset>
          <button type="button"   disabled={this.state.loadingStatus} onClick={this.constructNewNote}>
            Save Note
          </button>
            </form>
        </>
        )
    }
}

export default NoteForm