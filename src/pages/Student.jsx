import React from "react";
import Dashboard from "./../components/Dashboard";

const Student = () => {
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
        Student
      </div>
    </div>
  );
};

export default Student;
