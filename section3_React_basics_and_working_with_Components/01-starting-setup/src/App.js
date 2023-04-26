// import ExpenseItem from "./components/ExpenseItem";
// import Card from "./components/Card";
import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const dataHandler = (expensedata) => {
    console.log("from App.js", expensedata);
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense getData={dataHandler} />
      <Expenses />
    </div>
  );

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get startes"),
  //   React.createElement(NewExpense, {}),
  //   React.createElement(Expenses, {})
  // );
};

export default App;
