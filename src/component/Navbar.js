import React from "react";
import "primeicons/primeicons.css";
import { Badge, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Image } from "react-bootstrap";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import image from "../assets/sitting.png";
const Navbar = ({ handleOpen }) => {
  return (
    <div className=" h-28 flex items-center  p-12 justify-between ">
      <div className="flex items-center">
        <Image src={image} className="img-fluid w-20 rounded-full mr-5" />
        <div className="text-xl font-bold">KEVIN</div>
      </div>
      <div className="flex items-center">
        <Badge badgeContent={2} className="mr-5" color="primary">
          <ChatBubbleOutlineIcon fontSize="large" />
        </Badge>
        <Badge badgeContent={2} className="mr-5" color="primary">
          <NotificationsIcon fontSize="large" />
        </Badge>
        <Avatar
          sx={{
            width: 78,
            height: 78,
          }}
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60"
        />
      </div>
    </div>
  );
};

export default Navbar;
