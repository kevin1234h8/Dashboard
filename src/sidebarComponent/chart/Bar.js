import React from "react";
import Sidebar from "../../component/Sidebar";
import Graph from "../../page/Graph";

const Bar = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Graph />
      </div>
    </div>
  );
};

export default Bar;
