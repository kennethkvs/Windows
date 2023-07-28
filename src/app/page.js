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
      <AzureStatus />
      <RepoStatus />
      <EnvironmentStatus />
      {/* Render 10 cards */}
      <div className="flex h-[900px] items-center gap-2 overflow-y-hidden scroll-smooth">
        {tempData.map((value, index) => (
          <Card key={index} name={value} />
        ))}
      </div>
    </main>
  );
}
