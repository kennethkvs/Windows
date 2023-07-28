import React from "react";
import { Status } from "./Status";

const green = ["completed", "approved", "done", "up"];
const yellow = ["pending", "running", "working", "issue"];
const red = ["rejected", "failed", "late", "down"];

export const Sections = (props) => {
  return (
    <>
      <div className="text-center">{props.name}</div>
      <div className={`grid grid-cols-${props.cols}`}>
        {props.data.map((data, index) => (
          <Status
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
    </>
  );
};
