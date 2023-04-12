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

export interface IChildernProps {
  children: React.ReactNode;
  className?: string;
}
