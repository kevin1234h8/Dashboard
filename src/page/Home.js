import React from "react";
import "primeicons/primeicons.css";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import { useState } from "react";
import Dashboard from "./Dashboard";
import RightBar from "../component/RightBar";
import Graph from "./Graph";
import Transaction from "./Transaction";
import Circle from "./Circle";
import Line from "./Line";
import CustomerTable from "./CustomerTable";
import TopPerformance from "./TopPerformance";
import ColorPick from "./ColorPick";
import ChartRadar from "./ChartRadar";

const Home = () => {
  const [openRightBar, setOpenRightBar] = useState(false);

  const handleOpenBar = () => {
    setOpenRightBar(!openRightBar);
  };
  return (
    <div className="flex w-full ">
      <Sidebar />
      <div className="flex flex-col w-full ">
        <Navbar />
        <Dashboard handleOpenBar={handleOpenBar} />
        <div className="lg:flex ">
          <Graph />
          <Transaction />
        </div>
        <div className="lg:flex">
          <Circle />
          <Line className="lg:w-full" />
        </div>
        <div className="lg:flex ">
          <CustomerTable />
          <TopPerformance />
        </div>
        <div className="lg:flex ">
          <ColorPick />
          <ChartRadar />
        </div>
      </div>
      {openRightBar && (
        <RightBar open={openRightBar} handleOpenBar={handleOpenBar} />
      )}
    </div>
  );
};

export default Home;
