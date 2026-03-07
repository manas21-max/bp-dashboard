import React from "react";

function Login() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f0f4f8"
    }}>
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        width: "300px",
        textAlign: "center"
      }}>
        <h2>BP Monitoring Login</h2>

        <input
          type="text"
          placeholder="Email"
          style={{width:"100%", padding:"10px", margin:"10px 0"}}
        />

        <input
          type="password"
          placeholder="Password"
          style={{width:"100%", padding:"10px", margin:"10px 0"}}
        />

        <button style={{
          width:"100%",
          padding:"10px",
          background:"#2563eb",
          color:"white",
          border:"none",
          borderRadius:"5px"
        }}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;