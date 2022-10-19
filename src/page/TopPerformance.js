import React from "react";
import datas from "../data/performance";

import { Avatar, Badge } from "@mui/material";
const TopPerformance = () => {
  return (
    <div className="bg-slate-100 m-8 p-8 rounded-lg w-full">
      <div className="font-semibold text-xl">Quarterly win</div>
      <div className="text-slate-600">Top performance</div>
      {datas.map((data, index) => {
        return (
          <div key={index} className="flex items-center my-5">
            <Badge
              overlap="circular"
              className="mr-5"
              badgeContent={data.number}
              color="primary"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Avatar src={data.image} />
            </Badge>

            <div>
              <div>{data.price}</div>
              <div className="text-xs">{data.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopPerformance;
