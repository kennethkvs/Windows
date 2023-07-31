import React from "react";

export const Status = (props) => {
  const colorVariants = {
    green: "bg-green-100 text-green-700 outline-green-500",
    yellow: "bg-yellow-100 text-yellow-700 outline-yellow-500",
    red: "bg-red-100 text-red-500 outline-red-500",
  };

  return (
    <div
      className={`${
        colorVariants[props.color]
      } flex max-h-20 flex-col justify-evenly rounded text-center outline outline-1`}
    >
      <p className="text-xs">{props.title}</p>
    </div>
  );
};
