import React, {Component} from "react"

class Field extends Component {
  render() {
    return (
      <div className="field is-horizontal">
        <div className="field-label">
          <label>{this.props.label}</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Field