"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

export type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  className?: string;
};

export function Tabs({ tabs, className }: TabsProps) {
  const [activeId, setActiveId] = useState(tabs[0]?.id);

  return (
    <div className={className}>
      <div className="border-b border-border flex gap-0 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveId(tab.id)}
            className={cn(
              "px-5 py-3 text-sm font-medium border-b-2 -mb-px transition-colors whitespace-nowrap",
              activeId === tab.id
                ? "border-navy text-navy"
                : "border-transparent text-slate hover:text-charcoal"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="py-6">{tabs.find((t) => t.id === activeId)?.content}</div>
    </div>
  );
}
