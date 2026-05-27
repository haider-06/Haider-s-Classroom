import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { successResponse, errorResponse, notFoundResponse, validationError } from "@/lib/api-response";
import { requireAuth, requireRole, getPaginationParams, parseRequestBody } from "@/lib/api-helpers";

/**
 * GET /api/subjects
 * Fetch all subjects (paginated)
 */
export async function GET(request: NextRequest) {
  const { authenticated, response: authResponse } = await requireAuth();
  if (!authenticated) return authResponse;

  try {
    const { skip, take } = getPaginationParams(request);

    const [subjects, total] = await Promise.all([
      prisma.subject.findMany({
        skip,
        take,
        orderBy: { name: "asc" },
      }),
      prisma.subject.count(),
    ]);

    return successResponse({
      subjects,
      pagination: {
        total,
        skip,
        take,
        pages: Math.ceil(total / take),
      },
    });
  } catch (error) {
    console.error("Error fetching subjects:", error);
    return errorResponse("Failed to fetch subjects", 500);
  }
}

/**
 * POST /api/subjects
 * Create a new subject (Teacher/Admin only)
 */
export async function POST(request: NextRequest) {
  const { authorized, response: authResponse } = await requireRole(["TEACHER", "ADMIN"]);
  if (!authorized) return authResponse;

  try {
    const body = await parseRequestBody(request);

    // Validation
    const errors: Record<string, string> = {};
    if (!body?.name) errors.name = "Subject name is required";
    if (!body?.code) errors.code = "Subject code is required";

    if (Object.keys(errors).length > 0) {
      return validationError(errors);
    }

    // Check if subject code already exists
    const existingSubject = await prisma.subject.findUnique({
      where: { code: body.code },
    });

    if (existingSubject) {
      return errorResponse("Subject code already exists", 409);
    }

    const subject = await prisma.subject.create({
      data: {
        name: body.name,
        code: body.code,
        description: body.description,
      },
    });

    return successResponse(subject, 201, "Subject created successfully");
  } catch (error) {
    console.error("Error creating subject:", error);
    return errorResponse("Failed to create subject", 500);
  }
}
