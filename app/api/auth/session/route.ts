import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../route";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/auth/session
 * Returns current user session with additional profile data
 */
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(null);
    }

    // Fetch full user data with profiles
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        teacherProfile: true,
        studentProfile: true,
      },
    });

    if (!user) {
      return NextResponse.json(null);
    }

    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        teacherProfile: user.teacherProfile,
        studentProfile: user.studentProfile,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    console.error("Session error:", error);
    return NextResponse.json(null);
  }
}
