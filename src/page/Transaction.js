import React from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import transactions from "../data/transaction";
import { Divider } from "@mui/material";
import { useState } from "react";
import moreTrans from "../data/moreTrans";
const Transaction = () => {
  const [viewMore, setViewMore] = useState(false);
  return (
    <div className="bg-slate-100 m-8 p-8 divide-y w-full">
      <div className="flex rounded-lg justify-between items-center">
        <div className="text-2xl font-semibold">Transaction history</div>
        <div>
          <RefreshIcon fontSize="large" className="mr-4" />
          <FilterAltOutlinedIcon fontSize="large" />
        </div>
      </div>
      {viewMore === false
        ? transactions.map((transaction, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between my-2"
              >
                <div className="flex items-center my-4 ">
                  <div
                    style={{
                      backgroundColor: transaction.color,
                      padding: 8,
                      borderRadius: "50%",
                    }}
                    className="mr-5 "
                  >
                    {transaction.icon}
                  </div>
                  <div>
                    <div className="text-xl">{transaction.name}</div>
                    <div>{transaction.date}</div>
                  </div>
                </div>
                <div
                  className="text-xl font-semibold"
                  style={{
                    color: transaction.color,
                  }}
                >
                  {transaction.price}
                </div>
              </div>
            );
          })
        : moreTrans.map((transaction, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between my-2"
              >
                <div className="flex items-center my-4 ">
                  <div
                    style={{
                      backgroundColor: transaction.color,
                      padding: 8,
                      borderRadius: "50%",
                    }}
                    className="mr-5 "
                  >
                    {transaction.icon}
                  </div>
                  <div>
                    <div className="text-xl">{transaction.name}</div>
                    <div>{transaction.date}</div>
                  </div>
                </div>
                <div
                  className="text-xl font-semibold"
                  style={{
                    color: transaction.color,
                  }}
                >
                  {transaction.price}
                </div>
              </div>
            );
          })}
      <Divider />
      <div
        onClick={() => setViewMore(!viewMore)}
        className="flex items-center justify-center"
      >
        <div
          style={{
            color: "#155fab",
          }}
          className="mr-2 my-8 font-semibold text-xl"
        >
          {viewMore === false ? "View all transactions " : "View Less"}
        </div>
        {viewMore === false ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
      </div>
    </div>
  );
};

export default Transaction;
