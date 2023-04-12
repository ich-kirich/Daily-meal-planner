import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import getMeal from "../../API/PostService";
import useFetching from "../../hooks/useFetching";
import { IAllMeals } from "../../types/types";
import Loader from "../Loader/Loader";
import ViewError from "../ViewError/ViewError";
import styles from "./MainPage.module.scss";

function MainPage() {
  const [meals, setMeals] = useState({} as IAllMeals);
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
    <Container maxWidth="sm" className={styles.shortner__selector}>
      {isErrorAllCurr ? (
        <ViewError>{isErrorAllCurr}</ViewError>
      ) : (
        <Box>{isAllCurrLoading ? <Loader /> : <Box>1</Box>}</Box>
      )}
    </Container>
  );
}

export default MainPage;
