import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/route";
import { unauthorizedResponse, forbiddenResponse } from "./api-response";

/**
 * Check if user is authenticated
 */
export async function requireAuth() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return {
      authenticated: false,
      user: null,
      response: unauthorizedResponse(),
    };
  }

  return {
    authenticated: true,
    user: session.user,
    response: null,
  };
}

/**
 * Check if user has specific role(s)
 */
export async function requireRole(roles: string | string[]) {
  const { authenticated, user, response } = await requireAuth();

  if (!authenticated) {
    return { authorized: false, user: null, response };
  }

  const userRole = (user as any)?.role;
  const roleArray = Array.isArray(roles) ? roles : [roles];

  if (!roleArray.includes(userRole)) {
    return {
      authorized: false,
      user,
      response: forbiddenResponse(
        `This action requires one of these roles: ${roleArray.join(", ")}`
      ),
    };
  }

  return {
    authorized: true,
    user,
    response: null,
  };
}

/**
 * Parse request body with error handling
 */
export async function parseRequestBody(request: Request) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

/**
 * Get query parameter from URL
 */
export function getQueryParam(request: Request, param: string): string | null {
  const { searchParams } = new URL(request.url);
  return searchParams.get(param);
}

/**
 * Get pagination params from request
 */
export function getPaginationParams(request: Request) {
  const skip = parseInt(getQueryParam(request, "skip") || "0");
  const take = parseInt(getQueryParam(request, "take") || "10");

  return {
    skip: Math.max(0, skip),
    take: Math.min(100, Math.max(1, take)), // Max 100 items per page
  };
}
