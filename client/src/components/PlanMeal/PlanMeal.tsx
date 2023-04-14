import { Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import shortid from "shortid";
import { IPlanMeal } from "../../types/types";
import DayPanel from "../DayPanel/DayPanel";
import SelectCategory from "../SelectCategory/SelectCategory";
import styles from "./PlanMeal.module.scss";

function PlanMeal() {
  const [timeMeal, setTimeMeal] = useState("Завтрак");
  let planMeals: IPlanMeal[] = [];
  if (localStorage.getItem("products")) {
    planMeals = JSON.parse(localStorage.getItem("products")!);
  }
  const [meals, setMeals] = useState<IPlanMeal[]>(planMeals);
  const [viewMeals, setViewMeals] = useState<IPlanMeal[]>(
    meals.filter((item: IPlanMeal) => item.category === timeMeal),
  );
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
    meal.Calories = String(
      (
        (Number(meal.Gramms) / 100) *
        parseFloat(meal.Calories.replace(",", "."))
      ).toFixed(2),
    );
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

  useEffect(() => {
    if (localStorage.getItem("products")) {
      setViewMeals(
        (JSON.parse(localStorage.getItem("products")!) as IPlanMeal[]).filter(
          (item) => item.category === timeMeal,
        ),
      );
    }
  }, [timeMeal]);
  return (
    <Box className={styles.wrapper__plan}>
      <DayPanel setCategory={setTimeMeal} category={timeMeal} />
      <Box className={styles.wrapper__cart}>
        {viewMeals.map((item) => (
          <Box key={shortid.generate()} className={styles.cart}>
            <SelectCategory
              meal={item}
              meals={meals}
              setViewMeals={setViewMeals}
              setMeals={setMeals}
              timeMeal={timeMeal}
            />
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
