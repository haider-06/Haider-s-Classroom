import { NextResponse } from "next/server";

export type ApiResponse<T = any> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
};

/**
 * Success response helper
 */
export function successResponse<T>(
  data: T,
  status: number = 200,
  message?: string
): NextResponse<ApiResponse<T>> {
  return NextResponse.json(
    {
      success: true,
      data,
      message,
    },
    { status }
  );
}

/**
 * Error response helper
 */
export function errorResponse(
  error: string,
  status: number = 400
): NextResponse<ApiResponse> {
  return NextResponse.json(
    {
      success: false,
      error,
    },
    { status }
  );
}

/**
 * Validation error helper
 */
export function validationError(
  errors: Record<string, string>
): NextResponse<ApiResponse> {
  return NextResponse.json(
    {
      success: false,
      error: "Validation failed",
      data: errors,
    },
    { status: 400 }
  );
}

/**
 * Not found response
 */
export function notFoundResponse(resource: string): NextResponse<ApiResponse> {
  return NextResponse.json(
    {
      success: false,
      error: `${resource} not found`,
    },
    { status: 404 }
  );
}

/**
 * Unauthorized response
 */
export function unauthorizedResponse(): NextResponse<ApiResponse> {
  return NextResponse.json(
    {
      success: false,
      error: "Unauthorized - please sign in",
    },
    { status: 401 }
  );
}

/**
 * Forbidden response
 */
export function forbiddenResponse(reason?: string): NextResponse<ApiResponse> {
  return NextResponse.json(
    {
      success: false,
      error: reason || "Forbidden - you don't have permission to access this",
    },
    { status: 403 }
  );
}
