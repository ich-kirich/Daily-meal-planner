import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { IAddMealProp } from "../../types/types";
import styles from "./AddMeal.module.scss";

function AddMeal(props: IAddMealProp) {
  const { meals, setMeals, visible, setVisible } = props;
  const [category, setCategory] = useState("");
  const [nameMeal, setNameMeal] = useState("");
  const [gramms, setGramms] = useState("100");
  const [protein, setProtein] = useState("");
  const [fats, setFats] = useState("");
  const [carbs, setCarbs] = useState("");
  const [calories, setCalories] = useState("");

  const addMeal = () => {
    const addMeals = { ...meals };
    const newMeal = {
      name: category,
      description: "",
      Product: [
        {
          Name: nameMeal,
          Gramms: gramms,
          Protein: protein,
          Fats: fats,
          Carbs: carbs,
          Calories: calories,
        },
      ],
    };
    addMeals.Category.push(newMeal);
    setMeals(addMeals);
    setVisible(!visible);
  };

  return (
    <Box className={styles.wrapper__meal}>
      <TextField
        id="category"
        label="Введите название категории"
        variant="filled"
        size="medium"
        type="search"
        value={category}
        fullWidth
        onChange={(e) => setCategory(e.target.value)}
        className={styles.meal__input}
      />
      <TextField
        id="nameMeal"
        label="Введите название продукта"
        variant="filled"
        size="medium"
        type="search"
        value={nameMeal}
        fullWidth
        onChange={(e) => setNameMeal(e.target.value)}
        className={styles.meal__input}
      />
      <TextField
        id="protein"
        label="Введите количество протеина на 100 грамм"
        variant="filled"
        size="medium"
        type="search"
        value={protein}
        fullWidth
        onChange={(e) => setProtein(e.target.value)}
        className={styles.meal__input}
      />
      <TextField
        id="fats"
        label="Введите количество жиров на 100 грамм"
        variant="filled"
        size="medium"
        type="search"
        value={fats}
        fullWidth
        onChange={(e) => setFats(e.target.value)}
        className={styles.meal__input}
      />
      <TextField
        id="carbs"
        label="Введите количество карбонатов на 100 грамм"
        variant="filled"
        size="medium"
        type="search"
        value={carbs}
        fullWidth
        onChange={(e) => setCarbs(e.target.value)}
        className={styles.meal__input}
      />
      <TextField
        id="calories"
        label="Введите количество калорий на 100 грамм"
        variant="filled"
        size="medium"
        type="search"
        value={calories}
        fullWidth
        onChange={(e) => setCalories(e.target.value)}
        className={styles.meal__input}
      />
      <Box onClick={addMeal} className={styles.view__panel}>
        Добавить продукт
      </Box>
    </Box>
  );
}

export default AddMeal;
