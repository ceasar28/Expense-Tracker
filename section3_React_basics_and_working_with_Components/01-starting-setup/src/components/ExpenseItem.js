import "./ExpenseItem.css";
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>April 12th 2023</div>
      <div>
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$280.65</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
