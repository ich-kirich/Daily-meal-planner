import { Box } from "@mui/material";
import { useState } from "react";
import { IMeal, IMealsProps } from "../../types/types";
import MainPagePanel from "../MainPagePanel/MainPagePanel";
import MealsList from "../MealsList/MealsList";

function Meals(props: IMealsProps) {
  const { meals, setMeals } = props;
  const [mealsList, setMealsList] = useState([] as IMeal[]);

  return (
    <Box>
      <Box>
        <MainPagePanel
          meals={meals}
          setMeals={setMeals}
          setMealsList={setMealsList}
        />
      </Box>
      <MealsList meals={mealsList} setMeals={setMealsList} />
    </Box>
  );
}

export default Meals;
