import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState, Product } from "../types";

const initialState: InitialState = {
  products: [],
  basket: {
    products: [],
    totalPrice: 0,
    totalCount: 0,
  },
};

const rootSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Partial<Product[]>>) => {
      const newProducts = { ...state.products, ...action.payload } as Product[];
      if (!state.products) {
        return;
      }
      state.products = newProducts;
    },
    resetStore: (state) => {
      // const { products } = state;
      const resetState = {
        ...initialState,
      };
      return { ...resetState };
    },
  },
});

export const { setProducts, resetStore } = rootSlice.actions;

export const rootReducer = rootSlice.reducer;
