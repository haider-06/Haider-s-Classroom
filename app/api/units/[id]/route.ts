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
 * GET /api/units/[id]
 * Fetch a single unit by ID
 */
export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  const { authenticated, response: authResponse } = await requireAuth();
  if (!authenticated) return authResponse;

  try {
    const unit = await prisma.unit.findUnique({
      where: { id: params.id },
      include: {
        subject: true,
        resources: true,
      },
    });

    if (!unit) {
      return notFoundResponse("Unit");
    }

    return successResponse(unit);
  } catch (error) {
    console.error("Error fetching unit:", error);
    return errorResponse("Failed to fetch unit", 500);
  }
}

/**
 * PUT /api/units/[id]
 * Update a unit (Teacher/Admin only)
 */
export async function PUT(
  request: NextRequest,
  { params }: RouteParams
) {
  const { authorized, response: authResponse } = await requireRole(["TEACHER", "ADMIN"]);
  if (!authorized) return authResponse;

  try {
    // Check if unit exists
    const unit = await prisma.unit.findUnique({
      where: { id: params.id },
    });

    if (!unit) {
      return notFoundResponse("Unit");
    }

    const body = await parseRequestBody(request);
    if (!body) {
      return errorResponse("Invalid request body");
    }

    const updatedUnit = await prisma.unit.update({
      where: { id: params.id },
      data: {
        name: body.name || unit.name,
        description: body.description || unit.description,
        orderIndex: body.orderIndex !== undefined ? body.orderIndex : unit.orderIndex,
      },
      include: {
        subject: true,
        resources: true,
      },
    });

    return successResponse(updatedUnit, 200, "Unit updated successfully");
  } catch (error) {
    console.error("Error updating unit:", error);
    return errorResponse("Failed to update unit", 500);
  }
}

/**
 * DELETE /api/units/[id]
 * Delete a unit (Admin only)
 */
export async function DELETE(
  request: NextRequest,
  { params }: RouteParams
) {
  const { authorized, response: authResponse } = await requireRole(["ADMIN"]);
  if (!authorized) return authResponse;

  try {
    // Check if unit exists
    const unit = await prisma.unit.findUnique({
      where: { id: params.id },
      include: { resources: true },
    });

    if (!unit) {
      return notFoundResponse("Unit");
    }

    // Prevent deletion if there are resources
    if (unit.resources.length > 0) {
      return errorResponse("Cannot delete unit with existing resources", 409);
    }

    await prisma.unit.delete({
      where: { id: params.id },
    });

    return successResponse(null, 200, "Unit deleted successfully");
  } catch (error) {
    console.error("Error deleting unit:", error);
    return errorResponse("Failed to delete unit", 500);
  }
}
