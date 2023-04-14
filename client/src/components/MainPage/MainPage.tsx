import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import getMeal from "../../API/PostService";
import useFetching from "../../hooks/useFetching";
import { IAllMeals } from "../../types/types";
import ControlsInfUser from "../ControlsInfUser/ControlsInfUser";
import Loader from "../Loader/Loader";
import Meals from "../Meals/Meals";
import StatsAboutUser from "../StatsAboutUser/StatsAboutUser";
import ViewError from "../ViewError/ViewError";

function MainPage() {
  const [meals, setMeals] = useState<IAllMeals>({} as IAllMeals);
  const [visible, setVisible] = useState(true);
  const [fetchMeal, isAllCurrLoading, isErrorAllCurr] = useFetching(
    async () => {
      const response = await getMeal();
      setMeals({ ...response.data });
    },
  );
  useEffect(() => {
    fetchMeal();
  }, []);
  return (
    <Container maxWidth="sm">
      {isErrorAllCurr ? (
        <ViewError>{isErrorAllCurr}</ViewError>
      ) : (
        <Box>
          {isAllCurrLoading ? (
            <Loader />
          ) : (
            <Box>
              {!localStorage.getItem("informationUser") && (
                <StatsAboutUser visible={visible} setVisible={setVisible}>
                  <ControlsInfUser setVisible={setVisible} />
                </StatsAboutUser>
              )}
              <Meals meals={meals} setMeals={setMeals} />
            </Box>
          )}
        </Box>
      )}
    </Container>
  );
}

export default MainPage;
