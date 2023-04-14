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

export interface IAddMealProp {
  meals: IAllMeals;
  setMeals: Function;
  visible: boolean;
  setVisible: Function;
}
