import { Box, Typography } from "@mui/material";
import { ITotalStatistic } from "../../types/types";
import { calculateDailyQuota, calculateSubstances } from "../../utils/utils";
import styles from "./TotalStatistic.module.scss";

function TotalStatistic(props: ITotalStatistic) {
  const { meals } = props;

  const userInformation: number = calculateDailyQuota(
    JSON.parse(localStorage.getItem("informationUser")!),
  );

  const createTotalStats = () => {
    const totalStats = {
      gramms: 0.0,
      protein: 0.0,
      fats: 0.0,
      carbs: 0.0,
      calories: 0.0,
    };
    meals.map((item) => {
      totalStats.gramms += Number(item.Gramms);
      totalStats.protein =
        Math.round(
          (totalStats.protein + calculateSubstances(item, item.Protein)) * 100,
        ) / 100;
      totalStats.fats =
        Math.round(
          (totalStats.fats + calculateSubstances(item, item.Fats)) * 100,
        ) / 100;
      totalStats.carbs =
        Math.round(
          (totalStats.carbs + calculateSubstances(item, item.Carbs)) * 100,
        ) / 100;
      totalStats.calories =
        Math.round(
          (totalStats.calories + calculateSubstances(item, item.Calories)) *
            100,
        ) / 100;
      return item;
    });
    return totalStats;
  };

  const stats = createTotalStats();

  return (
    <Box className={styles.wrapper__total}>
      <Typography variant="h6" component="h3">
        Граммы: {stats.gramms}
      </Typography>
      <Typography variant="h6" component="h3">
        Протеин: {stats.protein}
      </Typography>
      <Typography variant="h6" component="h3">
        Жиры: {stats.fats}
      </Typography>
      <Typography variant="h6" component="h3">
        Карбонаты: {stats.carbs}
      </Typography>
      <Typography variant="h6" component="h3">
        Калории: {stats.calories} / {userInformation}
      </Typography>
      <Typography variant="h6" component="h3">
        Суточная норма каллорий: {userInformation}
      </Typography>
    </Box>
  );
}

export default TotalStatistic;
