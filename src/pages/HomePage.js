import React from "react";
import ExpenseList from "../Components/expense-list";
import TopFold from "../Components/top-fold";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <TopFold />
      <ExpenseList />
    </div>
  );
};

export default Home;
