import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./slices/rootSlice";

export const store = configureStore({
  reducer: {
    root: rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
