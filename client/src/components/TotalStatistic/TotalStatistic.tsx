import { Box, Typography } from "@mui/material";
import { ITotalStatistic } from "../../types/types";
import styles from "./TotalStatistic.module.scss";

function TotalStatistic(props: ITotalStatistic) {
  const { meals } = props;
  const createTotalStats = () => {
    const totalStats = {
      gramms: 0,
      protein: 0,
      fats: 0,
      carbs: 0,
      calories: 0,
    };
    meals.map((item) => {
      totalStats.gramms += Number(item.Gramms);
      totalStats.protein += Number(
        Number(parseFloat(item.Protein.replace(",", "."))).toFixed(2),
      );
      totalStats.fats += Number(
        Number(parseFloat(item.Fats.replace(",", "."))).toFixed(2),
      );
      totalStats.carbs += Number(
        Number(parseFloat(item.Carbs.replace(",", "."))).toFixed(2),
      );
      totalStats.calories += Number(
        Number(parseFloat(item.Calories.replace(",", "."))).toFixed(2),
      );
      return item;
    });
    console.log(totalStats);
    return totalStats;
  };
  const stats = createTotalStats();
  return (
    <Box className={styles.wrapper__total}>
      <Typography variant="h6" component="h3">
        Gramms: {stats.gramms}
      </Typography>
      <Typography variant="h6" component="h3">
        Protein: {stats.protein}
      </Typography>
      <Typography variant="h6" component="h3">
        Fats: {stats.fats}
      </Typography>
      <Typography variant="h6" component="h3">
        Carbs: {stats.carbs}
      </Typography>
      <Typography variant="h6" component="h3">
        Calories: {stats.calories}
      </Typography>
    </Box>
  );
}

export default TotalStatistic;
