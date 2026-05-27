import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  hashPassword,
  validateEmail,
  validatePassword,
} from "@/lib/auth-utils";
import { UserRole } from "@prisma/client";

interface SignupRequest {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  role?: UserRole;
}

/**
 * POST /api/auth/signup
 * Register a new user account
 */
export async function POST(request: NextRequest) {
  try {
    const body: SignupRequest = await request.json();

    // Validate input
    if (!body.email || !body.password || !body.name) {
      return NextResponse.json(
        { error: "Missing required fields: email, password, name" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validateEmail(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate password match
    if (body.password !== body.confirmPassword) {
      return NextResponse.json(
        { error: "Passwords do not match" },
        { status: 400 }
      );
    }

    // Validate password strength
    const passwordValidation = validatePassword(body.password);
    if (!passwordValidation.isValid) {
      return NextResponse.json(
        { error: passwordValidation.errors.join("; ") },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(body.password);

    // Determine user role (default to STUDENT if not specified)
    const role: UserRole = body.role || UserRole.STUDENT;

    // Create user
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: hashedPassword,
        name: body.name,
        role,
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
      },
    });

    // Create profile based on role
    if (role === UserRole.STUDENT) {
      await prisma.studentProfile.create({
        data: {
          userId: user.id,
          studentId: `STU-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          status: "ACTIVE",
        },
      });
    } else if (role === UserRole.TEACHER) {
      await prisma.teacherProfile.create({
        data: {
          userId: user.id,
          specialization: "General",
        },
      });
    }

    return NextResponse.json(
      {
        message: "User registered successfully",
        user,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "An error occurred during registration" },
      { status: 500 }
    );
  }
}
