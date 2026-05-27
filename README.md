# Haider's Classroom - Educational Portal

A comprehensive educational portal for managing student-teacher interactions, built with Next.js 14, Prisma ORM, and Docker containerization.

## Features

### Teacher Portal
- Dashboard with analytics and quick stats
- Student management (admit, search, update)
- Routine builder for class scheduling
- Resource management (upload/share materials)
- Attendance tracking
- Payment processing
- Financial analytics
- Announcement system with WhatsApp integration

### Student Portal
- Personal dashboard
- Class schedule view
- Exam board with upcoming exams
- Enrolled units tracking
- Resource access
- Grade reports
- Attendance tracking
- Mock exam registration

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js (JWT strategy)
- **Containerization**: Docker

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL
- Docker (for containerized deployment)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file with:
   ```
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/haiders_classroom"
   NEXTAUTH_SECRET="your-super-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. Initialize the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

### Docker Deployment

1. Build and run with Docker Compose:
   ```bash
   docker-compose up --build
   ```

2. The application will be available at `http://localhost:3000`

## Project Structure

```
haiders-classroom/
├── app/                    # Next.js app router
│   ├── (dashboard)/        # Dashboard layouts
│   ├── api/                # API routes
│   ├── login/              # Login page
│   ├── teacher/            # Teacher dashboard
│   ├── student/            # Student dashboard
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # Reusable components
├── prisma/                 # Prisma schema and client
├── public/                 # Static assets
├── styles/                 # Additional styles
├── prisma/
│   └── schema.prisma       # Database schema
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Docker compose configuration
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## Database Schema

The application uses Prisma ORM with PostgreSQL. Key models include:
- User (with roles: ADMIN, TEACHER, STUDENT)
- StudentProfile & TeacherProfile
- Subject & Unit
- Batch & Enrollment
- Resource (for sharing materials)
- Attendance, Payment, Announcement
- Assignment & MockExam

## API Routes

Authentication and API routes are located in `/app/api/`:
- `/api/auth/[...nextauth]` - Authentication (NextAuth)
- `/api/users` - User management
- `/api/students` - Student CRUD
- `/api/teachers` - Teacher CRUD
- `/api/subjects` - Subject management
- `/api/units` - Unit management
- `/api/batches` - Batch management
- `/api/enrollments` - Enrollment management
- `/api/resources` - Resource upload/retrieval
- `/api/announcements` - Announcement management
- `/api/payments` - Payment processing
- `/api/attendance` - Attendance tracking
- `/api/assignments` - Assignment management
- `/api/mock-exams` - Mock exam management

## Development

### Database Operations
```bash
# Generate Prisma client
npx prisma generate

# Push schema changes to database
npx prisma db push

# Open Prisma Studio to view/edit data
npx prisma studio
```

### Testing
```bash
# Run linting
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## Deployment to ZimaOS

1. Ensure Dockerfile is in the project root
2. Ensure docker-compose.yml is present
3. ZimaOS will automatically detect and build the container
4. Configure port mapping in ZimaOS interface (typically 3000)
5. Set up persistent storage for PostgreSQL data
6. Configure environment variables in ZimaOS interface

## License

MIT

## Contact

For support or questions, please contact the administrator.