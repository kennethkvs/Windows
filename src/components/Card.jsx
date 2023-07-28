import { motion } from "framer-motion";
import React, { useState } from "react";
import { Sections } from "./Sections";
import { AzureStatus } from "./AzureStatus";
import { RepoStatus } from "./RepoStatus";
import { EnvironmentStatus } from "./EnvironmentStatus";

export const Card = (props) => {
  const [rotate, setRotate] = useState(false);
  const ghData = [
    { title: "PR #12", status: "approved" },
    { title: "PR #13", status: "rejected" },
    { title: "PR #14", status: "pending" },
    { title: "CLIENT->DEMO", status: "completed" },
    { title: "PR:CLIENT->DEMO", status: "running" },
    { title: "PR:MIGRATE->DEMO", status: "failed" },
    { title: "PR:SERVER->DEMO", status: "completed" },
    { title: "SCHEMA->DEMO", status: "failed" },
    { title: "SERVER->DEMO", status: "completed" },
  ];
  const ticketData = [
    { title: "Ticket #1", status: "done" },
    { title: "Ticket #2", status: "working" },
    { title: "Ticket #3", status: "done" },
    { title: "Ticket #4", status: "late" },
    { title: "Ticket #5", status: "working" },
  ];
  const envData = [
    { title: "Dev #1", status: "down" },
    { title: "Dev #2", status: "up" },
    { title: "Dev #3", status: "up" },
    { title: "Demo #1", status: "issue" },
    { title: "Demo #2", status: "down" },
    { title: "Production", status: "up" },
  ];

  return (
    <div className="flex flex-col items-center">
      {rotate && (
        <motion.div className="mb-1 flex min-h-[700px] min-w-[800px] flex-col justify-evenly bg-slate-400">
          <div className="flex justify-evenly">
            <AzureStatus />
            <RepoStatus />
          </div>
          <div className="flex content-center justify-evenly">
            <EnvironmentStatus />
          </div>
        </motion.div>
      )}
      <motion.div
        onClick={() => setRotate(!rotate)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: !rotate && 1.1 }}
        animate={{
          transformOrigin: rotate ? "bottom left" : "",
          rotate: rotate ? 360 : 270,
          margin: rotate ? "0 10px 0 10px" : "0 -300px",
          scale: rotate ? 1 : 1,
        }}
      >
        <div className="flex min-h-[200px] min-w-[800px] border-separate flex-row rounded bg-slate-100 text-black">
          <div className=" mb-12 ml-6 mr-6 mt-12 w-1/12 place-self-center text-center">
            <div className="rounded bg-green-100 text-center text-sm text-green-500 outline outline-1 outline-green-500">
              {props.name}
            </div>
          </div>
          <div className="w-3/12 border-l-2 border-black">
            <Sections name="Github Repo" cols="2" data={ghData} />
          </div>
          <div className="w-3/12 border-l-2 border-black">
            <Sections name="Sprint #11" cols="2" data={ticketData} />
          </div>
          <div className="w-5/12 border-l-2 border-black">
            {/* TODO: fix cols not working */}
            <Sections name="Environments" cols="3" data={envData} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
