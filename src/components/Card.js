import React, { Component } from 'react';


class Card extends Component {
  render() {
    return (
      <div>
        <h3>{ this.props.title }</h3>
        <p>{ this.props.note }</p>
      </div>
    )
  }
}

export default Card;
