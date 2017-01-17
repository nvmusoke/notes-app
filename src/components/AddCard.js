import React, { Component } from 'react';


class AddCard extends Component {

  render() {
    return (
        <button onClick={this.props.clicked} className="btn">Add Card</button>
    )
  }
}

export default AddCard;
