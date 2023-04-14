import { Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import shortid from "shortid";
import { IPlanMeal } from "../../types/types";
import DayPanel from "../DayPanel/DayPanel";
import styles from "./PlanMeal.module.scss";

function PlanMeal() {
  const [timeMeal, setTimeMeal] = useState("Завтрак");
  const [meals, setMeals] = useState<IPlanMeal[]>(
    (JSON.parse(localStorage.getItem("products")!) as IPlanMeal[]).filter(
      (item) => item.category !== timeMeal,
    ) || [],
  );
  const deleteMeal = (meal: IPlanMeal) => {
    const updateMeals: IPlanMeal[] = [...meals].filter((item) => item !== meal);
    localStorage.setItem("products", JSON.stringify(updateMeals));
    setMeals(updateMeals);
  };
  const minusGramms = (meal: IPlanMeal) => {
    if (Number(meal.Gramms) > 0) {
      meal.Gramms = String(Number(meal.Gramms) - 100);
      if (Number(meal.Gramms) === 0) {
        deleteMeal(meal);
      } else {
        console.log(Number(meal.Gramms) / 100);
        meal.Protein = String(
          (parseFloat(meal.Protein.replace(",", ".")) / 2).toFixed(2),
        );
        meal.Fats = String(
          (parseFloat(meal.Fats.replace(",", ".")) / 2).toFixed(2),
        );
        meal.Carbs = String(
          (parseFloat(meal.Carbs.replace(",", ".")) / 2).toFixed(2),
        );
        meal.Calories = String(Number(meal.Calories) / 2);
        localStorage.setItem("products", JSON.stringify(meals));
        setMeals(JSON.parse(localStorage.getItem("products")!) as []);
      }
    }
  };
  const plusGramms = (meal: IPlanMeal) => {
    meal.Gramms = String(Number(meal.Gramms) + 100);
    meal.Protein = String(
      (
        (Number(meal.Gramms) / 100) *
        parseFloat(meal.Protein.replace(",", "."))
      ).toFixed(2),
    );
    meal.Fats = String(
      (
        (Number(meal.Gramms) / 100) *
        parseFloat(meal.Fats.replace(",", "."))
      ).toFixed(2),
    );
    meal.Carbs = String(
      (
        (Number(meal.Gramms) / 100) *
        parseFloat(meal.Carbs.replace(",", "."))
      ).toFixed(2),
    );
    meal.Calories = String((Number(meal.Gramms) / 100) * Number(meal.Calories));
    localStorage.setItem("products", JSON.stringify(meals));
    setMeals(JSON.parse(localStorage.getItem("products")!) as []);
  };

  useEffect(() => {
    setMeals(
      (JSON.parse(localStorage.getItem("products")!) as IPlanMeal[]).filter(
        (item) => item.category !== timeMeal,
      ),
    );
  }, [timeMeal]);
  return (
    <Box>
      <DayPanel setCategory={setTimeMeal} category={timeMeal} />
      <Box className={styles.wrapper__cart}>
        {meals.map((item) => (
          <Box key={shortid.generate()} className={styles.cart}>
            <Typography variant="h6" component="h3">
              Name: {item.Name}
            </Typography>
            <Typography variant="h6" component="h3">
              Gramms: {item.Gramms}
            </Typography>
            <Typography variant="h6" component="h3">
              Protein: {item.Protein}
            </Typography>
            <Typography variant="h6" component="h3">
              Fats: {item.Fats}
            </Typography>
            <Typography variant="h6" component="h3">
              Carbs: {item.Carbs}
            </Typography>
            <Typography variant="h6" component="h3">
              Calories: {item.Calories}
            </Typography>
            <Button type="button" onClick={() => plusGramms(item)}>
              Increase the number of grams
            </Button>
            <Button type="button" onClick={() => minusGramms(item)}>
              Reduce the number of grams
            </Button>
            <Button type="button" onClick={() => deleteMeal(item)}>
              Удалить
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default PlanMeal;
