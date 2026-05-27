import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { successResponse, errorResponse, notFoundResponse, validationError } from "@/lib/api-response";
import { requireAuth, requireRole, getPaginationParams, parseRequestBody } from "@/lib/api-helpers";

/**
 * GET /api/enrollments
 * Fetch all enrollments (paginated)
 */
export async function GET(request: NextRequest) {
  const { authenticated, response: authResponse } = await requireAuth();
  if (!authenticated) return authResponse;

  try {
    const { skip, take } = getPaginationParams(request);
    const studentId = new URL(request.url).searchParams.get("studentId");
    const batchId = new URL(request.url).searchParams.get("batchId");

    const where = {};
    if (studentId) (where as any).studentId = studentId;
    if (batchId) (where as any).batchId = batchId;

    const [enrollments, total] = await Promise.all([
      prisma.enrollment.findMany({
        where,
        include: {
          student: {
            include: { user: { select: { name: true, email: true } } },
          },
          batch: {
            include: { subject: true },
          },
        },
        skip,
        take,
        orderBy: { enrolledAt: "desc" },
      }),
      prisma.enrollment.count({ where }),
    ]);

    return successResponse({
      enrollments,
      pagination: {
        total,
        skip,
        take,
        pages: Math.ceil(total / take),
      },
    });
  } catch (error) {
    console.error("Error fetching enrollments:", error);
    return errorResponse("Failed to fetch enrollments", 500);
  }
}

/**
 * POST /api/enrollments
 * Create a new enrollment (Teacher/Admin only)
 */
export async function POST(request: NextRequest) {
  const { authorized, response: authResponse } = await requireRole(["TEACHER", "ADMIN"]);
  if (!authorized) return authResponse;

  try {
    const body = await parseRequestBody(request);

    // Validation
    const errors: Record<string, string> = {};
    if (!body?.studentId) errors.studentId = "Student ID is required";
    if (!body?.batchId) errors.batchId = "Batch ID is required";

    if (Object.keys(errors).length > 0) {
      return validationError(errors);
    }

    // Check if student exists
    const studentExists = await prisma.studentProfile.findUnique({
      where: { id: body.studentId },
    });

    if (!studentExists) {
      return notFoundResponse("Student");
    }

    // Check if batch exists
    const batchExists = await prisma.batch.findUnique({
      where: { id: body.batchId },
    });

    if (!batchExists) {
      return notFoundResponse("Batch");
    }

    // Check if already enrolled
    const existingEnrollment = await prisma.enrollment.findUnique({
      where: {
        studentId_batchId: {
          studentId: body.studentId,
          batchId: body.batchId,
        },
      },
    });

    if (existingEnrollment) {
      return errorResponse("Student is already enrolled in this batch", 409);
    }

    const enrollment = await prisma.enrollment.create({
      data: {
        studentId: body.studentId,
        batchId: body.batchId,
        enrolledAt: new Date(),
      },
      include: {
        student: {
          include: { user: { select: { name: true, email: true } } },
        },
        batch: {
          include: { subject: true },
        },
      },
    });

    return successResponse(enrollment, 201, "Student enrolled successfully");
  } catch (error) {
    console.error("Error creating enrollment:", error);
    return errorResponse("Failed to create enrollment", 500);
  }
}
