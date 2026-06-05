import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils/cn";
import type { Collection } from "@/types/collection";

type CollectionCardProps = {
  collection: Collection;
  index?: number;
  className?: string;
};

export function CollectionCard({ collection, className }: CollectionCardProps) {
  return (
    <Link
      href={`/collections/${collection.handle}`}
      className={cn(
        "group rounded-xl border border-border bg-white overflow-hidden",
        "hover:border-navy hover:shadow-md transition-all duration-200 flex flex-col",
        className
      )}
    >
      {/* Image */}
      <div className="relative h-44 bg-fog overflow-hidden">
        {collection.cardImage && (
          <Image
            src={collection.cardImage}
            alt={collection.name}
            fill
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          />
        )}
        {collection.badge && (
          <div className="absolute top-3 left-3">
            <Badge variant={collection.badgeVariant ?? "default"}>
              {collection.badge}
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="font-display text-xl font-semibold text-charcoal group-hover:text-navy transition-colors">
            {collection.name}
          </h3>
          <p className="text-sm text-slate italic mt-1">{collection.tagline}</p>
        </div>

        <p className="text-sm text-slate leading-relaxed line-clamp-3">{collection.description}</p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-sm font-medium text-navy group-hover:underline underline-offset-2">
            Shop {collection.name} →
          </span>
          {collection.productCount != null && collection.productCount > 0 && (
            <span className="text-xs text-muted">
              {collection.productCount} {collection.productCount === 1 ? "model" : "models"}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
