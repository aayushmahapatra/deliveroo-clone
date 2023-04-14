import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IBasketState, IDishRow } from "./basket.interface";

const initialState: IBasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<IDishRow>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let updatedBasket = [...state.items];

      if (itemIndex >= 0) {
        updatedBasket.splice(itemIndex, 1);
      }

      state.items = updatedBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
