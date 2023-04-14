export interface IRestaurantState {
  restaurant: IRestaurant;
}

export interface IRestaurant {
  id: number | null;
  imgUrl: string;
  title: string;
  rating: number | null;
  genre: string;
  address: string;
  short_description: string;
  dishes: never[] | null;
  long?: number | null;
  lat?: number | null;
}
