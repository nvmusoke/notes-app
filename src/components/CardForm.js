import React, { Component } from 'react';

class CardForm extends Component {

  handleKeyUp(e){
    e.preventDefault();
    const val=this.refs.stringValue.value;
    {this.props.onType(e,val)}
  }
  render() {
    return (
      <div className="container">
        <textarea onKeyUp={this.handleKeyUp.bind(this)} name="name" ref="stringValue" maxlength="200" rows="8" cols="40" placeholder="What's this card about?"></textarea>
      </div>
    )
  }
}

export default CardForm;