import { configureStore } from "@reduxjs/toolkit";
import { itemSlice } from "./reducers/item";

export const store = configureStore({
  reducer: {
    item: itemSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
