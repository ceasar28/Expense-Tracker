// import ExpenseItem from "./components/ExpenseItem";
// import Card from "./components/Card";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DummyExpenses);

  const dataHandler = (expensedata) => {
    setExpenses((prevExpenses) => {
      return [expensedata, ...prevExpenses];
    });
    console.log("from App.js", expensedata);
  };
  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <NewExpense getData={dataHandler} />
      <Expenses items={expenses} />
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
