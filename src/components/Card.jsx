import { motion } from "framer-motion";
import React from "react";
import { Status } from "@/components/Status";

export const Card = (props) => {
  return (
    <motion.div
      className="mx-[-300px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="flex min-h-[200px] min-w-[800px] border-separate rotate-[270deg] flex-row rounded bg-slate-100 text-black">
        <div className=" mb-12 ml-6 mr-6 mt-12 w-1/12 text-center">
          <div className="rounded bg-green-100 text-center text-sm text-green-500 outline outline-1 outline-green-500">
            {props.name}
          </div>
        </div>
        <div className="grid-flow-column mr-[1px] grid w-3/12 grid-cols-2 gap-2 p-2 outline outline-1">
          <Status text1="Github Actions" text2="Build & Test" color="green" />
          <Status
            text1="Github Actions"
            text2="Deploy to Demo"
            color="yellow"
          />
          <Status text1="Github Actions" text2="Deploy to Prod" color="red" />
          <Status text1="Pull Request" text2="#33" color="red" />
        </div>
        <div className="grid-flow-column mr-[1px] grid w-3/12 grid-cols-2 gap-2 p-2 outline outline-1">
          <Status text1="Sprint" text2="Ticket #1" color="green" />
          <Status text1="Sprint" text2="Ticket #2" color="green" />
        </div>
        <div className="grid-flow-column mr-[1px] grid w-5/12 grid-cols-3 gap-2 p-2 outline outline-1">
          <Status text1="Environment" text2="Dev" color="green" />
          <Status text1="Environment" text2="Demo" color="yellow" />
          <Status text1="Environment" text2="Prod" color="green" />
        </div>
      </div>
    </motion.div>
  );
};
