import React, { Component } from "react";

class Navigation extends Component {
  constructor() {
    super();
  }

  render() {
    let isEditing = this.props.isEditing;

    return (
      <div class="navbar">
        <button className="navButton" onClick={this.props.prev}>
          &lt; Previous
        </button>

        <div>
          <button className="changeButton" onClick={this.props.edit}>
            Edit
          </button>
          <button className="changeButton" onClick={this.props.del}>
            Delete
          </button>
          <button className="changeButton" onClick={this.props.new}>
            New
          </button>
        </div>

        <button className="navButton" onClick={this.props.next}>
          Next &gt;
        </button>
      </div>
    );
  }
}

export default Navigation;
