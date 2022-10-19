import React, { useState } from "react";
import graphs from "../data/graph";
import "../style/graph.css";
import Select from "react-select";
import ChartGraphOne from "../component/ChartGraphOne";
import ChartGraphTwo from "../component/ChartGraphTwo";
const Graph = () => {
  const [value, setValue] = useState("");
  const options = [
    {
      value: "2022",
      label: "2022",
    },
    {
      value: "2021",
      label: "2021",
    },
  ];
  return (
    <div className="bg-slate-100 p-8 m-8 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold">Unique Visitor graph</div>
        <Select
          value={value}
          onChange={(e) => setValue(e.value)}
          options={options}
        />
      </div>
      <div className="mt-8">
        {graphs.map((graph, index) => {
          return (
            <div className="my-10" key={index}>
              <div className="text-3xl font-semibold ">{graph.number}</div>
              <div className="my-2">{graph.name}</div>
              <div className="text-slate-600 my-2 link">
                {graph.desc}
                <a href="/" className="cursor-pointer">
                  Learn more
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div>{value === "2022" ? <ChartGraphOne /> : <ChartGraphTwo />}</div>
    </div>
  );
};

export default Graph;
