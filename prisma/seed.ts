import { prisma } from "../lib/prisma";
import { User, StudentProfile, TeacherProfile } from "../generated/prisma";

async function main() {
  console.log("Seeding database...");

  const teacher = await prisma.user.upsert({
    where: { email: "haider@classroom.com" },
    update: {},
    create: {
      email: "haider@classroom.com",
      name: "Professor Haider",
      password: "hashed_password_123",
      role: "TEACHER",
    },
  });

  await prisma.teacherProfile.upsert({
    where: { userId: teacher.id },
    update: {},
    create: {
      userId: teacher.id,
      specialization: "Physics & Mathematics",
      experience: "10 years",
    },
  });

  const student = await prisma.user.upsert({
    where: { email: "student@classroom.com" },
    update: {},
    create: {
      email: "student@classroom.com",
      name: "John Doe",
      password: "hashed_password_456",
      role: "STUDENT",
    },
  });

  await prisma.studentProfile.upsert({
    where: { userId: student.id },
    update: {},
    create: {
      userId: student.id,
      studentId: "26-B1-S001",
      phone: "+923001234567",
    },
  });

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
