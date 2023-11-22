export default function FoodBox({
  food: { name, calories, image, servings, id },
  foodsArr,
  setFoodsArr,
}) {
  const deleteFood = (id) => {
    setFoodsArr(foodsArr.filter((food) => food.id !== id));
  };
  return (
    <div>
      <p>{name}</p>

      <img src={image} />

      <p>Calories: {calories}</p>
      <p>Servings {servings}</p>

      <p>
        <b>Total Calories: {servings * calories} </b> kcal
      </p>

      <button onClick={() => deleteFood(id)}>Delete</button>
    </div>
  );
}
