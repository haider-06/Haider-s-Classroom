import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { successResponse, errorResponse, notFoundResponse, validationError } from "@/lib/api-response";
import { requireAuth, getPaginationParams, parseRequestBody } from "@/lib/api-helpers";

/**
 * GET /api/students
 * Fetch all students with pagination
 */
export async function GET(request: NextRequest) {
  const { authenticated, response: authResponse } = await requireAuth();
  if (!authenticated) return authResponse;

  try {
    const { skip, take } = getPaginationParams(request);

    const [students, total] = await Promise.all([
      prisma.studentProfile.findMany({
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              role: true,
            },
          },
        },
        skip,
        take,
        orderBy: { createdAt: "desc" },
      }),
      prisma.studentProfile.count(),
    ]);

    return successResponse({
      students,
      pagination: {
        total,
        skip,
        take,
        pages: Math.ceil(total / take),
      },
    });
  } catch (error) {
    console.error("Error fetching students:", error);
    return errorResponse("Failed to fetch students", 500);
  }
}

/**
 * POST /api/students
 * Create a new student profile
 */
export async function POST(request: NextRequest) {
  const { authenticated, user, response: authResponse } = await requireAuth();
  if (!authenticated) return authResponse;

  try {
    const body = await parseRequestBody(request);

    // Validation
    const errors: Record<string, string> = {};
    if (!body?.userId) errors.userId = "User ID is required";
    if (!body?.studentId) errors.studentId = "Student ID is required";

    if (Object.keys(errors).length > 0) {
      return validationError(errors);
    }

    // Check if user exists
    const userExists = await prisma.user.findUnique({
      where: { id: body.userId },
    });

    if (!userExists) {
      return notFoundResponse("User");
    }

    // Check if student already exists
    const existingStudent = await prisma.studentProfile.findUnique({
      where: { userId: body.userId },
    });

    if (existingStudent) {
      return errorResponse("Student profile already exists for this user", 409);
    }

    const student = await prisma.studentProfile.create({
      data: {
        userId: body.userId,
        studentId: body.studentId,
        status: body.status || "ACTIVE",
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
      },
    });

    return successResponse(student, 201, "Student profile created successfully");
  } catch (error) {
    console.error("Error creating student:", error);
    return errorResponse("Failed to create student profile", 500);
  }
    const student = await prisma.studentProfile.create({
      data: {
        userId: user.id,
        studentId,
        phone,
      },
    });

    return NextResponse.json(student, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create student" }, { status: 500 });
  }
}