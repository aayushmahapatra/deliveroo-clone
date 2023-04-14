export interface IBasketState {
  items: IDishRow[];
}

export interface IDishRow {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}
