import React, { useState } from "react";
import Shopping from "./Shopping";
import ShoppingForm from "./ShoppingForm";

export default function ShoppingList() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    if (!item.text || /^\s*$/.test(item.text)) {
      return;
    }

    const newItems = [item, ...items];

    setItems(newItems);
  };

  const updateItem = (itemId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setItems((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  const removeItem = (id) => {
    const removeArr = [...items].filter((item) => item.id !== id);

    setItems(removeArr);
  };

  const completeItem = (id) => {
    let updatedItems = items.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <div className="shoplist-001">
      <h1>必要なものがあるのか？</h1>
      <ShoppingForm onSubmit={addItem} />
      <Shopping
        items={items}
        completeItem={completeItem}
        removeItem={removeItem}
        updateItem={updateItem}
      />
    </div>
  );
}
