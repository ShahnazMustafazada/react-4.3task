import React, { Component } from "react";
import Contacts from "./Contacts";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";

class UserCv extends Component {
  render() {
    return (
      <div className="app">
        <PersonalInfo />
        <Experience />
        <Contacts />
      </div>
    );
  }
}
export default UserCv;
