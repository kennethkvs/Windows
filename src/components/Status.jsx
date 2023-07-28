import React from "react";

export const Status = (props) => {
  return (
    <div
      className={`bg-${props.color}-100 flex max-h-20 flex-col justify-evenly rounded text-center text-${props.color}-500 outline outline-1 outline-${props.color}-500`}
    >
      <p className="text-xs">{props.title}</p>
    </div>
  );
};
