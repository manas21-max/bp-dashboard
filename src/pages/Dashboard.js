import React, { useState } from "react";
import BPChart from "../components/BPChart";

function Dashboard() {

  const [readings, setReadings] = useState([
    { systolic: 120, diastolic: 80 },
    { systolic: 125, diastolic: 82 },
    { systolic: 118, diastolic: 78 }
  ]);

  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");

  const addReading = () => {

    if (!systolic || !diastolic) return;

    const newReading = {
      systolic: Number(systolic),
      diastolic: Number(diastolic)
    };

    setReadings([...readings, newReading]);

    setSystolic("");
    setDiastolic("");
  };

  const latest = readings[readings.length - 1];

  const status =
    latest.systolic > 130 || latest.diastolic > 85 ? "High" : "Normal";

  const statusColor =
    latest.systolic > 130 || latest.diastolic > 85 ? "red" : "green";

  return (
    <div style={{ padding: "30px" }}>

      <h1>Blood Pressure Dashboard</h1>

      {/* BP CARDS */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px"
        }}
      >

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            width: "200px"
          }}
        >
          <h3>Systolic</h3>
          <h2>{latest.systolic}</h2>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            width: "200px"
          }}
        >
          <h3>Diastolic</h3>
          <h2>{latest.diastolic}</h2>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            width: "200px"
          }}
        >
          <h3>Status</h3>
          <h2 style={{ color: statusColor }}>{status}</h2>
        </div>

      </div>

      {/* CHART */}
      <div style={{ marginTop: "40px", width: "600px" }}>
        <BPChart readings={readings} />
      </div>

      {/* ADD BP FORM */}
      <div
        style={{
          marginTop: "40px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          width: "400px"
        }}
      >

        <h3>Add BP Reading</h3>

        <input
          type="number"
          placeholder="Systolic"
          value={systolic}
          onChange={(e) => setSystolic(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px"
          }}
        />

        <input
          type="number"
          placeholder="Diastolic"
          value={diastolic}
          onChange={(e) => setDiastolic(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px"
          }}
        />

        <button
          onClick={addReading}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Add Reading
        </button>

      </div>

      {/* BP HISTORY TABLE */}
      <h3 style={{ marginTop: "40px" }}>BP History</h3>

      <table
        style={{
          width: "500px",
          borderCollapse: "collapse",
          marginTop: "10px",
          background: "white",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)"
        }}
      >
        <thead>
          <tr style={{ background: "#2563eb", color: "white" }}>
            <th style={{ padding: "10px" }}>Reading</th>
            <th style={{ padding: "10px" }}>Systolic</th>
            <th style={{ padding: "10px" }}>Diastolic</th>
          </tr>
        </thead>

        <tbody>
          {readings.map((r, index) => (
            <tr
              key={index}
              style={{
                textAlign: "center",
                borderBottom: "1px solid #ddd"
              }}
            >
              <td style={{ padding: "8px" }}>{index + 1}</td>
              <td style={{ padding: "8px" }}>{r.systolic}</td>
              <td style={{ padding: "8px" }}>{r.diastolic}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default Dashboard;