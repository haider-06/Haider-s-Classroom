import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { successResponse, errorResponse, notFoundResponse, forbiddenResponse, validationError } from "@/lib/api-response";
import { requireAuth, parseRequestBody } from "@/lib/api-helpers";

interface RouteParams {
  params: {
    id: string;
  };
}

/**
 * GET /api/students/[id]
 * Fetch a single student by ID
 */
export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  const { authenticated, response: authResponse } = await requireAuth();
  if (!authenticated) return authResponse;

  try {
    const student = await prisma.studentProfile.findUnique({
      where: { id: params.id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
          },
        },
      },
    });

    if (!student) {
      return notFoundResponse("Student");
    }

    return successResponse(student);
  } catch (error) {
    console.error("Error fetching student:", error);
    return errorResponse("Failed to fetch student", 500);
  }
}

/**
 * PUT /api/students/[id]
 * Update a student profile
 */
export async function PUT(
  request: NextRequest,
  { params }: RouteParams
) {
  const { authenticated, user, response: authResponse } = await requireAuth();
  if (!authenticated) return authResponse;

  try {
    // Check if student exists
    const student = await prisma.studentProfile.findUnique({
      where: { id: params.id },
    });

    if (!student) {
      return notFoundResponse("Student");
    }

    const body = await parseRequestBody(request);
    if (!body) {
      return errorResponse("Invalid request body");
    }

    const updatedStudent = await prisma.studentProfile.update({
      where: { id: params.id },
      data: {
        studentId: body.studentId || student.studentId,
        status: body.status || student.status,
        phone: body.phone,
        address: body.address,
        dateOfBirth: body.dateOfBirth,
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

    return successResponse(updatedStudent, 200, "Student profile updated successfully");
  } catch (error) {
    console.error("Error updating student:", error);
    return errorResponse("Failed to update student profile", 500);
  }
}

/**
 * DELETE /api/students/[id]
 * Delete a student profile
 */
export async function DELETE(
  request: NextRequest,
  { params }: RouteParams
) {
  const { authenticated, user, response: authResponse } = await requireAuth();
  if (!authenticated) return authResponse;

  try {
    // Check if student exists
    const student = await prisma.studentProfile.findUnique({
      where: { id: params.id },
    });

    if (!student) {
      return notFoundResponse("Student");
    }

    await prisma.studentProfile.delete({
      where: { id: params.id },
    });

    return successResponse(null, 200, "Student profile deleted successfully");
  } catch (error) {
    console.error("Error deleting student:", error);
    return errorResponse("Failed to delete student profile", 500);
  }
}
