import { Button, Typography } from "@mui/material";
import { saveAs } from "file-saver";
import { useState } from "react";
import { IExportPlan } from "../../types/types";
import styles from "./DownloadPlan.module.scss";

function DownloadPlan() {
  const [errorView, setErrorView] = useState(false);

  const downloadFile = () => {
    if (localStorage.getItem("products")) {
      const dataMeals = JSON.parse(localStorage.getItem("products")!);
      const dataTotalInf = JSON.parse(localStorage.getItem("mealTotalResult")!);
      const data: IExportPlan = { meals: dataMeals, totalInf: dataTotalInf };
      const jsonString = JSON.stringify(data);
      const blob = new Blob([jsonString], { type: "application/json" });
      saveAs(blob, "plan.json");
    } else {
      setErrorView(true);
      setTimeout(() => setErrorView(false), 1000);
    }
  };
  return (
    <Button
      type="button"
      onClick={downloadFile}
      className={styles.download__button}
    >
      <Typography variant="body1" component="h6">
        {errorView ? "Пустой план питания!" : "Экспортировать план питания"}
      </Typography>
    </Button>
  );
}

export default DownloadPlan;
