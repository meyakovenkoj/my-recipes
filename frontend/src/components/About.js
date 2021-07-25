import React, { Component } from "react";

const divStyle = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

class About extends Component {
  render() {
    return (
      <div style={divStyle}>
        <h1>About</h1>
        <p>Some text</p>
      </div>
    );
  }
}

export default About;
