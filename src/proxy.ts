import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  const { isAuthenticated, redirectToSignIn } = await auth();
  const pathname = req.nextUrl.pathname;

  // Logged-in user landing page -> dashboard
  if (pathname === "/" && isAuthenticated) {
    return NextResponse.redirect(
      new URL("/dashboard", req.url)
    );
  }

  // Logged-in admin opening login page -> admin panel
  if (pathname.startsWith("/admin/login")) {
    if (isAuthenticated) {
      return NextResponse.redirect(
        new URL("/admin", req.url)
      );
    }

    return NextResponse.next();
  }

  // Protect dashboard
  if (pathname.startsWith("/dashboard")) {
    if (!isAuthenticated) {
      return redirectToSignIn({
        returnBackUrl: req.url,
      });
    }
  }

  // Protect admin
  if (
    pathname === "/admin" ||
    pathname.startsWith("/admin/")
  ) {
    if (!isAuthenticated) {
      return NextResponse.redirect(
        new URL("/admin/login", req.url)
      );
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)",
    "/(api|trpc)(.*)",
  ],
};