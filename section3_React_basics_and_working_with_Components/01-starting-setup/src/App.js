// import ExpenseItem from "./components/ExpenseItem";
// import Card from "./components/Card";
import React from "react";
import Expenses from "./components/Expenses/Expenses";
const App = () => {
  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <Expenses />
  //   </div>
  // );
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Lets get startes"),
    React.createElement(Expenses, {})
  );
};

export default App;
