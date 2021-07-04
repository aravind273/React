import React from "react";
import ReactDom from "react-dom";
import "./styles.css";
import PI from "./Math.js";
import { doublePI, triplePI } from "./Math.js";

ReactDom.render(
  <div>
    <ul>
      <li>{PI}</li>
      <li>{doublePI()}</li>
      <li>{triplePI()}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
