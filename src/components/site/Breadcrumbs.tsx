import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = {
  label: string;
  to?: string;
  params?: Record<string, string>;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-soft"
    >
      <Link to="/" className="flex items-center gap-1.5 hover:text-brand">
        <Home className="h-3 w-3" />
        Home
      </Link>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            <ChevronRight className="h-3 w-3 text-brand" />
            {isLast || !item.to ? (
              <span
                aria-current={isLast ? "page" : undefined}
                className="max-w-[420px] truncate text-brand"
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.to as never}
                params={item.params as never}
                className="hover:text-brand"
              >
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
