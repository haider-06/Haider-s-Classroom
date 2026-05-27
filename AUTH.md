# Authentication Guide - Haider's Classroom

## Overview

Complete authentication system for **Haider's Classroom** with NextAuth.js, Prisma, and role-based access control (RBAC).

## Features

✅ **Credentials-based Login** - Email + password authentication  
✅ **User Registration** - Signup with password validation  
✅ **Password Hashing** - bcryptjs with 10 salt rounds  
✅ **JWT Sessions** - 30-day session tokens  
✅ **Role-Based Access Control** - ADMIN, TEACHER, STUDENT roles  
✅ **Protected Routes** - Middleware-based route protection  
✅ **Profile Creation** - Auto-create profiles on signup  
✅ **Session Management** - Fetch user session with profiles  

## Architecture

```
Authentication Flow
├── User Registration (/api/auth/signup)
│   ├── Email validation
│   ├── Password strength check
│   ├── Password hashing
│   └── Profile creation
│
├── Login (/api/auth/[...nextauth])
│   ├── Credentials verification
│   ├── JWT token generation
│   └── Session callback
│
├── Protected Routes (middleware.ts)
│   ├── Public routes (no auth required)
│   ├── Protected routes (auth required)
│   └── Role-based routes (specific roles only)
│
└── Client-Side Hooks (hooks/useAuth.ts)
    ├── useAuth() - Current session
    ├── useRole() - Role checking
    ├── useLogin() - Login handler
    ├── useSignup() - Signup handler
    └── useLogout() - Logout handler
```

## Setup

### 1. Environment Variables

Add to `.env`:

```env
NEXTAUTH_SECRET=<generate with: openssl rand -base64 32>
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=postgres://...@pooled.db.prisma.io:5432/postgres?sslmode=require
```

### 2. Install Dependencies

```bash
npm install next-auth bcryptjs @next-auth/prisma-adapter
npm install -D @types/next-auth
```

### 3. Update Database Schema

Already configured in `prisma/schema.prisma` with:
- User model with email, password, name, role
- StudentProfile linked to User
- TeacherProfile linked to User

### 4. Run Migration

```bash
npx prisma migrate dev
npx prisma db seed  # Populates test data
```

## API Endpoints

### **POST /api/auth/signup**

Register a new user account.

**Request:**
```json
{
  "email": "student@classroom.com",
  "password": "SecurePass123!",
  "confirmPassword": "SecurePass123!",
  "name": "John Student",
  "role": "STUDENT"
}
```

**Response (201):**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "user-id",
    "email": "student@classroom.com",
    "name": "John Student",
    "role": "STUDENT",
    "createdAt": "2026-05-28T..."
  }
}
```

**Errors:**
- `400` - Missing fields, invalid email, password mismatch, weak password
- `409` - User already exists
- `500` - Server error

**Password Requirements:**
- Minimum 8 characters
- At least 1 uppercase letter
- At least 1 lowercase letter
- At least 1 number

### **POST /api/auth/signin**

Login with credentials (via NextAuth).

**Request:**
```json
{
  "email": "student@classroom.com",
  "password": "SecurePass123!"
}
```

**Response:**
```json
{
  "user": {
    "id": "user-id",
    "email": "student@classroom.com",
    "name": "John Student",
    "role": "STUDENT"
  }
}
```

### **GET /api/auth/session**

Fetch current user session with profile data.

**Response (200):**
```json
{
  "user": {
    "id": "user-id",
    "email": "student@classroom.com",
    "name": "John Student",
    "role": "STUDENT",
    "studentProfile": {
      "id": "profile-id",
      "studentId": "26-B1-S001",
      "status": "ACTIVE"
    },
    "teacherProfile": null,
    "createdAt": "2026-05-28T..."
  }
}
```

### **POST /api/auth/signout**

Logout and clear session.

```bash
curl -X POST http://localhost:3000/api/auth/signout
```

## Client-Side Usage

### useAuth Hook

Get current session:

```typescript
"use client";

import { useAuth } from "@/hooks/useAuth";

export function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated) return <div>Not logged in</div>;

  return <div>Welcome, {user?.name}!</div>;
}
```

### useRole Hook

Check user role:

```typescript
"use client";

import { useRole } from "@/hooks/useAuth";

export function TeacherSection() {
  const { isTeacher, hasRole } = useRole();

  if (!isTeacher()) return null;

  return <div>Teacher-only content</div>;
}
```

### useLogin Hook

Handle login:

```typescript
"use client";

import { useLogin } from "@/hooks/useAuth";
import { useState } from "react";

