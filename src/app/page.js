"use client";

import { Card } from "@/components/Card";

export default function Home() {
  const projectNames = ["APP1", "APP2", "APP3", "APP4", "APP5"];
  const tempData = [].concat(...new Array(2).fill(projectNames));
  return (
    <main className="flex min-h-screen flex-col justify-center bg-background text-[#171402] ">
      {/* {TODO: figure out height auto expading} */}
      <p className="text-center text-5xl font-bold tracking-tight">
        Your{" "}
        <span className="w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Window
        </span>{" "}
        Into Management
      </p>
      <div className="flex min-h-[1100px] items-center gap-5 overflow-y-hidden scroll-smooth">
        {tempData.map((value, index) => (
          <Card key={index} name={value} />
        ))}
      </div>
    </main>
  );
}
