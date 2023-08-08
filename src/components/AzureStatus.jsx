import React from "react";
import { WindowsLogo } from "@phosphor-icons/react";
import { Ticket } from "@phosphor-icons/react";
import * as Progress from "@radix-ui/react-progress";

export const AzureStatus = (url) => {
  return (
    <div className=" h-fill drop w-64 rounded border-2 border-accent p-2">
      <div className="flex items-center gap-2">
        <a
          href={
            "https://github.com/kennethkvs/Windows"
          }
        >
          <WindowsLogo
            size={32}
            className="rounded bg-primary p-1 hover:bg-primary/70"
          />
        </a>
        <Progress.Root
          className="relative h-4 w-full overflow-hidden rounded bg-white"
          value={33}
        >
          <Progress.Indicator
            className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] h-full w-full bg-accent transition-transform duration-[660ms]"
            style={{ transform: `translateX(-${100 - 33}%)` }}
          />
          <p>33%</p>
        </Progress.Root>
      </div>

      <ul>
        <li className=" text-green-500 hover:text-green-400">
          <a
            className="flex"
            href="https://github.com/kennethkvs/Windows"
          >
            <Ticket size={24} />
            Sprint Ticket #1
          </a>
        </li>
        <li className="flex text-yellow-500 hover:text-yellow-400">
          <a
            className="flex"
            href="https://github.com/kennethkvs/Windows"
          >
            <Ticket size={24} />
            Sprint Ticket #2
          </a>
        </li>
        <li className="flex text-red-500 hover:text-red-400">
          <a
            className="flex"
            href="https://github.com/kennethkvs/Windows"
          >
            <Ticket size={24} />
            Sprint Ticket #3
          </a>
        </li>
        <li className="flex text-red-500 hover:text-red-400">
          <a
            className="flex"
            href="https://github.com/kennethkvs/Windows"
          >
            <Ticket size={24} />
            Sprint Ticket #4
          </a>
        </li>
        <li className="flex text-red-500 hover:text-red-400">
          <a
            className="flex"
            href="https://github.com/kennethkvs/Windows"
          >
            <Ticket size={24} />
            Sprint Ticket #5
          </a>
        </li>
      </ul>
    </div>
  );
};
