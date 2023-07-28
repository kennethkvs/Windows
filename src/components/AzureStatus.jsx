import React from "react";
import { WindowsLogo } from "@phosphor-icons/react";
import { Ticket } from "@phosphor-icons/react";
import * as Progress from "@radix-ui/react-progress";

export const AzureStatus = (url) => {
  return (
    <div className="box-border h-64 w-64 border-4 p-4">
      <a
        href={
          "https://portal.azure.com/?bundlingKind=DefaultPartitioner&configHash=Zze6Y9eHer_J&env=portal&helppanenewdesign=true&l=en.en-us&pageVersion=12.28.0.1591995.230714-1830#@NPXsandbox.onmicrosoft.com/resource/subscriptions/e5a9b327-74a2-4088-b8b9-c21ccea70b72/resourceGroups/rg-canadacentral-npxaiv2demo/overview"
        }
      >
        <WindowsLogo size={32} />
      </a>
      <div className={"flex text-green-500"}>
        <p>
          <Ticket size={24} />
        </p>
        <p> Sprint Ticket #1</p>
      </div>
      <div className={"flex text-red-500"}>
        <p>
          <Ticket size={24} />
        </p>
        <p> Sprint Ticket #2</p>
      </div>
      <div className={"flex text-yellow-500"}>
        <p>
          <Ticket size={24} />
        </p>
        <p> Sprint Ticket #3</p>
      </div>
      <Progress.Root
        className="relative h-4 w-32 overflow-hidden bg-white"
        value={33}
      >
        <Progress.Indicator
          className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] h-full w-full bg-yellow-400 transition-transform duration-[660ms]"
          style={{ transform: `translateX(-${100 - 33}%)` }}
        />
      </Progress.Root>
    </div>
  );
};
