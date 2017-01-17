import React, { Component } from 'react';

class SelectCategory extends Component {
  handleSubmit(e){
    e.preventDefault();
    const val=e.target.id;
    // console.log('val: ',val);
    {this.props.onChoose(e,val)}
  }
  render() {
    return (
      <div className="container">
        <button id="resources" onClick={this.handleSubmit.bind(this)} className="btn">Resources</button>
        <button className="btn">HTML</button>
        <button className="btn">CSS</button>
        <button className="btn">JavaScript</button>
        <button className="btn">Frontend Frameworks</button>
        <button className="btn">Backend Frameworks</button>
        <button className="btn">Git | GitHub</button>
        <button className="btn">Design | UX | UI</button>
        <button className="btn">Other</button>
        <button className="btn">Code</button>
      </div>
    );
  }
}

export default SelectCategory;
