import { IInformationUser, IPlanMeal } from "../types/types";
import activityCoefficient from "./constants";

export function calculateSubstances(meal: IPlanMeal, substance: string) {
  return (
    Math.round(
      (parseFloat(substance.replace(",", ".")) / 100) *
        Number(meal.Gramms) *
        100,
    ) / 100
  );
}

export function hasEmptyFields(obj: any) {
  return Object.values(obj).some(
    (value) => typeof value === "string" && value.trim() === "",
  );
}

export function calculateDailyQuota(inf: IInformationUser) {
  const bmr =
    Math.round(
      (447.593 +
        (9.247 * parseFloat(inf.weightUser.replace(",", ".")) +
          3.098 * parseFloat(inf.growthUser.replace(",", ".")) -
          4.33 * parseFloat(inf.ageUser.replace(",", "."))) /
          100) *
        100,
    ) / 100;
  const arm = activityCoefficient[inf.activityUser];
  return bmr + arm;
}
