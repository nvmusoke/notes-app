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
<<<<<<< HEAD

        <input ref="titleValue" onKeyUp={this.handleTitleKeyUp.bind(this)} type="text" placeholder="title"/>
        <textarea onKeyUp={this.handleKeyUp.bind(this)} name="name" ref="stringValue" rows="8" cols="40" placeholder="What's this card about?"></textarea>
        <button onClick={this.props.onStayButtonPush} className="btn">Save and Add Another</button>
        <button onClick={this.props.onButtonPush} className="btn">Save and View Dashboard</button>
=======
        <input
          className="btn btn-primary submit"
          onKeyUp={this.handleTitleKeyUp.bind(this)}
          ref="titleValue"
          type="text" placeholder="Title"
        />
>>>>>>> f6a25cb2fb946c6c686497d92efc934a3688994e

        <input
          className="input-title"
          type="text" name="title"
          placeholder="Title" value=""
        />

        <textarea
          className="input-note"
          onKeyUp={this.handleKeyUp.bind(this)}
          ref="stringValue"
          name="description"
          maxLength="200" rows="8" cols="80"
          placeholder="Add your note...">
        </textarea>

      <div class="submit-btns">
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
