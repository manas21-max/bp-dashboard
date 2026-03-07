import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function BPChart({ readings = [] }) {

  const data = {
    labels: readings.map((r, index) => `Reading ${index + 1}`),
    datasets: [
      {
        label: "Systolic",
        data: readings.map(r => r.systolic),
        borderColor: "red"
      },
      {
        label: "Diastolic",
        data: readings.map(r => r.diastolic),
        borderColor: "blue"
      }
    ]
  };

  return (
    <div style={{width:"600px", marginTop:"40px"}}>
      <Line data={data}/>
    </div>
  );
}

export default BPChart;