import React from "react";
import profile from "../assets/sitting.png";

import { Image } from "react-bootstrap";
import { links } from "../data/dataFolder/dummy";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MenuIcon from "@mui/icons-material/Menu";
const Sidebar = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`${
        open === true ? "w-72" : "w-24"
      } relative h-auto duration-300 bg-slate-100 flex-column  `}
    >
      {!open ? (
        <ArrowBackIosNewIcon
          fontSize="large"
          onClick={handleOpen}
          className=" cursor-pointer duration-300  rounded-full border-2 border-black arrow bg-white"
        />
      ) : (
        <ArrowForwardIosIcon
          fontSize="large"
          onClick={handleOpen}
          className=" cursor-pointer duration-300  rounded-full border-2 border-black arrow bg-white"
        />
      )}
      <div className="flex relative items-center justify-between m-5">
        <div className="flex items-center  ">
          <Image src={profile} className="img-fluid w-20 rounded-full mr-5" />
          <div className={`${!open && "scale-0"} duration-300`}>KEVIN</div>
        </div>
      </div>
      <div className="flex flex-col items-center px-7 ">
        <input
          type="search"
          className={`${
            !open && "scale-0"
          } duration-300 p-2 rounded-lg outline-none`}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon className={`${open && "scale-0"}`} />
      </div>
      <div className="p-7">
        {links
          .filter((curData) => curData.title.toLowerCase().includes(search))
          .map((link, index) => {
            return (
              <div key={index}>
                <div className="flex items-center p-3 justify-between hover:bg-slate-300 duration-200 rounded-lg">
                  <div className="mr-5">{link.icons}</div>
                  <div
                    className={`${
                      !open && "scale-0"
                    } duration-300 text-xl w-full  text-gray-600 my-5 mr-5 cursor-pointer`}
                  >
                    {link.title}
                  </div>
                  <div>
                    <KeyboardArrowDownIcon
                      className={`${!open && "scale-0"}`}
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg">
                  {link.links.map((curElement, index) => {
                    return (
                      <div
                        key={index}
                        className="flex p-4 items-center rounded-lg justify-between focus:bg-slate-300 hover:bg-slate-200"
                      >
                        <div className="flex items-center">
                          <Link to={`/${curElement.name}`}>
                            <div className="mr-5 my-5">{curElement.icon}</div>
                          </Link>

                          <Link
                            className={` ${
                              !open && "scale-0"
                            } duration-300 text-xl  `}
                            to={`/${curElement.name}`}
                          >
                            {curElement.name}
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Sidebar;
