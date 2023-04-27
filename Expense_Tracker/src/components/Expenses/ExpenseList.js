import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const Expenselist = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expense</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            // using the key concept to identify individal items uniquely
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
      ;
    </ul>
  );
};

export default Expenselist;
