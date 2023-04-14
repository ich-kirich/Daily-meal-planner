import { Box, Button, Typography } from "@mui/material";
import shortid from "shortid";
import { IMeal, IMealsListProps } from "../../types/types";
import styles from "./MealsList.module.scss";

function MealsList(props: IMealsListProps) {
  const { meals, setMeals } = props;
  const deleteMeal = (meal: IMeal) => {
    const updateMeals = [...meals].filter((item) => item !== meal);
    setMeals(updateMeals);
  };
  const addMeal = (meal: IMeal) => {
    const productsJson = localStorage.getItem("products");
    if (productsJson) {
      const mealsPlan = JSON.parse(productsJson);
      const newMeal = { ...meal, category: "Завтрак" };
      mealsPlan.push(newMeal);
      localStorage.setItem("products", JSON.stringify(mealsPlan));
    } else {
      const mealsPlan = [];
      const newMeal = { ...meal, category: "Завтрак" };
      mealsPlan.push(newMeal);
      localStorage.setItem("products", JSON.stringify(mealsPlan));
    }
  };
  return (
    <Box className={styles.wrapper__cart}>
      {meals.map((item) => (
        <Box key={shortid.generate()} className={styles.cart}>
          <Typography variant="h6" component="h3">
            Название: {item.Name}
          </Typography>
          <Typography variant="h6" component="h3">
            Граммы: {item.Gramms}
          </Typography>
          <Typography variant="h6" component="h3">
            Протеин: {item.Protein}
          </Typography>
          <Typography variant="h6" component="h3">
            Жиры: {item.Fats}
          </Typography>
          <Typography variant="h6" component="h3">
            Карбонаты: {item.Carbs}
          </Typography>
          <Typography variant="h6" component="h3">
            Калории: {item.Calories}
          </Typography>
          <Button type="button" onClick={() => addMeal(item)}>
            Добавить в план
          </Button>
          <Button type="button" onClick={() => deleteMeal(item)}>
            Удалить
          </Button>
        </Box>
      ))}
    </Box>
  );
}

export default MealsList;
