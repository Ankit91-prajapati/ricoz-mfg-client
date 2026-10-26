import type { Metadata } from "next";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ricoz",
  description: "Manufacturing management dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div>Page is Loading</div>}>
          <ClerkProvider >{children}</ClerkProvider>
        </Suspense>

        <Toaster
          position="top-right"
          toastOptions={{
            style: { background: "#0f172a", color: "#f1f5f9", border: "1px solid #334155" },
          }}
        />
      </body>
    </html>
  );
}
