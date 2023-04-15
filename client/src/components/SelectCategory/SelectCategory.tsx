import { Box, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import shortid from "shortid";
import { IPlanMeal, ISelectCategoryProps } from "../../types/types";

function SelectCategory(props: ISelectCategoryProps) {
  const { meal, meals, setMeals, timeMeal, setViewMeals } = props;
  const time = ["Завтрак", "Обед", "Ужин"];
  const handleChange = (event: SelectChangeEvent) => {
    meal.category = event.target.value as string;
    const newMeals = meals.map((item) => {
      if (item.Name === meal.Name) {
        return { ...item, category: meal.category };
      }
      return item;
    });
    localStorage.setItem("products", JSON.stringify(newMeals));
    setViewMeals(
      (JSON.parse(localStorage.getItem("products")!) as IPlanMeal[]).filter(
        (item) => item.category === timeMeal,
      ),
    );
    setMeals(newMeals);
  };
  return (
    <Box>
      <Select value={meal.category} onChange={handleChange}>
        {time.map((item) => (
          <MenuItem key={shortid.generate()} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}

export default SelectCategory;
