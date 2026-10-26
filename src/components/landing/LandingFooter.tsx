import { ArrowRight, Factory } from "lucide-react";
import Link from "next/link";

export default function LandingFooter() {
  return (
    <>
      {/* Pre-Footer Action Banner */}
      <section className="border-t border-slate-800 bg-linear-to-b from-slate-900/60 to-slate-950 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-8 sm:p-12 shadow-2xl">
            <span className="font-mono text-xs uppercase tracking-wider text-blue-400">
              OPERATIONAL COMMAND
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to unify your manufacturing floor?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Step into an industrial manufacturing ERP built for speed, material traceability, and
              seamless shop-floor coordination.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/sign-up"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition duration-150 hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 text-sm font-medium text-slate-200 transition duration-150 hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Access Existing Account</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-xs">
                <Factory className="h-4 w-4" />
              </span>
              <div>
                <span className="text-sm font-bold tracking-tight text-white">Ricoz ERP</span>
                <p className="text-[11px] text-slate-400 font-mono">Manufacturing Operations Platform</p>
              </div>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
              <Link href="#capabilities" className="hover:text-slate-200 transition">
                Capabilities
              </Link>
              <Link href="#modules" className="hover:text-slate-200 transition">
                Modules
              </Link>
              <Link href="#workflow" className="hover:text-slate-200 transition">
                Workflow
              </Link>
              <Link href="/info" className="hover:text-slate-200 transition">
                System Specs
              </Link>
              <Link href="/login" className="hover:text-slate-200 transition">
                Sign In
              </Link>
              <Link href="/sign-up" className="hover:text-slate-200 transition">
                Sign Up
              </Link>
              <Link href="/dashboard" className="hover:text-slate-200 transition">
                Dashboard
              </Link>
            </nav>

            {/* Operational Readiness Status (Reduced-motion safe) */}
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono font-medium text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse motion-reduce:animate-none" />
              <span>ENTERPRISE ARCHITECTURE READY</span>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-800/80 pt-6 text-center text-xs text-slate-400">
            © Ricoz. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
