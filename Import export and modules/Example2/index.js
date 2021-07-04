import React from "react";
import ReactDom from "react-dom";
import "./styles.css";
import { add, multiply, divide, sub } from "./Math.js";

ReactDom.render(
  <div>
    <ul>
      <li>{add(1, 2)}</li>
      <li>{multiply(1, 2)}</li>
      <li>{sub(1, 2)}</li>
      <li>{divide(1, 2)}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
