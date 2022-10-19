import React from "react";
import { Chart } from "primereact/chart";
import { useState } from "react";
let basicOptions = {
  maintainAspectRatio: false,
  aspectRatio: 0.8,
  plugins: {
    legend: {
      labels: {
        color: "#495057",
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#495057",
      },
      grid: {
        color: "#ebedef",
      },
    },
    y: {
      ticks: {
        color: "#495057",
      },
      grid: {
        color: "#ebedef",
      },
    },
  },
};
const ChartGraphOne = () => {
  const [basicData] = useState({
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        type: "line",
        label: "Plan",
        borderColor: "#fc6161",
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        data: [500, 600, 625, 650, 725, 750, 650, 700, 725, 650, 650, 600],
      },
      {
        type: "bar",
        label: "2022",
        backgroundColor: "#FFA726",
        data: [555, 607, 594, 600, 645, 670, 580, 550, 750, 600, 600, 500],
      },
    ],
  });
  return (
    <div className="mt-10">
      <Chart type="bar" data={basicData} options={basicOptions} />
    </div>
  );
};

export default ChartGraphOne;
