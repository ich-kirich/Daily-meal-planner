import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useEffect, useState, MouseEvent } from "react";
import shortid from "shortid";
import { IMeal, IMealsProps, IProduct } from "../../types/types";
import AddMeal from "../AddMeal/AddMeal";
import MealsList from "../MealsList/MealsList";
import ModalComponent from "../ModalComponent/ModalComponent";
import styles from "./Meals.module.scss";

function Meals(props: IMealsProps) {
  const { meals, setMeals } = props;
  const [categoty, setCategory] = useState("");
  const [nameMeal, setNameMeal] = useState("");
  const [mealCategory, setMealCategory] = useState({} as IProduct);
  const [mealsList, setMealsList] = useState([] as IMeal[]);
  const [visible, setVisible] = useState(false);
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

  const viewAddListCurrencies = (e: MouseEvent) => {
    e.stopPropagation();
    setVisible(true);
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
          className={styles.currency__input}
        />
        <Box onClick={viewAddListCurrencies} className={styles.view__panel}>
          Add Meal
        </Box>
        <ModalComponent visible={visible} setVisible={setVisible}>
          <AddMeal
            meals={meals}
            setMeals={setMeals}
            visible={visible}
            setVisible={setVisible}
          />
        </ModalComponent>
      </Box>
      <MealsList meals={mealsList} setMeals={setMealsList} />
    </Box>
  );
}

export default Meals;
