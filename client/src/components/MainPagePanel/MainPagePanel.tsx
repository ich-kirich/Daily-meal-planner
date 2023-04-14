import { Box } from "@mui/material";
import { useState } from "react";
import { IMainPagePanel } from "../../types/types";
import AddMeal from "../AddMeal/AddMeal";
import ControlsMainPanel from "../ControlsMainPanel/ControlsMainPanel";
import ModalComponent from "../ModalComponent/ModalComponent";

function MainPagePanel(props: IMainPagePanel) {
  const { meals, setMeals, setMealsList } = props;
  const [visible, setVisible] = useState(false);

  return (
    <Box>
      <ControlsMainPanel
        meals={meals}
        setMealsList={setMealsList}
        setVisible={setVisible}
      />
      <ModalComponent visible={visible} setVisible={setVisible}>
        <AddMeal
          meals={meals}
          setMeals={setMeals}
          visible={visible}
          setVisible={setVisible}
        />
      </ModalComponent>
    </Box>
  );
}

export default MainPagePanel;
