import React from "react";
import { useState } from "react";
import { Chart } from "primereact/chart";
const ChartCircle = () => {
  const [chartData] = useState({
    datasets: [
      {
        data: [90, 72, 61, 54, 36, 30, 18],
        backgroundColor: [
          "#00d0de",
          "#873efe",
          "#fc6161",
          "#eee500",
          "#0f8bfd",
          "#ec4dbc",
          "#545c6b",
        ],
        label: "My dataset",
      },
    ],
    labels: [
      "United States of America",
      "China",
      "Japan",
      "Australia",
      "India",
      "Rusian Federation",
      "Others",
    ],
  });
  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: "black",
        },
      },
    },
  });
  return (
    <div className="flex justify-center  ">
      <Chart type="doughnut" data={chartData} options={lightOptions} />
    </div>
  );
};

export default ChartCircle;
