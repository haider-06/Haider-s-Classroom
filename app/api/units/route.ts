import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { successResponse, errorResponse, notFoundResponse, validationError } from "@/lib/api-response";
import { requireAuth, requireRole, getPaginationParams, parseRequestBody } from "@/lib/api-helpers";

/**
 * GET /api/units
 * Fetch all units (paginated)
 */
export async function GET(request: NextRequest) {
  const { authenticated, response: authResponse } = await requireAuth();
  if (!authenticated) return authResponse;

  try {
    const { skip, take } = getPaginationParams(request);
    const subjectId = new URL(request.url).searchParams.get("subjectId");

    const where = subjectId ? { subjectId } : {};

    const [units, total] = await Promise.all([
      prisma.unit.findMany({
        where,
        include: {
          subject: true,
          resources: true,
        },
        skip,
        take,
        orderBy: { createdAt: "desc" },
      }),
      prisma.unit.count({ where }),
    ]);

    return successResponse({
      units,
      pagination: {
        total,
        skip,
        take,
        pages: Math.ceil(total / take),
      },
    });
  } catch (error) {
    console.error("Error fetching units:", error);
    return errorResponse("Failed to fetch units", 500);
  }
}

/**
 * POST /api/units
 * Create a new unit (Teacher/Admin only)
 */
export async function POST(request: NextRequest) {
  const { authorized, response: authResponse } = await requireRole(["TEACHER", "ADMIN"]);
  if (!authorized) return authResponse;

  try {
    const body = await parseRequestBody(request);

    // Validation
    const errors: Record<string, string> = {};
    if (!body?.name) errors.name = "Unit name is required";
    if (!body?.subjectId) errors.subjectId = "Subject ID is required";

    if (Object.keys(errors).length > 0) {
      return validationError(errors);
    }

    // Check if subject exists
    const subjectExists = await prisma.subject.findUnique({
      where: { id: body.subjectId },
    });

    if (!subjectExists) {
      return notFoundResponse("Subject");
    }

    const unit = await prisma.unit.create({
      data: {
        name: body.name,
        subjectId: body.subjectId,
        description: body.description,
        orderIndex: body.orderIndex || 0,
      },
      include: {
        subject: true,
      },
    });

    return successResponse(unit, 201, "Unit created successfully");
  } catch (error) {
    console.error("Error creating unit:", error);
    return errorResponse("Failed to create unit", 500);
  }
}
