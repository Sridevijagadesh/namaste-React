// {
//   /* <div className="parent">
//   <div className="child">
//     <h1>i am H!</h1>
//   </div>
// </div>; */
// }
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am inside H1"),
    React.createElement("h2", {}, "i am heading 2"),
  ]),
);

// const heading = React.createElement("h1", null, "i am from react");
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);
