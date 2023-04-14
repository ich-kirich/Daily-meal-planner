import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { IAddMealProp } from "../../types/types";
import styles from "./AddMeal.module.scss";

function AddMeal(props: IAddMealProp) {
  const { meals, setMeals, visible, setVisible } = props;
  const [category, setCategory] = useState("");
  const [nameMeal, setNameMeal] = useState("");
  const [gramms, setGramms] = useState("");
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
        label="Enter a name of category"
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
        label="Enter a name of category"
        variant="filled"
        size="medium"
        type="search"
        value={nameMeal}
        fullWidth
        onChange={(e) => setNameMeal(e.target.value)}
        className={styles.meal__input}
      />
      <TextField
        id="gramms"
        label="Enter count of gramms"
        variant="filled"
        size="medium"
        type="search"
        value={gramms}
        fullWidth
        onChange={(e) => setGramms(e.target.value)}
        className={styles.meal__input}
      />
      <TextField
        id="protein"
        label="Enter count of protein"
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
        label="Enter count of fats"
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
        label="Enter count of carbs"
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
        label="Enter count of calories"
        variant="filled"
        size="medium"
        type="search"
        value={calories}
        fullWidth
        onChange={(e) => setCalories(e.target.value)}
        className={styles.meal__input}
      />
      <Box onClick={addMeal} className={styles.view__panel}>
        Add Meal
      </Box>
    </Box>
  );
}

export default AddMeal;
