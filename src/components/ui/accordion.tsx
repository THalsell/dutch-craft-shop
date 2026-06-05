"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";

export type AccordionItem = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={cn("divide-y divide-border", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-charcoal pr-4">{item.question}</span>
              <svg
                className={cn(
                  "w-5 h-5 text-navy flex-shrink-0 transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div className="pb-5 text-sm text-slate leading-relaxed">{item.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
