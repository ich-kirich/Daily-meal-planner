import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import shortid from "shortid";
import { IMeal } from "../../types/types";
import styles from "./PlanMeal.module.scss";

function PlanMeal() {
  const [meals, setMeals] = useState<IMeal[]>(
    (JSON.parse(localStorage.getItem("products")!) as []) || [],
  );
  const deleteMeal = (meal: IMeal) => {
    const updateMeals: IMeal[] = [...meals].filter((item) => item !== meal);
    localStorage.setItem("products", JSON.stringify(updateMeals));
    setMeals(updateMeals);
  };
  return (
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
          <Button type="button" onClick={() => deleteMeal(item)}>
            Удалить
          </Button>
        </Box>
      ))}
    </Box>
  );
}

export default PlanMeal;
