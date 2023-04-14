import { IPlanMeal } from "../types/types";

function calculateSubstances(meal: IPlanMeal, substance: string) {
  return (
    Math.round(
      (parseFloat(substance.replace(",", ".")) / 100) *
        Number(meal.Gramms) *
        100,
    ) / 100
  );
}

export default calculateSubstances;
