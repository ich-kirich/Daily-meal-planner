import { Box, Typography } from "@mui/material";
import { IMealCartInfProps } from "../../types/types";
import { calculateSubstances } from "../../utils/utils";

function MealCartInf(props: IMealCartInfProps) {
  const { meal } = props;
  return (
    <Box>
      <Typography variant="h6" component="h3">
        Название: {meal.Name}
      </Typography>
      <Typography variant="h6" component="h3">
        Граммы: {meal.Gramms}
      </Typography>
      <Typography variant="h6" component="h3">
        Протеин: {calculateSubstances(meal, meal.Protein)}
      </Typography>
      <Typography variant="h6" component="h3">
        Жиры: {calculateSubstances(meal, meal.Fats)}
      </Typography>
      <Typography variant="h6" component="h3">
        Карбонаты: {calculateSubstances(meal, meal.Carbs)}
      </Typography>
      <Typography variant="h6" component="h3">
        Калории: {calculateSubstances(meal, meal.Calories)}
      </Typography>
    </Box>
  );
}

export default MealCartInf;
