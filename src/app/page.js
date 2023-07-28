"use client";

import { Card } from "@/components/Card";
import { RepoStatus } from "@/components/RepoStatus";
import { AzureStatus } from "@/components/AzureStatus";
import { EnvironmentStatus } from "@/components/EnvironmentStatus";

export default function Home() {
  const projectNames = ["NPXAI", "Xpress", "ModX", "Echo", "AtomiX"];
  const tempData = [].concat(...new Array(20).fill(projectNames));
  return (
    <main className="flex min-h-screen flex-col justify-center ">
      {/* {TODO: figure out height auto expading} */}
      <div className="flex h-[950px] items-center gap-5 overflow-y-hidden scroll-smooth">
        {tempData.map((value, index) => (
          <Card key={index} name={value} />
        ))}
      </div>
    </main>
  );
}
