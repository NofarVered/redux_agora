import React from "react";
import { addItem, deleteItem, changePrice } from "./inventorySlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Item from "../Item/item";

export default function Inventory() {
  const [inputs, setInputs] = useState({ name: "", price: "" });
  const inventory = useSelector(selectInventory);
  const dispatch = useDispatch();

  const deleteItemFromStore = function (name) {
    dispatch(deleteItem(name));
  };

  const addNewItemToStore = function () {
    dispatch(addItem({ name: inputs.name, price: inputs.price }));
  };

  const updatePrice = function (product) {
    dispatch(changePrice(product));
  };

  const handleInput = function (event) {};

  return (
    <div>
      <h1>Number of items {inventory.length}</h1>
      <div>
        {inventory.map((item) => (
          <Item
            key={item.name}
            item={item}
            deleteItemFromStore={deleteItemFromStore}
            updatePrice={updatePrice}
          />
        ))}
      </div>
    </div>
  );
}
