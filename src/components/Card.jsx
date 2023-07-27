import { motion } from "framer-motion";
import React from "react";

export const Card = () => {
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
            Xpress
          </div>
        </div>
        <div className="grid-flow-column mr-[1px] grid w-3/12 grid-cols-2 gap-2 p-2 outline outline-1">
          <div className="flex max-h-20 items-center justify-center rounded bg-green-100 text-center text-sm text-green-500 outline outline-1 outline-green-500">
            Github Actions <br />
            Build & Test
          </div>
          <div className="flex max-h-20 items-center justify-center rounded bg-yellow-100 text-center text-sm text-yellow-500 outline outline-1 outline-yellow-500">
            Github Actions <br />
            Deploy to Demo
          </div>
          <div className="flex max-h-20 items-center justify-center rounded bg-red-100 text-center text-sm text-red-500 outline outline-1 outline-red-500">
            Github Actions <br />
            Deploy to Prod
          </div>
          <div className="flex max-h-20 items-center justify-center rounded bg-red-100 text-center text-sm text-red-500 outline outline-1 outline-red-500">
            Pull Request <br />
            #33
          </div>
        </div>
        <div className="grid-flow-column mr-[1px] grid w-3/12 grid-cols-2 gap-2 p-2 outline outline-1">
          <div className="flex max-h-20 items-center justify-center rounded bg-green-100 text-center text-sm text-green-500 outline outline-1 outline-green-500">
            Sprint <br />
            Ticket #1
          </div>
          <div className="flex max-h-20 items-center justify-center rounded bg-green-100 text-center text-sm text-green-500 outline outline-1 outline-green-500">
            Sprint <br />
            Ticket #2
          </div>
        </div>
        <div className="grid-flow-column mr-[1px] grid w-5/12 grid-cols-3 gap-2 p-2 outline outline-1">
          <div className="flex max-h-20 items-center justify-center rounded bg-green-100 text-center text-sm text-green-500 outline outline-1 outline-green-500">
            Environment <br />
            Dev
          </div>
          <div className="flex max-h-20 items-center justify-center rounded bg-yellow-100 text-center text-sm text-yellow-500 outline outline-1 outline-yellow-500">
            Environment <br />
            Demo
          </div>
          <div className="flex max-h-20 items-center justify-center rounded bg-green-100 text-center text-sm text-green-500 outline outline-1 outline-green-500">
            Environment <br />
            Prod
          </div>
        </div>
      </div>
    </motion.div>
  );
};
