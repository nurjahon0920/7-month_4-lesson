import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import { Button } from "@mui/material";

const Teacher = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  const addItem = (name) => {
    const newItem = { id: items.length + 1, name };
    setItems([...items, newItem]);
  };
  const displayItems = items.map((item) => (
    <div key={item.id}>
      <span>{item.name}</span>
      <button onClick={() => updateItem(item.id)}>Edit</button>
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </div>
  ));
  const updateItem = (id) => {
    const updatedName = prompt("Enter the new name:");
    if (updatedName) {
      const updatedItems = items.map((item) =>
        item.id === id ? { ...item, name: updatedName } : item
      );
      setItems(updatedItems);
    }
  };
  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const etiv = e.target.itemName.value;
    if (!etiv == "") {
      addItem(etiv);
      etiv = "";
    }
  };
  return (
    <div style={{ display: "flex" }} className="container">
      <Dashboard />
      <div
        style={{
          paddingTop: "100px",
          display: "flex",
          flexDirection: "column",
          fontSize: "22px",
          gap: "15px",
        }}>
        <form onSubmit={handleSubmit}>
          <input type="text" name="itemName" placeholder="Enter item name" />
          <Button variant="contained" type="submit">
            Add Item
          </Button>
        </form>
        {displayItems}
      </div>
    </div>
  );
};

export default Teacher;
