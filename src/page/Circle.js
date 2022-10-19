import React from "react";
import ChartCircle from "../component/ChartCircle";
import { Divider } from "@mui/material";
import circles from "../data/circle";
const Circle = () => {
  return (
    <div className="bg-slate-100 p-8 m-8 rounded-lg w-screen">
      <div className="text-xl font-semibold ">Country distributions</div>
      <ChartCircle />
      {circles.map((circle, index) => {
        return (
          <div className="mt-8" key={index}>
            <div className="flex justify-between items-center my-4">
              <div className="flex items-center">
                <div
                  style={{
                    backgroundColor: circle.color,
                    width: 30,
                    height: 30,
                    borderRadius: ".5rem",
                    marginRight: ".5rem",
                  }}
                ></div>

                <div>{circle.name}</div>
              </div>
              <div>{circle.number}</div>
            </div>
            <Divider />
          </div>
        );
      })}
    </div>
  );
};

export default Circle;
