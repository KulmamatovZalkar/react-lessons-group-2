import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
// import ClickButton from "./components/ClickButton";
// import PrintButton from "./components/PrintButton";
// // import Hello from "./components/states/Hello";
import ClickButton from "./components/states/ClickButton";

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <ClickButton increment="2" />
  </div>
);
