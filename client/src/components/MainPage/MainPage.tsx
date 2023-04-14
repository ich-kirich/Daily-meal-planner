import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import getMeal from "../../API/PostService";
import useFetching from "../../hooks/useFetching";
import { IAllMeals, IMealsState } from "../../types/types";
import Loader from "../Loader/Loader";
import Meals from "../Meals/Meals";
import ViewError from "../ViewError/ViewError";

function MainPage() {
  const [meals, setMeals] = useState<IAllMeals>({} as IAllMeals);
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
            <Meals meals={meals} setMeals={setMeals} />
          )}
        </Box>
      )}
    </Container>
  );
}

export default MainPage;
