import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  // setting a title useState
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("UpdatedTitle");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>click me</button> */}
    </Card>
  );
};

export default ExpenseItem;
