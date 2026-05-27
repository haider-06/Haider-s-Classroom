import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const payments = await prisma.payment.findMany({
      include: { student: { include: { user: true } } }
    });
    return NextResponse.json(payments);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch payments" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { studentId, amount, month, year, feeType, method } = body;

    const payment = await prisma.payment.create({
      data: {
        studentId,
        amount,
        month,
        year,
        feeType,
        method,
      },
    });

    return NextResponse.json(payment, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to record payment" }, { status: 500 });
  }
}