import React from "react";
import AddForm from "../../Components/AddForm";
import TopFold from "../../Components/top-fold";
import "./add-expense.css";
const AddExpense = () => {
  return (
    <div className="add-expense">
      <TopFold />
      <AddForm />
    </div>
  );
};

export default AddExpense;
