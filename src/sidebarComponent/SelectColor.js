import React from "react";
import Color from "../component/Color";
import { useState } from "react";
import { CompactPicker } from "react-color";
import Sidebar from "../component/Sidebar";
const SelectColor = () => {
  const [color, setColor] = useState("");
  const [textColor, setTextColor] = useState("");

  const handleColorChange = (color) => {
    setTextColor(color.hex);
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex w-full p-8 m-8 justify-around items-center flex-col lg:flex-row ">
        <div
          style={{
            color: textColor,
          }}
          className="flex items-center justify-center flex-col"
        >
          <div className="my-5 text-2xl ">Color : {textColor}</div>
          <CompactPicker
            color={textColor}
            onChangeComplete={handleColorChange}
          />
        </div>
        <div className="flex items-center justify-center flex-col">
          <div
            style={{
              backgroundColor: `rgb(${color.r} , ${color.g} , ${color.b})`,
            }}
            className="w-24 rounded-full h-24 border-2 my-5"
          ></div>
          <div className="mb-5 mt-3">
            Color : {`RGB (${color.r} , ${color.g} , ${color.b})`}
          </div>
          <Color color={color} setColor={setColor} />
        </div>
      </div>
    </div>
  );
};

export default SelectColor;
