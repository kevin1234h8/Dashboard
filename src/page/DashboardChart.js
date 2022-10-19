import React from "react";
import ChartRates from "../data/ChartRate";
import Rate from "../component/Rate";
const DashboardChart = () => {
  return (
    <div className="lg:flex flex-row w-full">
      {ChartRates.map((rate, index) => {
        return (
          <div
            key={index}
            className="flex justify-between mt-4 lg:w-full gap-8"
          >
            <div className="bg-slate-100 w-full p-4 rounded-xl ">
              <div
                style={{
                  fontSize: ".8rem",
                }}
                className="font-semibold"
              >
                {rate.name}
              </div>
              <Rate
                rate={rate.rate}
                color={rate.color}
                icon={rate.icon}
                number={rate.number}
              />
            </div>
            <div>
              <img src={rate.image} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardChart;
