import { GithubLogo } from "@phosphor-icons/react";
import { ArrowElbowDownRight } from "@phosphor-icons/react";
import React from "react";

export const RepoStatus = (url) => {
  const testData = {
    RepoName: "Npx AI",
    Actions: [
      { Name: "Build & Test", Status: 1 },
      { Name: "Test Deploy", Status: 0 },
    ],
  };

  const color = (status) => (status ? "text-green-500" : "text-red-500");

  return (
    <div className="h-fit w-64 rounded border-2 border-accent p-2">
      <div className="flex items-center gap-1">
        <a href={"https://github.com/kennethkvs/Windows"}>
          <GithubLogo
            size={32}
            className="rounded bg-primary p-1 hover:bg-primary/70"
          />
        </a>
        <p className="font-bold">Repo Name</p>
      </div>

      <ul>
        <ul className="my-1.5 w-fit rounded bg-green-100 p-1 text-green-700 outline outline-1 outline-green-500 hover:bg-green-50">
          <a href="https://github.com/kennethkvs/Windows">
            <li className="flex font-medium text-green-500">Fixed AB#123</li>
            <li className="flex text-green-500">
              <ArrowElbowDownRight size={16} />
              Build & Test
            </li>
            <li className="flex text-green-500">
              <ArrowElbowDownRight size={16} />
              Deploy
            </li>
          </a>
        </ul>
        <ul className="my-1.5 w-fit rounded bg-red-100 p-1 text-red-700 outline outline-1 outline-red-500 hover:bg-red-50">
          <a href="https://github.com/kennethkvs/Windows">
            <li className="flex font-medium text-yellow-500">Added AB#245</li>
            <li className="flex text-green-500">
              <ArrowElbowDownRight size={16} />
              Build & Test
            </li>
            <li className="flex text-red-500">
              <ArrowElbowDownRight size={16} />
              Deploy
            </li>
          </a>
        </ul>
        <ul className="my-1.5 w-fit rounded bg-yellow-100 p-1 text-yellow-700 outline outline-1 outline-yellow-500 hover:bg-yellow-50">
          <a href="https://github.com/kennethkvs/Windows">
            <li className="flex font-medium text-yellow-500">Removed AB#332</li>
            <li className="flex text-yellow-500">
              <ArrowElbowDownRight size={16} />
              Build
            </li>
          </a>
        </ul>
      </ul>
    </div>
  );
};
