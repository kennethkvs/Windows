import React from "react";

export const Status = (props) => {
  return (
    <div
      className={`bg-${props.color}-100 flex max-h-20 items-center justify-center rounded text-center text-sm text-${props.color}-500 outline outline-1 outline-${props.color}-500`}
    >
      {props.text1} <br />
      {props.text2}
    </div>
  );
};
