import { Box } from "@mui/material";
import shortid from "shortid";
import { IMealCartProps } from "../../types/types";
import MealCartControls from "../MealCartControls/MealCartControls";
import MealCartInf from "../MealCartInf/MealCartInf";
import SelectCategory from "../SelectCategory/SelectCategory";
import styles from "./MealCart.module.scss";

function MealCart(props: IMealCartProps) {
  const { meals, setMeals, setViewMeals, timeMeal, viewMeals } = props;

  return (
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
          <MealCartInf meal={item} />
          <MealCartControls
            meals={meals}
            setMeals={setMeals}
            setViewMeals={setViewMeals}
            timeMeal={timeMeal}
            mealCart={item}
          />
        </Box>
      ))}
    </Box>
  );
}

export default MealCart;
