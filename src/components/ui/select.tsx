import { cn } from "@/lib/utils/cn";
import type { SelectHTMLAttributes } from "react";

type Option = { label: string; value: string };

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: Option[];
  error?: string;
};

export function Select({ label, options, error, className, id, ...props }: SelectProps) {
  const selectId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={selectId} className="text-sm font-medium text-charcoal">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          className={cn(
            "h-11 w-full appearance-none rounded-md border border-border bg-white pl-3 pr-9 text-sm text-charcoal",
            "focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy",
            "disabled:opacity-50 disabled:bg-fog",
            error && "border-red-500",
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
