import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  const { isAuthenticated } = await auth();
  const pathname = req.nextUrl.pathname;

  // Home -> dashboard
  if (pathname === "/" && isAuthenticated) {
    return NextResponse.redirect(
      new URL("/dashboard", req.url)
    );
  }

  // Logged in user opening admin login
  if (
    pathname.startsWith("/admin/login") &&
    isAuthenticated
  ) {
    return NextResponse.redirect(
      new URL("/admin", req.url)
    );
  }

  // Dashboard protection
  if (
    pathname.startsWith("/dashboard") &&
    !isAuthenticated
  ) {
    return NextResponse.redirect(
      new URL("/admin/login", req.url)
    );
  }

  // Admin protection except login
  if (
    pathname.startsWith("/admin") &&
    !pathname.startsWith("/admin/login") &&
    !isAuthenticated
  ) {
    return NextResponse.redirect(
      new URL("/admin/login", req.url)
    );
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)",
    "/(api|trpc)(.*)",
  ],
};