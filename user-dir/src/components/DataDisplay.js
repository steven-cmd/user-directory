import React, { Component } from "react";
import data from "../data/data";

class DataDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      first: data[props.currentIndex].name.first,
      last: data[props.currentIndex].name.last,
      city: data[props.currentIndex].city,
      country: data[props.currentIndex].country,
      employer: data[props.currentIndex].employer,
      title: data[props.currentIndex].title,
      favoriteMovie1: data[props.currentIndex].favoriteMovies[0],
      favoriteMovie2: data[props.currentIndex].favoriteMovies[1],
      favoriteMovie3: data[props.currentIndex].favoriteMovies[2],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveIt = this.saveIt.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentIndex !== this.props.currentIndex) {
      this.setState({
        id: "",
        first: data[this.props.currentIndex].name.first,
        last: data[this.props.currentIndex].name.last,
        city: data[this.props.currentIndex].city,
        country: data[this.props.currentIndex].country,
        employer: data[this.props.currentIndex].employer,
        title: data[this.props.currentIndex].title,
        favoriteMovie1: data[this.props.currentIndex].favoriteMovies[0],
        favoriteMovie2: data[this.props.currentIndex].favoriteMovies[1],
        favoriteMovie3: data[this.props.currentIndex].favoriteMovies[2],
      });
    }
  }

  handleInputChange(key, value) {
    this.setState({ [key]: value });
  }

  saveIt() {
    this.props.save();
    console.log(this.state);

    data[this.props.currentIndex].name.first = this.state.first;
    data[this.props.currentIndex].name.last = this.state.last;
    data[this.props.currentIndex].city = this.state.city;
    data[this.props.currentIndex].country = this.state.country;
    data[this.props.currentIndex].employer = this.state.employer;
    data[this.props.currentIndex].title = this.state.title;
    data[this.props.currentIndex].favoriteMovies[0] = this.state.favoriteMovie1;
    data[this.props.currentIndex].favoriteMovies[1] = this.state.favoriteMovie2;
    data[this.props.currentIndex].favoriteMovies[2] = this.state.favoriteMovie3;
  }

  render() {
    let currentUser = data[this.props.currentIndex];
    let isEditing = this.props.isEditing;

    return (
      <div className="card">
        <div className="position">
          <span>
            {this.props.currentIndex + 1}/{data.length}
          </span>
        </div>
        <div className="username">
          <span>
            {isEditing ? (
              <input
                value={this.state.first}
                onChange={(e) =>
                  this.handleInputChange("first", e.target.value)
                }
              ></input>
            ) : (
              currentUser.name.first
            )}{" "}
          </span>
          <span>
            {isEditing ? (
              <input
                value={this.state.last}
                onChange={(e) => this.handleInputChange("last", e.target.value)}
              ></input>
            ) : (
              currentUser.name.last
            )}
          </span>
        </div>

        <div className="user-info">
          <div>
            <strong>From:</strong>{" "}
            {isEditing ? (
              <input
                value={this.state.city}
                onChange={(e) => this.handleInputChange("city", e.target.value)}
              ></input>
            ) : (
              currentUser.city
            )}
            ,{" "}
            {isEditing ? (
              <input
                value={this.state.country}
                onChange={(e) =>
                  this.handleInputChange("country", e.target.value)
                }
              ></input>
            ) : (
              currentUser.country
            )}
          </div>
          <div>
            <strong>Job Title:</strong>{" "}
            {isEditing ? (
              <input
                value={this.state.title}
                onChange={(e) =>
                  this.handleInputChange("title", e.target.value)
                }
              ></input>
            ) : (
              currentUser.title
            )}
            ,{" "}
          </div>
          <div>
            <strong>Employer:</strong>{" "}
            {isEditing ? (
              <input
                value={this.state.employer}
                onChange={(e) =>
                  this.handleInputChange("employer", e.target.value)
                }
              ></input>
            ) : (
              currentUser.employer
            )}
          </div>
        </div>

        <div className="favorites">
          <strong>Favorite Movies:</strong>{" "}
          <ol>
            <li>
              {isEditing ? (
                <input
                  value={this.state.favoriteMovie1}
                  onChange={(e) =>
                    this.handleInputChange("favoriteMovie1", e.target.value)
                  }
                ></input>
              ) : (
                currentUser.favoriteMovies[0]
              )}
            </li>
            <li>
              {" "}
              {isEditing ? (
                <input
                  value={this.state.favoriteMovie2}
                  onChange={(e) =>
                    this.handleInputChange("favoriteMovie2", e.target.value)
                  }
                ></input>
              ) : (
                currentUser.favoriteMovies[1]
              )}
            </li>
            <li>
              {" "}
              {isEditing ? (
                <input
                  value={this.state.favoriteMovie3}
                  onChange={(e) =>
                    this.handleInputChange("favoriteMovie3", e.target.value)
                  }
                ></input>
              ) : (
                currentUser.favoriteMovies[2]
              )}
            </li>
          </ol>
        </div>

        {this.props.isEditing && <button onClick={this.saveIt}>Save</button>}
      </div>
    );
  }
}

export default DataDisplay;
