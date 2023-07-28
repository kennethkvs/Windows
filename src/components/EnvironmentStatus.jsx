import React from "react";
import { ChartLine } from "@phosphor-icons/react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

export const EnvironmentStatus = () => {
  const data = {
    labels: ["1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "Current"],
    datasets: [
      {
        label: "Load",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const LineChart = new Chart("chart", {
    type: "line",
    data: data,
  });

  const data2 = {
    labels: ["20-12", "21-12", "22-12", "23-12", "24-12", "25-12", "26-12"],
    datasets: [
      {
        label: "Uptime",
        data: [100, 100, 100, 100, 100, 0, 100],
        backgroundColor: "rgb(0, 225, 0)",
        borderColor: "rgb(0, 225, 0)",
        fill: true,
      },
    ],
  };

  return (
    <div className="box-border h-96 w-96 border-4 p-4">
      <ChartLine size={32} />
      <Line data={data} />
      <Bar data={data2} />
    </div>
  );
};
