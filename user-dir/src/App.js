import React, { Component } from "react";
import "./App.css";
import Heading from "./components/Heading";
import DataDisplay from "./components/DataDisplay";
import Navigation from "./components/Navigation";
import data from "./data/data";

class App extends Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      isEditing: false,
    };

    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleNew = this.handleNew.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleNext() {
    if (!this.state.isEditing) {
      if (this.state.index + 1 < data.length) {
        this.setState({ index: this.state.index + 1 });
      }
    } else {
      alert("you are editing, fool");
    }
  }

  handlePrevious() {
    if (!this.state.isEditing) {
      if (this.state.index + 1 > 1) {
        this.setState({ index: this.state.index - 1 });
      }
    } else {
      alert("you are editing, fool");
    }
  }

  handleDelete() {
    if (!this.state.isEditing) {
      data.splice(this.state.index, 1);

      this.setState({ index: this.state.index });
    } else {
      alert("you are editing, fool");
    }
  }

  handleNew() {
    if (!this.state.isEditing) {
      data.splice(this.state.index, 0, {
        id: "",
        name: { first: "", last: "" },
        city: "",
        country: "",
        employer: "",
        favoriteMovies: ["", "", ""],
      });

      this.setState({ index: this.state.index });
    } else {
      alert("you are editing, fool");
    }
  }

  handleEdit() {
    this.setState({ isEditing: true });
  }

  handleSave() {
    this.setState({ isEditing: false });
  }

  render() {
    return (
      <div className="app">
        <Heading></Heading>

        <div class="card-container">
          <DataDisplay
            currentIndex={this.state.index}
            isEditing={this.state.isEditing}
            save={this.handleSave}
          ></DataDisplay>
          <Navigation
            isEditing={this.state.isEditing}
            next={this.handleNext}
            prev={this.handlePrevious}
            del={this.handleDelete}
            new={this.handleNew}
            edit={this.handleEdit}
          ></Navigation>
        </div>
      </div>
    );
  }
}

export default App;
