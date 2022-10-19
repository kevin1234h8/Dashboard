import React from "react";
import Table from "../component/Table";
const CustomerTable = () => {
  return (
    <div className="bg-slate-100 p-8 m-8 rounded-lg">
      <div className="text-xl font-semibold">Customer</div>
      <div className="my-10">
        <Table />
      </div>
    </div>
  );
};

export default CustomerTable;
