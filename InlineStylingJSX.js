import React from "react";
import ReactDom from "react-dom";
import "./styles.css";

var hour = new Date().getHours();
var customStyle = { color: "red" };
var result;
if (hour >= 0 && hour <= 12) {
  result = "Good Morning";
} else if (hour > 12 && hour <= 15) {
  result = "Good Afternoon";
  customStyle.color = "green";
} else {
  result = "Good Evening";
  customStyle.color = "blue";
}
ReactDom.render(
  <div>
    <h1 style={customStyle}>{result}</h1>
  </div>,
  document.getElementById("root")
);
