import React from "react";
import ReactDOM from "react-dom/client";
// import ClickButton from "./components/ClickButton";

import PrintButton from "./components/PrintButton";

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <h1>Hello React</h1>
    <hr />
    <PrintButton />
  </div>
);
