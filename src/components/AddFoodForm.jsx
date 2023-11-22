export default function AddFoodForm({ foodsArr, setFoodsArr }) {
  const handleForm = (event) => {
    const { name, image, calories, servings } = event.target;
    const food = {
      name: name.value,
      calories: calories.value,
      image: image.value,
      servings: servings.value,
    };
    event.preventDefault();
    setFoodsArr([food, ...foodsArr]);
  };

  return (
    <form onSubmit={handleForm}>
      <label htmlFor="name"> name </label>
      <input type="text" name="name" />
      <label htmlFor="image"> image </label>
      <input type="text" name="image" />
      <label htmlFor="calories"> calories </label>
      <input type="number" name="calories" />
      <label htmlFor="servings"> servings </label>
      <input type="number" name="servings" />

      <button type="submit"> Submit </button>
    </form>
  );
}
