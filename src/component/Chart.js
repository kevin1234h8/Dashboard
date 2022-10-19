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
const Graph = () => {
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
        label: "2019",
        backgroundColor: "#42A5F5",
        data: [
          550,

          592, 600, 602, 605, 630, 649, 660, 690, 710, 720, 730, 780,
        ],
      },
      {
        label: "2020",
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

export default Graph;
