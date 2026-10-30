"use client";

import { UserButton } from "@clerk/nextjs";
import { Menu, ShieldAlert, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { FullScreenSpinner } from "@/components/ui/Spinner";
import { useAuth } from "@/hooks/useAuth";
import { adminNav } from "./nav-config";

function Nav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <nav className="flex h-full w-64 flex-col border-r border-slate-800 bg-[#0a0f1a]">
      <div className="flex h-16 shrink-0 items-center gap-3 px-5">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-600/15 text-purple-400">
          <ShieldAlert className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <span className="block text-sm font-bold text-white">Ricoz Admin</span>
          <span className="block font-mono text-[10px] uppercase text-purple-400">Console</span>
        </div>
      </div>
      <ul className="flex-1 space-y-1 overflow-y-auto px-3 py-2">
        {adminNav.map(({ href, label, icon: Icon }) => {
          const active = href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                onClick={onNavigate}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                  active
                    ? "bg-purple-600/15 text-purple-300"
                    : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="space-y-3 border-t border-slate-800 px-5 py-4">
        <Link href="/dashboard" className="block text-xs text-slate-400 hover:text-white">
          ← Back to Ricoz app
        </Link>
        <UserButton showName />
      </div>
    </nav>
  );
}

export default function AdminShell({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const [open, setOpen] = useState(false);

  if (loading) return <FullScreenSpinner />;

  if (user?.role !== "admin") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#06090f] px-4 text-center">
        <ShieldAlert className="h-10 w-10 text-rose-400" />
        <h1 className="mt-4 text-xl font-bold text-white">Administrator access required</h1>
        <p className="mt-1 max-w-sm text-sm text-slate-400">
          {user
            ? `${user.email} does not have the admin role.`
            : "We couldn't load your profile from the server."}
        </p>
        <Link href="/dashboard" className="mt-5 text-sm font-semibold text-purple-400 hover:text-purple-300">
          Go to dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#06090f]">
      <div className="hidden lg:block">
        <Nav />
      </div>
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="relative h-full w-64">
            <Nav onNavigate={() => setOpen(false)} />
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute -right-12 top-4 rounded-lg bg-slate-900 p-2 text-slate-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 shrink-0 items-center border-b border-slate-800 px-4 lg:hidden">
          <button aria-label="Open menu" onClick={() => setOpen(true)} className="rounded-lg p-2 text-slate-300 hover:bg-slate-800">
            <Menu className="h-5 w-5" />
          </button>
        </header>
        <main className="flex-1 overflow-y-auto p-4 sm:p-8">{children}</main>
      </div>
    </div>
  );
}
