import {
  Box,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState, MouseEvent } from "react";
import shortid from "shortid";
import { IControlsInfUser } from "../../types/types";
import { hasEmptyFields } from "../../utils/utils";
import styles from "./ControlsInfUser.module.scss";

function ControlsInfUser(props: IControlsInfUser) {
  const { setVisible } = props;
  const [weight, setWeight] = useState("");
  const [growth, setGrowth] = useState("");
  const [age, setAge] = useState("");
  const activityList = [
    "Низкая активность",
    "Средняя активность",
    "Высокая активность",
  ];
  const [activity, setActivity] = useState(activityList[0]);
  const [errorView, setErrorView] = useState(false);

  const handleChange = (e: SelectChangeEvent) => {
    setActivity(e.target.value as string);
  };

  const SaveInformation = (e: MouseEvent) => {
    e.stopPropagation();
    const informationUser = {
      weightUser: weight,
      growthUser: growth,
      ageUser: age,
      activityUser: activity,
    };
    e.stopPropagation();
    if (hasEmptyFields(informationUser)) {
      setErrorView(true);
      setTimeout(() => setErrorView(false), 1000);
    } else {
      localStorage.setItem("informationUser", JSON.stringify(informationUser));
      setVisible(false);
    }
  };

  return (
    <Box className={styles.wrapper__stats}>
      <TextField
        id="weight"
        label="Введите ваш вес"
        variant="filled"
        size="medium"
        type="text"
        value={weight}
        fullWidth
        onChange={(e) =>
          Number(e.target.value) >= 0 && setWeight(e.target.value)
        }
        className={styles.input__search}
      />
      <TextField
        id="growth"
        label="Введите ваш рост (в сантиметрах)"
        variant="filled"
        size="medium"
        type="text"
        value={growth}
        fullWidth
        onChange={(e) =>
          Number(e.target.value) >= 0 && setGrowth(e.target.value)
        }
        className={styles.input__search}
      />
      <TextField
        id="age"
        label="Введите ваш возраст"
        variant="filled"
        size="medium"
        type="text"
        value={age}
        fullWidth
        onChange={(e) => Number(e.target.value) >= 0 && setAge(e.target.value)}
        className={styles.input__search}
      />
      <Select value={activity} onChange={handleChange}>
        {activityList.map((item) => (
          <MenuItem key={shortid.generate()} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
      <Button
        onClick={SaveInformation}
        className={styles.view__panel}
        disabled={errorView}
        variant="contained"
        color="primary"
      >
        {errorView ? "Некорректный ввод!" : "Сохранить информацию"}
      </Button>
    </Box>
  );
}

export default ControlsInfUser;
