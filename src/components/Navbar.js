import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px",
      background: "#2563eb",
      color: "white"
    }}>
      <h2>BP Monitor</h2>

      <div>
        <Link to="/" style={{color:"white", marginRight:"20px"}}>Login</Link>
        <Link to="/register" style={{color:"white", marginRight:"20px"}}>Register</Link>
        <Link to="/dashboard" style={{color:"white"}}>Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;