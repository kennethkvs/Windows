"use client";

import { Card } from "@/components/Card";
import { RepoStatus } from "@/components/RepoStatus";
import { AzureStatus } from "@/components/AzureStatus"
import { EnvironmentStatus } from "@/components/EnvironmentStatus";

export default function Home() {
  const numCards = 5;
  const projectNames = ["NPXAI", "Xpress", "ModX", "Echo", "AtomiX"];
  return (
    <main className="flex min-h-screen items-center justify-between gap-8 overflow-y-hidden p-12">
      <AzureStatus/>
      <RepoStatus/>
      <EnvironmentStatus/>
    </main>
  );
}
