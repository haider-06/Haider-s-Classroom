import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

/**
 * Proxy configuration for role-based access control
 * Replaces the deprecated middleware.ts convention in Next.js 16+
 */
export async function proxy(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // Public routes that don't require authentication
  const publicRoutes = [
    "/",
    "/login",
    "/auth/error",
    "/api/auth/signin",
    "/api/auth/callback",
    "/api/auth/signup",
    "/api/auth/session",
    "/api/health",
  ];

  const isPublicRoute = publicRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Protected routes require authentication
  if (!token) {
    if (request.nextUrl.pathname.startsWith("/api")) {
      return NextResponse.json(
        { error: "Unauthorized - Please sign in" },
        { status: 401 }
      );
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Role-based access control
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/teacher")) {
    if ((token as any).role !== "TEACHER") {
      return NextResponse.json(
        { error: "Forbidden - Teacher access required" },
        { status: 403 }
      );
    }
  }

  if (pathname.startsWith("/student")) {
    if ((token as any).role !== "STUDENT") {
      return NextResponse.json(
        { error: "Forbidden - Student access required" },
        { status: 403 }
      );
    }
  }

  if (pathname.startsWith("/admin")) {
    if ((token as any).role !== "ADMIN") {
      return NextResponse.json(
        { error: "Forbidden - Admin access required" },
        { status: 403 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
