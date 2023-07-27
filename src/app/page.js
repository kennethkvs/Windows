"use client";

import { Card } from "@/components/Card";

export default function Home() {
  const numCards = 100;
  return (
    <main className="flex min-h-screen items-center justify-between gap-8 overflow-y-hidden p-12">
      {/* Render 10 cards */}
      {Array.from(Array(numCards).keys()).map((i) => (
        <Card key={i} />
      ))}
    </main>
  );
}
