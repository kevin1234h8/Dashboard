import React from "react";
import Area from "../component/Area";
import datas from "../data/newCustomer";
const ChartRadar = () => {
  return (
    <div className="bg-slate-100 w-full p-8 m-8 rounded-lg">
      <div className="text-xl font-semibold">Weekly new customer</div>
      <div className="text-slate-500 my-5">
        Number of new customer are listed by weekly
      </div>
      {datas.map((data, index) => {
        return (
          <div key={index} className="flex items-center">
            <div className="text-4xl mr-3 font-semibold">{data.number}</div>
            <div>{data.type}</div>
          </div>
        );
      })}
      <Area />
    </div>
  );
};

export default ChartRadar;
