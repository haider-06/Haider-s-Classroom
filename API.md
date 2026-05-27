# API Documentation - Haider's Classroom

## Overview

RESTful API for managing the educational portal. All endpoints are protected by authentication and role-based access control (RBAC).

## Base URL

`/api`

## Authentication

All requests must include a valid session cookie.

- **Unauthorized (401)**: User is not logged in.
- **Forbidden (403)**: User does not have the required role.

## Response Format

All responses follow a consistent structure:

```json
{
  "success": boolean,
  "data": any | null,
  "error": string | null,
  "message": string | null
}
```

---

## 📚 Subjects API

### `GET /api/subjects`
Fetch all subjects with pagination.
- **Access**: Any authenticated user
- **Query Params**: `skip` (default 0), `take` (default 10)

### `POST /api/subjects`
Create a new subject.
- **Access**: TEACHER, ADMIN
- **Request Body**: `{ "name": string, "code": string, "description": string }`

### `GET /api/subjects/[id]`
Fetch a single subject.
- **Access**: Any authenticated user

### `PUT /api/subjects/[id]`
Update a subject.
- **Access**: TEACHER, ADMIN
- **Request Body**: `{ "name": string, "code": string, "description": string }`

### `DELETE /api/subjects/[id]`
Delete a subject.
- **Access**: ADMIN only
- **Constraint**: Cannot delete subject with existing units.

---

## 📖 Units API

### `GET /api/units`
Fetch all units.
- **Access**: Any authenticated user
- **Query Params**: `subjectId` (filter by subject)

### `POST /api/units`
Create a new unit.
- **Access**: TEACHER, ADMIN
- **Request Body**: `{ "name": string, "subjectId": string, "description": string, "orderIndex": number }`

### `GET /api/units/[id]`
Fetch a single unit.
- **Access**: Any authenticated user

### `PUT /api/units/[id]`
Update a unit.
- **Access**: TEACHER, ADMIN

### `DELETE /api/units/[id]`
Delete a unit.
- **Access**: ADMIN only
- **Constraint**: Cannot delete unit with existing resources.

---

## 🎓 Students API

### `GET /api/students`
Fetch all students with pagination.
- **Access**: Any authenticated user

### `POST /api/students`
Create a student profile.
- **Access**: Any authenticated user (usually via signup)
- **Request Body**: `{ "userId": string, "studentId": string, "status": string }`

### `GET /api/students/[id]`
Fetch a single student.
- **Access**: Any authenticated user

### `PUT /api/students/[id]`
Update student profile.
- **Access**: Any authenticated user

### `DELETE /api/students/[id]`
Delete student profile.
- **Access**: Any authenticated user

---

## 📝 Enrollments API

### `GET /api/enrollments`
 la Fetch all enrollments.
- **Access**: Any authenticated user
- **Query Params**: `studentId`, `batchId`

### `POST /api/enrollments`
Enroll a student in a batch.
- **Access**: TEACHER, ADMIN
- **Request Body**: `{ "studentId": string, "batchId": string }`

### `GET /api/enrollments/[id]`
Fetch a single enrollment.
- **Access**: Any authenticated user

### `DELETE /api/enrollments/[id]`
Remove a student from a batch.
- **Access**: TEACHER, ADMIN

---

## Error Codes

| Status | Meaning | Description |
|---------|---------|---------------------------------------------------|
| 200 | OK | Request successful |
| 201 | Created | Resource created successfully |
| 400 | Bad Request | Validation failed or invalid body |
| 401 | Unauthorized | Authentication required |
| 403 | Forbidden | Insufficient permissions (Role mismatch) |
| 404 | Not Found | Resource does not exist |
| 409 | Conflict | Resource already exists or cannot be deleted |
| 500 | Internal Server Error | Unexpected server error |
