import React, { Component } from "react";

class Navigation extends Component {
  constructor() {
    super();
  }

  render() {
    let isEditing = this.props.isEditing;

    return (
      <div>
        <button onClick={this.props.prev}>Previous</button>
        <button onClick={this.props.edit}>Edit</button>
        <button onClick={this.props.del}>Delete</button>
        <button onClick={this.props.new}>New</button>
        <button onClick={this.props.next}>Next</button>
      </div>
    );
  }
}

export default Navigation;
