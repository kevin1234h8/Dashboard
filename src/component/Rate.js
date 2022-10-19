import React from "react";

const Rate = ({ rate, color, number, icon }) => {
  return (
    <div>
      <div className="flex items-center my-2">
        <div
          className="flex items-center justify-around mt-"
          style={{
            backgroundColor: color,
            padding: 4,
            borderRadius: ".5rem",
            marginRight: "16px",
            width: "5rem",
            boxShadow: `0 0 8px ${color} `,
          }}
        >
          <div>{icon}</div>
          <div>{rate}</div>
        </div>
        <div className="text-xl font-bold">{number}</div>
      </div>
    </div>
  );
};

export default Rate;
