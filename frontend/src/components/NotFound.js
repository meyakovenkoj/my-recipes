import React, { Component } from "react";

const divStyle = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const buttonStyle = {
  backgroundColor: "#4CAF50",
  border: "none",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
};

class NotFound extends Component {
  render() {
    return (
      <div style={divStyle}>
        <h1>Not Found</h1>
        <p>Return back?</p>
        <button
          style={buttonStyle}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Go home
        </button>
      </div>
    );
  }
}

export default NotFound;
