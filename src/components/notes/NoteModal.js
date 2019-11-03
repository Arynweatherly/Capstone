import React, { Component } from 'react'

class NoteModal extends Component {
    render() {
        return (

<div className={this.props.editMode === true ? 'modal is-active' : 'modal'}>
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Edit Notes</p>
      <button class="delete" aria-label="close" onClick={() => this.props.toggleEdit}></button>
    </header>
    <section class="modal-card-body">

    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>

        )
}
}
export default NoteModal