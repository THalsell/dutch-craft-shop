"use client";

import { Select } from "@/components/ui/select";
import { SORT_OPTIONS, type SortOption } from "@/lib/constants/filters";

type CollectionFiltersProps = {
  sort: SortOption;
  onSortChange: (value: SortOption) => void;
  total: number;
};

export function CollectionFilters({ sort, onSortChange, total }: CollectionFiltersProps) {
  return (
    <div className="flex items-center justify-between gap-4 py-4 border-b border-border">
      <p className="text-sm text-slate">
        {total} {total === 1 ? "model" : "models"}
      </p>
      <div className="w-48">
        <Select
          options={SORT_OPTIONS.map((o) => ({ label: o.label, value: o.value }))}
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
        />
      </div>
    </div>
  );
}
