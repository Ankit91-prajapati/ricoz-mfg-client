import type { LucideIcon } from "lucide-react";
import Spinner from "@/components/ui/Spinner";

export default function AdminStatCard({
  title,
  value,
  icon: Icon,
  subtitle,
  badge,
  loading,
  error,
}: {
  title: string;
  value: string | number | null | undefined;
  icon: LucideIcon;
  subtitle?: string;
  badge?: string;
  loading?: boolean;
  error?: string | null;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-[#0c111e] p-5 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-[#121826] text-purple-400">
          <Icon className="h-4 w-4" />
        </div>
        {badge && (
          <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-purple-300">
            {badge}
          </span>
        )}
      </div>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-slate-400">{title}</p>
      <div className="mt-1 h-8">
        {loading ? (
          <Spinner className="h-5 w-5 text-purple-400" />
        ) : error || value === null || value === undefined ? (
          <span className="font-mono text-2xl font-black text-slate-600">—</span>
        ) : (
          <span className="font-mono text-2xl font-black text-white">{value}</span>
        )}
      </div>
      {subtitle && <p className="mt-1 truncate text-[11px] text-slate-500">{subtitle}</p>}
    </div>
  );
}
