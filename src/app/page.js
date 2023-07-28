"use client";

import { Card } from "@/components/Card";
import { RepoStatus } from "@/components/RepoStatus";
import { AzureStatus } from "@/components/AzureStatus"

export default function Home() {
  const numCards = 100;
  return (
    <main className="scrollbar-rounded-[18px] flex min-h-screen items-center justify-between gap-8 overflow-y-hidden p-12 scrollbar scrollbar-thumb-fuchsia-400 ">
      {/* Render 10 cards */}
      {/* {Array.from(Array(numCards).keys()).map((i) => (
        <Card key={i} />
      ))} */}
      <RepoStatus/>
      <AzureStatus/>
    </main>
  );
}
