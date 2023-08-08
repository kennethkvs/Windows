import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Sections } from "./Sections";
import { AzureStatus } from "./AzureStatus";
import { RepoStatus } from "./RepoStatus";
import { EnvironmentStatus } from "./EnvironmentStatus";
import { SectionHeader } from "./SectionHeader";

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

export const Card = (props) => {
  const [isRotate, setIsRotate] = useState(false);
  const variants = {
    open: { rotate: "0" },
    closed: {
      rotate: "-90deg",
      margin: "0 -300px",
    },
  };

  return (
    <motion.div
      animate={isRotate ? "open" : "closed"}
      variants={variants}
      // transition={{ duration: 0.4 }}
      className="flex flex-col items-center gap-2 drop-shadow"
    >
      {isRotate && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-1 flex h-fit w-fit flex-col justify-evenly gap-2 rounded bg-secondary p-2"
        >
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
        onClick={() => setIsRotate(!isRotate)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: !isRotate ? 1.1 : 1 }}
      >
        <div className="flex min-h-[200px] min-w-[800px] border-separate flex-row rounded bg-secondary">
          <div className=" mb-12 ml-6 mr-6 mt-12 w-1/12 place-self-center text-center">
            <SectionHeader name={props.name} />
          </div>
          <div className="w-3/12 border-l-2 border-accent">
            <Sections name="Github Repo" cols="2" data={ghData} />
          </div>
          <div className="w-3/12 border-l-2 border-accent">
            <Sections name="Sprint #11" cols="2" data={ticketData} />
          </div>
          <div className="w-5/12 border-l-2 border-accent">
            {/* TODO: fix cols not working */}
            <Sections name="Environments" cols="3" data={envData} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
