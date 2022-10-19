import React from "react";
import Sidebar from "../../component/Sidebar";
import ChartRadar from "../../page/ChartRadar";

const Area = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-8 m-8 w-full h-full">
        <ChartRadar />
      </div>
    </div>
  );
};

export default Area;
