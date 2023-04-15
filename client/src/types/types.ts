export interface IMeal {
  Name: string;
  Gramms: string;
  Protein: string;
  Fats: string;
  Carbs: string;
  Calories: string;
}

export interface IProduct {
  name: string;
  description: string;
  Product: IMeal[];
}

export interface IAllMeals {
  Category: IProduct[];
}

export interface IMealsState {
  [products: string]: Record<string, IAllMeals>;
}

export interface ITotalStats {
  gramms: number;
  protein: number;
  fats: number;
  carbs: number;
  calories: number;
}

export interface IMealResult extends ITotalStats {
  normalCalories: number;
}

export interface IExportPlan {
  meals: IPlanMeal[];
  totalInf: IMealResult;
}

export interface IInformationUser {
  activityUser: string;
  ageUser: string;
  growthUser: string;
  weightUser: string;
}

export interface IPlanMeal extends IMeal {
  category: string;
}

export interface IChildernProps {
  children: React.ReactNode;
  className?: string;
}

export interface IMealsProps {
  meals: IAllMeals;
  setMeals: Function;
}

export interface IMealsListProps {
  meals: IMeal[];
  setMeals: Function;
}

export interface IModalComponentProps extends IChildernProps {
  visible: boolean;
  setVisible: Function;
}

export interface IAddMealProps {
  meals: IAllMeals;
  setMeals: Function;
  visible: boolean;
  setVisible: Function;
}

export interface IDayPanelProps {
  category: string;
  setCategory: Function;
}

export interface ISelectCategoryProps {
  meals: IPlanMeal[];
  setMeals: Function;
  setViewMeals: Function;
  meal: IPlanMeal;
  timeMeal: string;
}

export interface ITotalStatisticProps {
  meals: IPlanMeal[];
}

export interface IMainPagePanelProps {
  meals: IAllMeals;
  setMeals: Function;
  setMealsList: Function;
}

export interface IControlsMainPanelProps {
  meals: IAllMeals;
  setMealsList: Function;
  setVisible: Function;
}

export interface IMealCartProps {
  meals: IPlanMeal[];
  viewMeals: IPlanMeal[];
  setMeals: Function;
  setViewMeals: Function;
  timeMeal: string;
}

export interface IMealCartInfProps {
  meal: IPlanMeal;
}

export interface IMealCartControlsProps {
  meals: IPlanMeal[];
  setMeals: Function;
  setViewMeals: Function;
  timeMeal: string;
  mealCart: IPlanMeal;
}

export interface IControlsInfUserProps {
  setVisible: Function;
}
