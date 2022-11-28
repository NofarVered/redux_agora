import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "../components/Inventory/inventorySlice";

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
  },
});
