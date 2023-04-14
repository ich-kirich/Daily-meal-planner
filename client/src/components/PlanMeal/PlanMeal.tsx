import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { IPlanMeal } from "../../types/types";
import DayPanel from "../DayPanel/DayPanel";
import MealCart from "../MealCart/MealCart";
import TotalStatistic from "../TotalStatistic/TotalStatistic";
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
      <MealCart
        meals={meals}
        setMeals={setMeals}
        setViewMeals={setViewMeals}
        timeMeal={timeMeal}
        viewMeals={viewMeals}
      />
      <TotalStatistic meals={meals} />
    </Box>
  );
}

export default PlanMeal;
