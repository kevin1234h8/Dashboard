import React from "react";
import ReactApexChart from "react-apexcharts";

const Buble = () => {
  const options = [
    {
      series: [
        {
          name: "Bubble1",
          data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60,
          }),
        },
        {
          name: "Bubble2",
          data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60,
          }),
        },
        {
          name: "Bubble3",
          data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60,
          }),
        },
        {
          name: "Bubble4",
          data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60,
          }),
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "bubble",
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          opacity: 0.8,
        },
        title: {
          text: "Simple Bubble Chart",
        },
        xaxis: {
          tickAmount: 12,
          type: "category",
        },
        yaxis: {
          max: 70,
        },
      },
    },
  ];

  return (
    <div>
      <div>
        {options.map((option, index) => {
          return (
            <div>
              <ReactApexChart
                options={option.options}
                series={option.series}
                type="bubble"
                height={350}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Buble;
