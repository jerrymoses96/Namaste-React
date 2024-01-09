import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "hello from React h1"),
    React.createElement("h2", {}, "am jerin ouseph"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hello from React h1"),
    React.createElement("h2", {}, "hello from React h2"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
