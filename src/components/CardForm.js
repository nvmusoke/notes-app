import React, { Component } from 'react';

class CardForm extends Component {
  handleTitleKeyUp(e){
    e.preventDefault();
    const titleval=this.refs.titleValue.value;
    {this.props.onTitleType(e,titleval)}
  }

  handleKeyUp(e){
    e.preventDefault();
    const val=this.refs.stringValue.value;
    {this.props.onType(e,val)}
  }
  render() {
    return (
      <div className="container">
        <input ref="titleValue" onKeyUp={this.handleTitleKeyUp.bind(this)} type="text" placeholder="title"/><br />
        <textarea onKeyUp={this.handleKeyUp.bind(this)} name="name" ref="stringValue" maxLength="200" rows="8" cols="40" placeholder="What's this card about?"></textarea>
      </div>
    )
  }
}

export default CardForm;
