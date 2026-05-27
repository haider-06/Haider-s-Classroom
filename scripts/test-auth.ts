import { prisma } from "../lib/prisma";
import { hashPassword } from "../lib/auth-utils";

async function testAuth() {
  console.log("🔐 Testing Authentication System...\n");

  try {
    // Test 1: Create a test user
    console.log("Test 1: Creating test user...");
    const testEmail = `test-${Date.now()}@classroom.com`;
    const testPassword = "TestPass123!";
    const hashedPassword = await hashPassword(testPassword);

    const user = await prisma.user.create({
      data: {
        email: testEmail,
        password: hashedPassword,
        name: "Test User",
        role: "STUDENT",
      },
    });

    console.log(`✅ User created: ${user.email} (ID: ${user.id})\n`);

    // Test 2: Create student profile
    console.log("Test 2: Creating student profile...");
    const studentProfile = await prisma.studentProfile.create({
      data: {
        userId: user.id,
        studentId: `STU-${Date.now()}`,
        status: "ACTIVE",
      },
    });

    console.log(`✅ Student profile created (ID: ${studentProfile.id})\n`);

    // Test 3: Verify password
    console.log("Test 3: Verifying password...");
    const { verifyPassword } = await import("../lib/auth-utils");
    const isValid = await verifyPassword(testPassword, hashedPassword);
    console.log(`✅ Password verification: ${isValid ? "VALID" : "INVALID"}\n`);

    // Test 4: Fetch user with profile
    console.log("Test 4: Fetching user with profile...");
    const userWithProfile = await prisma.user.findUnique({
      where: { email: testEmail },
      include: {
        studentProfile: true,
        teacherProfile: true,
      },
    });

    console.log(
      `✅ User fetched:`,
      JSON.stringify(userWithProfile, null, 2),
      "\n"
    );

    // Test 5: Count users
    console.log("Test 5: Counting users...");
    const userCount = await prisma.user.count();
    console.log(`✅ Total users in database: ${userCount}\n`);

    // Cleanup
    console.log("Cleaning up test data...");
    await prisma.studentProfile.delete({
      where: { id: studentProfile.id },
    });
    await prisma.user.delete({
      where: { id: user.id },
    });
    console.log("✅ Test data removed\n");

    console.log("✅ All authentication tests passed!");
  } catch (error) {
    console.error("❌ Authentication test failed:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

testAuth();
