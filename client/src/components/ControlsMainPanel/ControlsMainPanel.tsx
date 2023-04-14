import {
  Box,
  Select,
  MenuItem,
  TextField,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState, MouseEvent } from "react";
import shortid from "shortid";
import { IControlsMainPanel, IProduct } from "../../types/types";
import styles from "./ControlsMainPanel.module.scss";

function ControlsMainPanel(props: IControlsMainPanel) {
  const { meals, setMealsList, setVisible } = props;
  const [nameMeal, setNameMeal] = useState("");
  const [mealCategory, setMealCategory] = useState({} as IProduct);
  const [categoty, setCategory] = useState("");

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
        label="Введите название продукта"
        variant="filled"
        size="medium"
        type="search"
        value={nameMeal}
        fullWidth
        onChange={(e) => setNameMeal(e.target.value)}
        className={styles.input__search}
      />
      <Box onClick={viewAddListCurrencies} className={styles.view__panel}>
        Добавить Продукт
      </Box>
    </Box>
  );
}

export default ControlsMainPanel;
