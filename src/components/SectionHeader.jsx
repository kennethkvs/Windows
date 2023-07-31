import React from "react";

export const SectionHeader = (props) => {
  return (
    <div className="w-fit rounded bg-green-100 p-1 text-center text-sm text-xl font-bold text-green-700 outline outline-1 outline-green-500">
      {props.name}
    </div>
  );
};
