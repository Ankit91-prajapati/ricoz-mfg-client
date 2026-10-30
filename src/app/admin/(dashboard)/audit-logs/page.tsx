"use client";

import { ChevronLeft, ChevronRight, History, RefreshCw } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import AdminEmptyState from "@/components/admin/AdminEmptyState";
import AdminErrorState from "@/components/admin/AdminErrorState";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminStatusBadge from "@/components/admin/AdminStatusBadge";
import Button from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";
import { adminService, type AuditLogPage } from "@/services/admin.service";

const selectCls =
  "h-9.5 rounded-lg border border-slate-800 bg-[#0d131f] px-3 font-mono text-xs text-slate-300 focus:border-purple-500 focus:outline-none";

export default function AdminAuditLogsPage() {
  const [data, setData] = useState<AuditLogPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [action, setAction] = useState("");
  const [outcome, setOutcome] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      setData(await adminService.listAuditLogs({ page, limit: 20, action, outcome }));
    } catch (err: unknown) {
      setError((err as Error).message || "Failed to load audit logs.");
    } finally {
      setLoading(false);
    }
  }, [page, action, outcome]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Administrative Audit Trail"
        description="Record of privilege adjustments and configuration modifications made in the admin console."
        breadcrumbs="Console / Audit Logs"
        actions={
          <Button variant="outline" size="sm" onClick={load} loading={loading} className="border-slate-800 bg-[#0c111e] text-slate-300">
            <RefreshCw className="mr-1.5 h-3.5 w-3.5" /> Refresh
          </Button>
        }
      />

      <div className="flex flex-wrap gap-2 rounded-xl border border-slate-800 bg-[#0c111e] p-4">
        <select value={action} onChange={(e) => { setAction(e.target.value); setPage(1); }} className={selectCls}>
          <option value="">All Actions</option>
          <option value="ROLE_CHANGE">Role change</option>
          <option value="SETTING_UPDATE">Setting update</option>
          <option value="USER_DELETE">User delete</option>
          <option value="LOGIN">Login</option>
        </select>
        <select value={outcome} onChange={(e) => { setOutcome(e.target.value); setPage(1); }} className={selectCls}>
          <option value="">All Outcomes</option>
          <option value="SUCCESS">Success</option>
          <option value="FAILURE">Failure</option>
        </select>
      </div>

      {loading && !data ? (
        <div className="flex justify-center rounded-xl border border-slate-800 bg-[#0c111e] p-16">
          <Spinner className="h-8 w-8 text-purple-400" />
        </div>
      ) : error ? (
        <AdminErrorState title="Audit Logs Unreachable" message={error} onRetry={load} />
      ) : !data || data.logs.length === 0 ? (
        <AdminEmptyState icon={History} title="No Audit Events" description="No administrative events match the current filters yet." />
      ) : (
        <div className="overflow-hidden rounded-xl border border-slate-800 bg-[#0c111e]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-800 bg-[#080d17] font-mono uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="px-4 py-3">Time</th>
                  <th className="px-4 py-3">Actor</th>
                  <th className="px-4 py-3">Action</th>
                  <th className="px-4 py-3">Target</th>
                  <th className="px-4 py-3">Outcome</th>
                  <th className="px-4 py-3">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                {data.logs.map((l) => (
                  <tr key={l._id} className="hover:bg-[#0e1424]">
                    <td className="whitespace-nowrap px-4 py-3 text-slate-400">{new Date(l.timestamp).toLocaleString()}</td>
                    <td className="px-4 py-3 text-slate-200">{l.actorEmail}</td>
                    <td className="px-4 py-3"><AdminStatusBadge variant="admin">{l.action}</AdminStatusBadge></td>
                    <td className="px-4 py-3 text-slate-400">{l.targetResource}</td>
                    <td className="px-4 py-3">
                      <AdminStatusBadge variant={l.outcome === "SUCCESS" ? "success" : "danger"}>{l.outcome}</AdminStatusBadge>
                    </td>
                    <td className="max-w-xs truncate px-4 py-3 text-[11px] text-slate-500">{l.metadata ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between border-t border-slate-800 bg-[#080d17] px-4 py-2.5">
            <span className="font-mono text-[11px] text-slate-400">{data.total} events · page {data.page} of {Math.max(1, data.pages)}</span>
            <div className="flex gap-1">
              <Button variant="ghost" size="sm" disabled={page <= 1} onClick={() => setPage((p) => p - 1)}><ChevronLeft className="h-4 w-4" /></Button>
              <Button variant="ghost" size="sm" disabled={page >= data.pages} onClick={() => setPage((p) => p + 1)}><ChevronRight className="h-4 w-4" /></Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}