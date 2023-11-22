import { useState } from "react";

import FoodBox from './FoodBox'
import AddFoodForm from './AddFoodForm'
import foodsJson from "../foods.json";
export default function FoodList() {
    const [foodsArr, setFoodsArr] = useState(foodsJson);
  return (
    <div>
      <AddFoodForm foodsArr= {foodsArr} setFoodsArr={setFoodsArr}/>
      <hr />
      {foodsArr.map((eachFood) => {
        return (
          <FoodBox
            key={eachFood.id}
            foodsArr={foodsArr}
            setFoodsArr={setFoodsArr}
            food={eachFood}
          />
        );
      })}
    </div>
  )
}
