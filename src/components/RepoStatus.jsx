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
    <div className="box-border h-64 w-64 border-4 p-4">
      <a href={"https://github.com/NPXInnovation/npxai-v2"}>
        <GithubLogo size={32} />
      </a>
      <h1>
        ABC#123
        <div className={`flex ${color(testData.Actions[0].Status)}`}>
          <p>
            <ArrowElbowDownRight size={16} />
          </p>
          <p> Build & Test</p>
        </div>
      </h1>
      <h2>
        F#000
        <div className={`flex ${color(testData.Actions[1].Status)}`}>
          <p>
            <ArrowElbowDownRight size={16} />
          </p>
          <p> Test Deploy</p>
        </div>
      </h2>
    </div>
  );
};
