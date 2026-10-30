import type { ReactNode } from "react";

export default function AdminPageHeader({
  title,
  description,
  breadcrumbs,
  actions,
}: {
  title: string;
  description?: string;
  breadcrumbs?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div className="min-w-0">
        {breadcrumbs && (
          <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-purple-400">
            {breadcrumbs}
          </p>
        )}
        <h1 className="mt-1 text-xl font-black tracking-tight text-white sm:text-2xl">{title}</h1>
        {description && <p className="mt-1 max-w-3xl text-xs text-slate-400 sm:text-sm">{description}</p>}
      </div>
      {actions && <div className="shrink-0">{actions}</div>}
    </div>
  );
}
