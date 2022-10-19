import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar } from "@mui/material";
import { Calendar } from "primereact/calendar";
import activities from "../data/activities.json";
const RightBar = ({ open, handleOpenBar }) => {
  return (
    <div
      className={`${!open ? "w-0" : "w-auto"} flex flex-col 
     p-8 rightSide duration-300   max-w-fit bg-slate-200 h-auto z-10`}
    >
      <div className="flex relative justify-between">
        <div>
          <CloseIcon
            fontSize="large"
            className="cursor-pointer absolute top-0 right-0"
            onClick={handleOpenBar}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center m-8">
        <Avatar
          sx={{ width: 120, height: 120 }}
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60"
        />
        <div>Liam</div>
        <div>(406) 555-0120</div>
        <div className="flex justify-between gap-4 mt-4">
          <div className="flex items-center flex-col  p-2  rounded-lg">
            <div className="text-red-600 bg-slate-300 text-3xl  p-4 rounded-lg  ">
              23
            </div>
            <div className="font-semibold  text-2xl">Progress</div>
          </div>
          <div className="flex items-center flex-col p-2 rounded-lg">
            <div className=" bg-slate-300  p-4 rounded-lg  text-3xl ">23</div>
            <div className="font-semibold  text-2xl">Overdue</div>
          </div>
          <div className="flex items-center flex-col  p-2 rounded-lg">
            <div className=" bg-slate-300  p-4 rounded-lg text-3xl ">23</div>
            <div className="font-semibold  text-2xl">All deals</div>
          </div>
        </div>
        <div></div>
      </div>
      <Calendar className="mt-12" inline />
      <div className="text-2xl mt-10">14 Sunday, Jun 2020</div>

      <div>
        {activities.map((activity, index) => {
          return (
            <div key={index} className="bg-slate-300 p-4 rounded-lg mt-4">
              <div className="text-slate-600">{activity.time}</div>
              <div className="font-semibold">{activity.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RightBar;
