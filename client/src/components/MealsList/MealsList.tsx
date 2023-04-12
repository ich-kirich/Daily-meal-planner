import { Box, Typography } from "@mui/material";
import shortid from "shortid";
import { IMealsListProps } from "../../types/types";
import styles from "./MealsList.module.scss";

function MealsList(props: IMealsListProps) {
  const { meals } = props;
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
        </Box>
      ))}
    </Box>
  );
}

export default MealsList;
