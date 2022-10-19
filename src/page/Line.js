import React, { useState } from "react";
import ChartLineOne from "../component/ChartLineOne";
import ChartLineTwo from "../component/ChartLineTwo";
import Select from "react-select";
const Line = () => {
  const [value, setValue] = useState("");
  const options = [
    {
      value: "January - July 2022",
      label: "January - July 2022",
    },
    {
      value: "August - December 2021",
      label: "August - December 2021",
    },
  ];
  return (
    <div className="m-8 p-8 bg-slate-100 w-full">
      <div className="flex justify-between items-center">
        <div>Monthly revenue</div>
        <Select onChange={(e) => setValue(e.value)} options={options} />
      </div>
      <div className="my-10">
        {value === "January - July 2022" ? <ChartLineOne /> : <ChartLineTwo />}
      </div>
    </div>
  );
};

export default Line;
