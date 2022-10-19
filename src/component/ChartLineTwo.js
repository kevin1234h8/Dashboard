import React from "react";
import { Chart } from "primereact/chart";
import { useState } from "react";
const getLightTheme = () => {
  let basicOptions = {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
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

  let multiAxisOptions = {
    stacked: false,
    maintainAspectRatio: false,
    aspectRatio: 0.6,
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
        type: "linear",
        display: true,
        position: "left",
        ticks: {
          color: "#495057",
        },
        grid: {
          color: "#ebedef",
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        ticks: {
          color: "#495057",
        },
        grid: {
          drawOnChartArea: false,
          color: "#ebedef",
        },
      },
    },
  };

  return {
    basicOptions,
    multiAxisOptions,
  };
};
const ChartLineTwo = () => {
  const [lineStylesData] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [31, 27, 30, 37, 23, 29, 20],
        fill: false,
        tension: 0.4,
        borderColor: "yellow",
      },
      {
        label: "Revenue",
        data: [47, 31, 35, 20, 46, 39, 25],
        fill: false,
        tension: 0.4,
        borderColor: "#0cd1d3",
      },
      {
        label: "Expense",
        data: [37, 34, 21, 27, 10, 18, 15],
        fill: false,
        borderColor: "#ef6e62",
        tension: 0.4,
      },
      {
        label: "Customer",
        data: [21, 7, 13, 3, 19, 11, 6],
        fill: false,
        borderColor: "#0f8bfc",
        tension: 0.4,
        backgroundColor: "rgba(255,167,38,0.2)",
      },
    ],
  });

  const { basicOptions } = getLightTheme();
  return (
    <div className="card">
      <Chart type="line" data={lineStylesData} options={basicOptions} />
    </div>
  );
};

export default ChartLineTwo;
