import React from "react";
import "Dashboard.css";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  return (
    <div>
      <h1>This is Dashboard</h1>

      <h2>{`welcome ${location.state.email}`}</h2>
    </div>
  );
}

export default Dashboard;
