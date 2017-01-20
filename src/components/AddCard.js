import React, { Component } from 'react';


class AddCard extends Component {

  render() {
    return (
        <button onClick={this.props.clicked} className="btn add-card">Add Card</button>
    )
  }
}

export default AddCard;
