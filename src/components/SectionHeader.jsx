import React from "react";

export const SectionHeader = (props) => {
  return (
    <div className="rounded bg-green-100 text-center text-sm text-green-500 outline outline-1 outline-green-500">
      {props.name}
    </div>
  );
};
