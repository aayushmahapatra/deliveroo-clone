import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IRestaurant, IRestaurantState } from "./restaurant.interface";

const initialState: IRestaurantState = {
  restaurant: {
    id: null,
    imgUrl: "",
    title: "",
    rating: null,
    genre: "",
    address: "",
    short_description: "",
    dishes: null,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<IRestaurant>) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;
