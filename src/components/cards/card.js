import React, {Component} from 'react'


class Card extends Component {
  render(){
    return(
      <div className="tile is-parent">
        {this.props.children}
      </div>
    )
  }
}
export default Card