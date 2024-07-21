import React from "react";
import Dashboard from "../components/Dashboard";

const Teacher = () => {
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
        Teacher
      </div>
    </div>
  );
};

export default Teacher;
