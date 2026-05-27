import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { successResponse, errorResponse, notFoundResponse, validationError } from "@/lib/api-response";
import { requireAuth, requireRole, parseRequestBody } from "@/lib/api-helpers";

interface RouteParams {
  params: {
    id: string;
  };
}

/**
 * GET /api/subjects/[id]
 * Fetch a single subject by ID
 */
export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  const { authenticated, response: authResponse } = await requireAuth();
  if (!authenticated) return authResponse;

  try {
    const subject = await prisma.subject.findUnique({
      where: { id: params.id },
      include: {
        units: true,
      },
    });

    if (!subject) {
      return notFoundResponse("Subject");
    }

    return successResponse(subject);
  } catch (error) {
    console.error("Error fetching subject:", error);
    return errorResponse("Failed to fetch subject", 500);
  }
}

/**
 * PUT /api/subjects/[id]
 * Update a subject (Teacher/Admin only)
 */
export async function PUT(
  request: NextRequest,
  { params }: RouteParams
) {
  const { authorized, response: authResponse } = await requireRole(["TEACHER", "ADMIN"]);
  if (!authorized) return authResponse;

  try {
    // Check if subject exists
    const subject = await prisma.subject.findUnique({
      where: { id: params.id },
    });

    if (!subject) {
      return notFoundResponse("Subject");
    }

    const body = await parseRequestBody(request);
    if (!body) {
      return errorResponse("Invalid request body");
    }

    const updatedSubject = await prisma.subject.update({
      where: { id: params.id },
      data: {
        name: body.name || subject.name,
        code: body.code || subject.code,
        description: body.description || subject.description,
      },
    });

    return successResponse(updatedSubject, 200, "Subject updated successfully");
  } catch (error) {
    console.error("Error updating subject:", error);
    return errorResponse("Failed to update subject", 500);
  }
}

/**
 * DELETE /api/subjects/[id]
 * Delete a subject (Admin only)
 */
export async function DELETE(
  request: NextRequest,
  { params }: RouteParams
) {
  const { authorized, response: authResponse } = await requireRole(["ADMIN"]);
  if (!authorized) return authResponse;

  try {
    // Check if subject exists
    const subject = await prisma.subject.findUnique({
      where: { id: params.id },
      include: { units: true },
    });

    if (!subject) {
      return notFoundResponse("Subject");
    }

    // Prevent deletion if there are units
    if (subject.units.length > 0) {
      return errorResponse("Cannot delete subject with existing units", 409);
    }

    await prisma.subject.delete({
      where: { id: params.id },
    });

    return successResponse(null, 200, "Subject deleted successfully");
  } catch (error) {
    console.error("Error deleting subject:", error);
    return errorResponse("Failed to delete subject", 500);
  }
}
