import React, { Component } from 'react';

class SelectCategory extends Component {
  handleSubmit(e){
    e.preventDefault();
    const category=e.target.id;
    // console.log('val: ',val);
    {this.props.onChoose(e,category)}
  }
  render() {
    return (
      <div className="flexcontainer">

        <div className="row">
          <button id="resources" className="btn btn-default" onClick={this.handleSubmit.bind(this)}>Resources</button>
        </div>
        <div className="row">
          <button id="html" className="btn btn-default" onClick={this.handleSubmit.bind(this)}>HTML</button>
          <button id="css" className="btn btn-default" onClick={this.handleSubmit.bind(this)}>CSS</button>
          <button id="javascript" className="btn btn-default" onClick={this.handleSubmit.bind(this)}>JavaScript</button>
          <button id="frontend_frameworks" className="btn btn-default" onClick={this.handleSubmit.bind(this)}>Frontend Frameworks</button>
        </div>
        <div className="row">
          <button id="backend_frameworks" className="btn btn-default" onClick={this.handleSubmit.bind(this)}>Backend Frameworks</button>
          <button id="git" className="btn btn-default" onClick={this.handleSubmit.bind(this)}>Git | GitHub</button>
          <button id="design" className="btn btn-default" onClick={this.handleSubmit.bind(this)}>Design | UX</button>
          <button id="other" className="btn btn-default" onClick={this.handleSubmit.bind(this)}>Other</button>
        </div>
        <div className="row">
          <button id="code" className="btn btn-default" onClick={this.handleSubmit.bind(this)}>Code</button>
        </div>

      </div>
    );
  }
}

export default SelectCategory;
