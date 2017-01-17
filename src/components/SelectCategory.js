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
      <div className="container">
        <button id="resources" onClick={this.handleSubmit.bind(this)} className="btn">Resources</button>
        <button id="html" onClick={this.handleSubmit.bind(this)} className="btn">HTML</button>
        <button id="css" onClick={this.handleSubmit.bind(this)} className="btn">CSS</button>
        <button id="javascript" onClick={this.handleSubmit.bind(this)} className="btn">JavaScript</button>
        <button id="frontend_frameworks" onClick={this.handleSubmit.bind(this)} className="btn">Frontend Frameworks</button>
        <button id="backend_frameworks" onClick={this.handleSubmit.bind(this)} className="btn">Backend Frameworks</button>
        <button id="git" onClick={this.handleSubmit.bind(this)} className="btn">Git | GitHub</button>
        <button id="design" onClick={this.handleSubmit.bind(this)} className="btn">Design | UX | UI</button>
        <button id="other" onClick={this.handleSubmit.bind(this)} className="btn">Other</button>
        <button id="code" onClick={this.handleSubmit.bind(this)} className="btn">Code</button>
      </div>
    );
  }
}

export default SelectCategory;
