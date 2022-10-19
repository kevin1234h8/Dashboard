import React, { useState } from "react";
import { ColorPicker } from "primereact/colorpicker";
const Color = ({ color, setColor }) => {
  return (
    <div>
      <div>
        <ColorPicker
          format="rgb"
          inline
          value={color}
          onChange={(e) => setColor(e.value)}
        />
      </div>
    </div>
  );
};

export default Color;
