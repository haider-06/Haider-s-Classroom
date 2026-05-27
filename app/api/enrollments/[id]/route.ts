import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { successResponse, errorResponse, notFoundResponse } from "@/lib/api-response";
import { requireAuth, requireRole, parseRequestBody } from "@/lib/api-helpers";

interface RouteParams {
  params: {
    id: string;
  };
}

/**
 * GET /api/enrollments/[id]
 * Fetch a single enrollment by ID
 */
export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  const { authenticated, response: authResponse } = await requireAuth();
  if (!authenticated) return authResponse;

  try {
    const enrollment = await prisma.enrollment.findUnique({
      where: { id: params.id },
      include: {
        student: {
          include: { user: { select: { name: true, email: true } } },
        },
        batch: {
          include: { subject: true },
        },
      },
    });

    if (!enrollment) {
      return notFoundResponse("Enrollment");
    }

    return successResponse(enrollment);
  } catch (error) {
    console.error("Error fetching enrollment:", error);
    return errorResponse("Failed to fetch enrollment", 500);
  }
}

/**
 * DELETE /api/enrollments/[id]
 * Remove an enrollment (Teacher/Admin only)
 */
export async function DELETE(
  request: NextRequest,
  { params }: RouteParams
) {
  const { authorized, response: authResponse } = await requireRole(["TEACHER", "ADMIN"]);
  if (!authorized) return authResponse;

  try {
    // Check if enrollment exists
    const enrollment = await prisma.enrollment.findUnique({
      where: { id: params.id },
    });

    if (!enrollment) {
      return notFoundResponse("Enrollment");
    }

    await prisma.enrollment.delete({
      where: { id: params.id },
    });

    return successResponse(null, 200, "Enrollment removed successfully");
  } catch (error) {
    console.error("Error deleting enrollment:", error);
    return errorResponse("Failed to remove enrollment", 500);
  }
}
