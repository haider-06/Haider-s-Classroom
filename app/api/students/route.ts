import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const students = await prisma.studentProfile.findMany({
      include: { user: true }
    });
    return NextResponse.json(students);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch students" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name, phone, studentId } = body;

    // Create user first
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: "hashed_password_placeholder", // In real app, use bcrypt
        role: "STUDENT",
      },
    });

    // Create student profile
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