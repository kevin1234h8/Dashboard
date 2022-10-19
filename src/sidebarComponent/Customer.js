import React from "react";
import Sidebar from "../component/Sidebar";
import Table from "../component/Table";

const Customer = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-8 m-8 w-full">
        <div className="mb-10 text-4xl text-center">CUSTOMER</div>
        <Table />
      </div>
    </div>
  );
};

export default Customer;
