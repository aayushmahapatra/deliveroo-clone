import { IBasketState } from "./basket/basket.interface";
import { IRestaurantState } from "./restaurant/restaurant.interface";

export interface IRootState {
  basket: IBasketState;
  restaurant: IRestaurantState;
}
