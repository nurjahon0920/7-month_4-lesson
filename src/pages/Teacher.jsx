import React, { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import "../App.css";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import axios from "axios";

const Teacher = () => {
  const [items, setItems] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [level, setLevel] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/teachers`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const addItem = (firstName, lastName, level) => {
    const newItem = { id: items.length + 1, firstName, lastName, level };
    setItems([...items, newItem]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && level) {
      addItem(firstName, lastName, level);
      setFirstName("");
      setLastName("");
      setLevel("");
    }
  };

  const updateItem = (id) => {
    const updatedFirstName = prompt("Enter the new firstName:");
    const updatedLastName = prompt("Enter the new lastName:");
    const updatedLevel = prompt("Enter the new level:");
    if (updatedFirstName && updatedLastName && updatedLevel) {
      const updatedItems = items.map((item) =>
        item.id === id
          ? {
              ...item,
              firstName: updatedFirstName,
              lastName: updatedLastName,
              level: updatedLevel,
            }
          : item
      );
      setItems(updatedItems);
    }
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
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
        <form onSubmit={handleSubmit} className="fetch_form">
          <TextField
            variant="outlined"
            type="text"
            name="firstName"
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <TextField
            variant="outlined"
            type="text"
            name="lastName"
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <TextField
            variant="outlined"
            type="text"
            name="level"
            label="Level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
          />
          <Button variant="contained" type="submit" sx={{ height: "53px" }}>
            Add Item
          </Button>
        </form>
        {/* <TableContainer> */}
        <Table sx={{ marginLeft: "0", marginTop: "0" }} className="Table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Level</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.level}</TableCell>
                <Button variant="contained" onClick={() => updateItem(item.id)}>
                  Edit
                </Button>
                <Button variant="contained" onClick={() => deleteItem(item.id)}>
                  Delete
                </Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* </TableContainer> */}
      </div>
    </div>
  );
};

export default Teacher;
