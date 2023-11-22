import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import FoodList from "./components/FoodList";

function App() {
  

  return (
    <div>
      <FoodList/>
    </div>
  );
}

export default App;
