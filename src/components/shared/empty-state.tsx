import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
};

export function EmptyState({ title, description, icon, action, className }: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center text-center py-20 px-4", className)}>
      {icon && <div className="mb-4 text-border">{icon}</div>}
      <h3 className="font-display text-xl font-semibold text-charcoal">{title}</h3>
      {description && (
        <p className="mt-2 text-sm text-slate max-w-sm">{description}</p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
