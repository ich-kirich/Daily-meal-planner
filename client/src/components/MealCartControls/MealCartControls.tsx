import { Box, Button } from "@mui/material";
import { IMealCartControlsProps, IPlanMeal } from "../../types/types";
import styles from "./MealCartControls.module.scss";

function MealCartControls(props: IMealCartControlsProps) {
  const { meals, setMeals, setViewMeals, timeMeal, mealCart } = props;

  const deleteMeal = (meal: IPlanMeal) => {
    const updateMeals: IPlanMeal[] = [...meals].filter(
      (item) => item.Name !== meal.Name,
    );
    setMeals(updateMeals);
    localStorage.setItem("products", JSON.stringify(updateMeals));
    setViewMeals(
      (JSON.parse(localStorage.getItem("products")!) as IPlanMeal[]).filter(
        (item) => item.category === timeMeal,
      ),
    );
  };

  const minusGramms = (meal: IPlanMeal) => {
    if (Number(meal.Gramms) > 0) {
      meal.Gramms = String(Number(meal.Gramms) - 100);
      if (Number(meal.Gramms) === 0) {
        deleteMeal(meal);
      } else {
        const newMeals = meals.map((item) => {
          if (item.Name === meal.Name) {
            return { ...meal };
          }
          return item;
        });
        localStorage.setItem("products", JSON.stringify(newMeals));
        setMeals(JSON.parse(localStorage.getItem("products")!) as []);
        setViewMeals(
          (JSON.parse(localStorage.getItem("products")!) as IPlanMeal[]).filter(
            (item) => item.category === timeMeal,
          ),
        );
      }
    }
  };

  const plusGramms = (meal: IPlanMeal) => {
    meal.Gramms = String(Number(meal.Gramms) + 100);
    const newMeals = meals.map((item) => {
      if (item.Name === meal.Name) {
        return { ...meal };
      }
      return item;
    });
    localStorage.setItem("products", JSON.stringify(newMeals));
    setMeals(JSON.parse(localStorage.getItem("products")!) as []);
    setViewMeals(
      (JSON.parse(localStorage.getItem("products")!) as IPlanMeal[]).filter(
        (item) => item.category === timeMeal,
      ),
    );
  };

  return (
    <Box className={styles.wrapper__controls}>
      <Button type="button" onClick={() => plusGramms(mealCart)}>
        Увеличить количество грамм
      </Button>
      <Button type="button" onClick={() => minusGramms(mealCart)}>
        Уменьшить количество грамм
      </Button>
      <Button type="button" onClick={() => deleteMeal(mealCart)}>
        Удалить
      </Button>
    </Box>
  );
}

export default MealCartControls;
