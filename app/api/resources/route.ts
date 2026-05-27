import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const resources = await prisma.resource.findMany({
      include: { teacher: { include: { user: true } } }
    });
    return NextResponse.json(resources);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch resources" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, type, url, fileSize, duration, subjectId, unitId, teacherId } = body;

    const resource = await prisma.resource.create({
      data: {
        title,
        type,
        url,
        fileSize,
        duration,
        subjectId,
        unitId,
        teacherId,
      },
    });

    return NextResponse.json(resource, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to upload resource" }, { status: 500 });
  }
}