export function LoginForm() {
  const { login } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = await login(email, password);
    
    if (result.success) {
      // User is redirected automatically based on role
    } else {
      console.error(result.error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

### useSignup Hook

Handle registration:

```typescript
"use client";

import { useSignup } from "@/hooks/useAuth";

export function SignupForm() {
  const { signup } = useSignup();

  async function handleSignup(data: any) {
    const result = await signup(
      data.email,
      data.password,
      data.confirmPassword,
      data.name,
      "STUDENT" // or "TEACHER"
    );

    if (!result.success) {
      console.error(result.error);
    }
  }

  // Form implementation...
}
```

### useLogout Hook

Handle logout:

```typescript
"use client";

import { useLogout } from "@/hooks/useAuth";

export function LogoutButton() {
  const { logout } = useLogout();

  return <button onClick={logout}>Logout</button>;
}
```

## Protected Routes

### Middleware Protection

Routes are protected by `middleware.ts`:

**Public Routes:**
- `/` - Home page
- `/login` - Login page
- `/api/auth/*` - Auth endpoints
- `/api/health` - Health check

**Protected Routes:**
- `/dashboard` - Requires authentication
- `/teacher/*` - Requires TEACHER role
- `/student/*` - Requires STUDENT role
- `/admin/*` - Requires ADMIN role

### Route Protection Example

```typescript
// app/teacher/dashboard/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/route";
import { redirect } from "next/navigation";

export default async function TeacherDashboard() {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any)?.role !== "TEACHER") {
    redirect("/login");
  }

  return <div>Teacher Dashboard</div>;
}
```

## Security Utilities

### Password Hashing

```typescript
import { hashPassword, verifyPassword } from "@/lib/auth-utils";

// Hash a password
const hashed = await hashPassword("MyPassword123!");

// Verify a password
const isValid = await verifyPassword("MyPassword123!", hashed);
```

### Password Validation

```typescript
import { validatePassword } from "@/lib/auth-utils";

const result = validatePassword("weak");
console.log(result);
// {
//   isValid: false,
//   errors: [
//     "Password must be at least 8 characters long",
//     "Password must contain at least one uppercase letter",
//     ...
//   ]
// }
```

### Email Validation

```typescript
import { validateEmail } from "@/lib/auth-utils";

validateEmail("user@example.com"); // true
validateEmail("invalid-email"); // false
```

### Generate Password

```typescript
import { generatePassword } from "@/lib/auth-utils";

const tempPassword = generatePassword();
// e.g., "aB3!cD5@eF7#gH9$"
```

## Testing Auth

### Test Signup

```bash
curl -X POST http://localhost:3000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "newuser@test.com",
    "password": "TestPass123!",
    "confirmPassword": "TestPass123!",
    "name": "Test User",
    "role": "STUDENT"
  }'
```

### Test Login

```bash
curl -X POST http://localhost:3000/api/auth/signin \
  -H "Content-Type: application/json" \
  -d '{
    "email": "haider@classroom.com",
    "password": "SecurePass123!"
  }'
```

### Test Protected Route

```bash
# Without auth - should redirect
curl http://localhost:3000/teacher/dashboard

# With auth cookie - should return page
curl -b "sessionToken=..." http://localhost:3000/teacher/dashboard
```

## Database Schema

### User Table

```prisma
model User {
  id                String            @id @default(cuid())
  email             String            @unique
  password          String
  name              String
  role              UserRole          @default(STUDENT)
  
  studentProfile    StudentProfile?
  teacherProfile    TeacherProfile?
  
  createdAt         DateTime          @default(now())
  updatedAt         DateTime          @updatedAt
}

enum UserRole {
  ADMIN
  TEACHER
  STUDENT
}
```

### StudentProfile Table

```prisma
model StudentProfile {
  id          String   @id @default(cuid())
  userId      String   @unique
  studentId   String   @unique
  status      StudentStatus @default(ACTIVE)
  
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

enum StudentStatus {
  ACTIVE
  INACTIVE
  GRADUATED
  DROPPED
}
```

## Production Checklist

- [ ] Generate strong `NEXTAUTH_SECRET` - `openssl rand -base64 32`
- [ ] Set `NEXTAUTH_URL` to production domain
- [ ] Enable HTTPS in production
- [ ] Configure secure session cookies
- [ ] Set up email verification (optional)
- [ ] Implement refresh token rotation
- [ ] Add rate limiting to login endpoint
- [ ] Configure CORS if needed
- [ ] Set up logging for auth events
- [ ] Regular password policy enforcement

## Troubleshooting

### "Invalid credentials" error

1. Verify email exists in database
2. Check password is correct
3. Ensure password was hashed with bcrypt during signup

### Session not persisting

1. Verify `NEXTAUTH_SECRET` is set
2. Check session is being returned from JWT callback
3. Clear browser cookies and try again

### Protected route showing 401

1. Verify user is logged in: `curl http://localhost:3000/api/auth/session`
2. Check middleware.ts includes the route
3. Verify token is not expired (30 days default)

### Role-based access denied

1. Verify user role in database: `SELECT * FROM User WHERE email='...'`
2. Check JWT callback includes role
3. Verify session callback updates session with role

## Next Steps

1. **Email Verification** - Add email confirmation flow
2. **OAuth Providers** - Add Google/GitHub login
3. **Two-Factor Auth** - Add 2FA support
4. **Password Reset** - Implement forgot password flow
5. **Audit Logging** - Log all auth events
6. **Rate Limiting** - Prevent brute force attacks
