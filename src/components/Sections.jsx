import React from "react";
import { Status } from "./Status";

const green = ["completed", "approved", "done", "up"];
const yellow = ["pending", "running", "working", "issue"];
const red = ["rejected", "failed", "late", "down"];

export const Sections = (props) => {
  const columnVariants = {
    2: "grid-cols-2",
    3: "grid-cols-3",
  };

  return (
    <div className="m-1">
      <div className="text-center font-semibold">{props.name}</div>
      <div className={` ${columnVariants[props.cols]} grid gap-1`}>
        {props.data.map((data, index) => (
          <Status
            key={index}
            title={data.title}
            color={
              green.includes(data.status)
                ? "green"
                : red.includes(data.status)
                ? "red"
                : "yellow"
            }
          />
        ))}
      </div>
    </div>
  );
};
