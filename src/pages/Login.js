import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch("http://localhost:4444/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        alert("Login successful");

        // redirect to dashboard
        navigate("/dashboard");

      } else {
        alert(data.message || "Login failed");
      }

    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div style={{ display:"flex", justifyContent:"center", marginTop:"100px" }}>

      <form
        onSubmit={handleLogin}
        style={{
          width:"300px",
          padding:"30px",
          background:"white",
          boxShadow:"0 0 10px rgba(0,0,0,0.1)",
          borderRadius:"10px"
        }}
      >

        <h2 style={{ textAlign:"center" }}>BP Monitoring Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={{ width:"100%", padding:"10px", marginTop:"15px" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={{ width:"100%", padding:"10px", marginTop:"10px" }}
        />

        <button
          type="submit"
          style={{
            width:"100%",
            padding:"10px",
            marginTop:"20px",
            background:"#2563eb",
            color:"white",
            border:"none",
            borderRadius:"5px"
          }}
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;