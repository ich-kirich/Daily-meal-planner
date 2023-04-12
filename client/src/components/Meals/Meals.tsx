import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import shortid from "shortid";
import { IMeal, IMealsProps, IProduct } from "../../types/types";
import MealsList from "../MealsList/MealsList";
import styles from "./Meals.module.scss";

function Meals(props: IMealsProps) {
  const { meals } = props;
  const [categoty, setCategory] = useState("");
  const [nameMeal, setNameMeal] = useState("");
  const [mealCategory, setMealCategory] = useState({} as IProduct);
  const [mealsList, setMealsList] = useState([] as IMeal[]);
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
    const updateMeal = meals.Category.find(
      (item) => item.name === (event.target.value as string),
    );
    setMealCategory(updateMeal!);
    const updateMealList = updateMeal!.Product.filter((item) =>
      item.Name.toLowerCase().includes(nameMeal.toLowerCase()),
    );
    setMealsList(updateMealList);
  };

  useEffect(() => {
    if (Object.keys(mealCategory).length !== 0) {
      const updateMeal = mealCategory.Product.filter((item) =>
        item.Name.toLowerCase().includes(nameMeal.toLowerCase()),
      );
      setMealsList(updateMeal);
    }
  }, [nameMeal]);
  return (
    <Box>
      <Box className={styles.control__panel}>
        <Select value={categoty} onChange={handleChange}>
          {Object.keys(meals).length !== 0 &&
            meals.Category.map((item) => (
              <MenuItem key={shortid.generate()} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
        </Select>
        <TextField
          id="meal"
          label="Enter a name of meal"
          variant="filled"
          size="medium"
          type="search"
          value={nameMeal}
          fullWidth
          onChange={(e) => setNameMeal(e.target.value)}
          className={styles.seach__input}
        />
      </Box>
      <MealsList key={shortid.generate()} meals={mealsList} />
    </Box>
  );
}

export default Meals;
