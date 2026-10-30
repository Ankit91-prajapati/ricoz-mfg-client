import { SignIn } from "@clerk/nextjs";
import { ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#06090f] px-4 py-12">
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center opacity-30">
        <div className="h-120 w-120 rounded-full bg-purple-600/10 blur-[120px]" />
      </div>
      <div className="relative z-10 mb-6 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-600/15 text-purple-400">
          <ShieldAlert className="h-6 w-6" />
        </div>
        <h1 className="mt-3 text-2xl font-black tracking-tight text-white">Admin Console</h1>
        <p className="mt-1 text-xs text-slate-400">Sign in with an administrator account.</p>
      </div>
      <div className="relative z-10">
        <SignIn path="/admin/login" routing="path" forceRedirectUrl="/admin" signUpUrl="/sign-up" />
      </div>
      <Link href="/" className="relative z-10 mt-6 text-xs text-slate-500 hover:text-slate-300">
        ← Return to Ricoz
      </Link>
    </div>
  );
}
