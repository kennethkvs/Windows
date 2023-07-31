import React from "react";
import { ChartLine } from "@phosphor-icons/react";
import { registerables, Chart } from "chart.js";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

Chart.register(...registerables);

Chart.defaults.resizeDelay = 50;
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

  const data2 = {
    labels: ["20-12", "21-12", "22-12", "23-12", "24-12", "25-12", "26-12"],
    datasets: [
      {
        label: "Uptime",
        data: [100, 75, 50, 100, 75, 25, 75],
        backgroundColor: "rgb(0, 225, 0)",
        borderColor: "rgb(0, 225, 0)",
        fill: true,
      },
    ],
  };

  const data3 = {
    labels: ["1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "Current"],
    datasets: [
      {
        label: "Load",
        data: [59, 45, 67, 80, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const data4 = {
    labels: ["20-12", "21-12", "22-12", "23-12", "24-12", "25-12", "26-12"],
    datasets: [
      {
        label: "Uptime",
        data: [100, 80, 95, 45, 75, 50, 75],
        backgroundColor: "rgb(0, 225, 0)",
        borderColor: "rgb(0, 225, 0)",
        fill: true,
      },
    ],
  };

  return (
    <div className="flex rounded border-2 border-accent p-2 drop-shadow">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <a href="https://portal.azure.com/#@NPXsandbox.onmicrosoft.com/resource/subscriptions/e5a9b327-74a2-4088-b8b9-c21ccea70b72/resourceGroups/rg-cc-xpress-demo/providers/microsoft.insights/components/xpress-demo-api/overview">
            <ChartLine
              size={32}
              className="rounded bg-primary p-1 hover:bg-primary/70"
            />
          </a>
          <p className="font-bold">Demo</p>
        </div>
        <Line data={data} />
        <Bar data={data2} />
      </div>

      <div>
        <div className="flex items-center gap-2">
          <a href="https://portal.azure.com/#@NPXsandbox.onmicrosoft.com/resource/subscriptions/e5a9b327-74a2-4088-b8b9-c21ccea70b72/resourceGroups/rg-cc-xpress-demo/providers/microsoft.insights/components/xpress-demo-api/overview">
            <ChartLine
              size={32}
              className="rounded bg-primary p-1 hover:bg-primary/70"
            />
          </a>
          <p className="font-bold">Production</p>
        </div>

        <Line data={data3} />
        <Bar data={data4} />
      </div>
    </div>
  );
};
