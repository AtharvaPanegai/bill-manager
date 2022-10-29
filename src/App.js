import './App.css';
import {BrowserRouter,Switch,Route,Link, Routes} from "react-router-dom";
import HomeComponent from './Components/HomeComponent';
import Home from './pages/HomePage';
import AddExpense from './pages/add-expense';

function App() {
  return (
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/add-expense' element={<AddExpense />} />
      </Routes>
  );
}

export default App;
