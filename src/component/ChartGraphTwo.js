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
const ChartGraphTwo = () => {
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
        data: [500, 600, 550, 575, 580, 600, 660, 700, 725, 750, 780, 800],
      },
      {
        label: "2021",
        backgroundColor: "#42A5F5",
        data: [550, 592, 600, 602, 605, 630, 649, 660, 690, 710, 720, 730, 780],
      },
    ],
  });
  return (
    <div className="mt-10">
      <Chart type="bar" data={basicData} options={basicOptions} />
    </div>
  );
};

export default ChartGraphTwo;
