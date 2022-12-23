import React, { Component } from "react";
import ReactDOM from "react-dom";
import UserCv from "./UserCV";
import "./user.css";
class App extends Component {
  render() {
    return (
      <div className="user-cv">
        <UserCv />
      </div>
    );
  }
}

const rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);
