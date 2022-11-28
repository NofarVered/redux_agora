import { createSlice } from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      let newItem = action.payload;
      state.items.push(newItem);
    },

    deleteItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },

    changePrice: (state, action) => {
      const { name, price } = action.payload;
      let currItem = state.items.find((i) => i.name === name);
      currItem.price = price;
    },
  },
});

export const { addItem, deleteItem, changePrice } = inventorySlice.actions;

export const selectInventory = (state) => state.inventory.items;
export default inventorySlice.reducer;
