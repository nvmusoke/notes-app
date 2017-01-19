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
      <div className="container cardform">

        <div className="input-info">
          <input
            className="input-title"
            onKeyUp={this.handleTitleKeyUp.bind(this)}
            ref="titleValue"
            type="text" placeholder="Title"
          />
          <textarea
            className="input-note"
            onKeyUp={this.handleKeyUp.bind(this)}
            ref="stringValue"
            name="description"
            maxLength="200" rows="8" cols="80"
            placeholder="Add your note...">
          </textarea>
        </div>

      <div className="submit-btns">
        <button
          onClick={this.props.onCancelPush}
          className="btn btn-primary submit">
          Cancel
        </button>


        <button
          onClick={this.props.onStayButtonPush}
          className="btn btn-primary submit">
          Save and Add Another
        </button>

        <button
          onClick={this.props.onButtonPush}
          className="btn btn-primary submit">
          Save and View Dashboard
        </button>
      </div>

      </div>
    )
  }
}

export default CardForm;
