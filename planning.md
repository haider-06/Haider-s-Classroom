# Next.js + Prisma Student/Teacher Portal - Planning Document

## Project Overview
A comprehensive educational portal for managing student-teacher interactions, built with Next.js 14, Prisma ORM, and Docker containerization for deployment to ZimaOS. The platform features separate dashboards for teachers and students with role-based access control.

## Technology Stack
- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL (local development, configurable for production)
- **Authentication**: NextAuth.js (JWT strategy)
- **Containerization**: Docker
- **Deployment**: ZimaOS

## Project Structure
```
haiders-classroom/
├── app/
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── loading.tsx
│   ├── api/
│   │   ├── auth/
│   │   │   [...nextauth]/route.ts
│   │   └── [...]/route.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   └── ... (shadcn/ui components)
│   ├── teacher/
│   │   ├── dashboard/
│   │   ├── students/
│   │   ├── routine-builder/
│   │   ├── resources/
│   │   ├── statistics/
│   │   ├── payment/
│   │   ├── finance/
│   │   └── announcements/
│   └── student/
│       ├── dashboard/
│       ├── schedule/
│       ├── exam-board/
│       ├── enrolled-units/
│       ├── resources/
│       ├── grade-report/
│       ├── attendance/
│       └── mock-registration/
├── lib/
│   ├── prisma.ts
│   ├── utils.ts
│   └── auth.ts
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── public/
├── styles/
├── hooks/
├── types/
├── constants/
├── .env.local
├── Dockerfile
├── docker-compose.yml
├── package.json
├── tsconfig.json
└── README.md
```

## Database Schema (Prisma)
### Core Models
```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id            String   @id @default(uuid())
  email         String   @unique
  name          String?
  role          Role     @default(STUDENT)
  password      String
  profileImage  String?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  // Teacher-specific
  teacherProfile TeacherProfile?
  
  // Student-specific
  studentProfile StudentProfile?
  
  // Relations
  enrollments   Enrollment[]
  payments      Payment[]
  attendances   Attendance[]
  submissions   Submission[]
}

model TeacherProfile {
  id        String   @id @default(uuid())
  userId    String   @unique @map("user_id") @relation("UserTeacherProfile")
  designation String?
  bio       String?
  user      User     @relation("UserTeacherProfile", fields: [userId], references: [id])
}

model StudentProfile {
  id            String   @id @default(uuid())
  userId        String   @unique @map("user_id") @relation("UserStudentProfile")
  studentId     String   @unique
  dateOfBirth   DateTime?
  gender        String?
  bloodGroup    String?
  whatsapp      String?
  address       String?
  institution   String?
  status        StudentStatus @default(ACTIVE)
  user          User     @relation("UserStudentProfile", fields: [userId], references: [id])
  
  // Relations
  enrollments   Enrollment[]
  payments      Payment[]
  attendances   Attendance[]
  submissions   Submission[]
}

model Subject {
  id        String   @id @default(uuid())
  name      String   @unique
  code      String   @unique
  description String?
  createdAt DateTime @default(now())
  
  // Relations
  units     Unit[]
  enrollments Enrollment[]
}

model Unit {
  id          String   @id @default(uuid())
  subjectId   String
  subject     Subject  @relation(fields: [subjectId], references: [id])
  name        String
  code        String   @unique
  description String?
  level       String   // AS/A2/IB/etc
  createdAt   DateTime @default(now())
  
  // Relations
  enrollments Enrollment[]
  resources   Resource[]
}

model Batch {
  id          String   @id @default(uuid())
  name        String
  level       String
  year        Int
  session     Int    // 1=Jan, 2=May, 3=Oct
  batchNumber Int
  subjectId   String
  subject     Subject  @relation(fields: [subjectId], references: [id])
  startDate   DateTime?
  endDate     DateTime?
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
  
  // Relations
  enrollments Enrollment[]
  routines    Routine[]
}

model Enrollment {
  id        String   @id @default(uuid())
  studentId String
  student   StudentProfile @relation(fields: [studentId], references: [id])
  unitId    String
  unit      Unit     @relation(fields: [unitId], references: [id])
  batchId   String?
  batch     Batch?   @relation(fields: [batchId], references: [id])
  status    EnrollmentStatus @default(ACTIVE)
  feeAmount Decimal?
  feeType   FeeType? // MONTHLY, BULK, etc
  enrolledAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@unique([studentId, unitId])
}

model Routine {
  id          String   @id @default(uuid())
  batchId     String
  batch       Batch    @relation(fields: [batchId], references: [id])
  title       String
  description String?
  startTime   DateTime
  endTime     DateTime
  dayOfWeek   Int      // 0=Sunday, 1=Monday, etc
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
}

model Resource {
  id          String   @id @default(uuid())
  unitId      String
  unit        Unit     @relation(fields: [unitId], references: [id])
  title       String
  description String?
  type        ResourceType // PDF, VIDEO, LINK
  url         String
  uploadedBy  String   // User ID
  uploadedAt  DateTime @default(now())
}

model Announcement {
  id          String   @id @default(uuid())
  title       String
  content     String
  type        AnnouncementType // HOMEWORK, EXAM, MOCK, GENERAL
  batchId     String?
  batch       Batch?   @relation(fields: [batchId], references: [id])
  targetAudience String // STUDENT, PARENT, BOTH
  sentViaWhatsApp Boolean @default(false)
  createdBy   String   // User ID
  createdAt   DateTime @default(now())
  expiresAt   DateTime?
}

model Payment {
  id          String   @id @default(uuid())
  studentId   String
  student     StudentProfile @relation(fields: [studentId], references: [id])
  amount      Decimal
  currency    String   @default("USD")
  paymentDate DateTime @default(now())
  month       Int      // 1-12
  year        Int
  unitId      String?
  unit        Unit?    @relation(fields: [unitId], references: [id])
  paymentType PaymentType // MONTHLY, MOCK, BULK
  status      PaymentStatus // PENDING, COMPLETED, FAILED
  transactionId String?
  receiptUrl  String?
  recordedBy  String   // User ID (teacher/admin)
}

model Attendance {
  id          String   @id @default(uuid())
  studentId   String
  student     StudentProfile @relation(fields: [studentId], references: [id])
  batchId     String?
  batch       Batch?   @relation(fields: [batchId], references: [id])
  date        DateTime
  status      AttendanceStatus // PRESENT, LATE, ABSENT
  recordedBy  String   // User ID (teacher)
}

model Submission {
  id          String   @id @default(uuid())
  studentId   String
  student     StudentProfile @relation(fields: [studentId], references: [id])
  assignmentId String?
  assignment  Assignment? @relation(fields: [assignmentId], references: [id])
  mockExamId  String?
  mockExam    MockExam?   @relation(fields: [mockExamId], references: [id])
  submittedAt DateTime @default(now())
  fileUrl     String?
  grade       String?
  feedback    String?
}

model Assignment {
  id          String   @id @default(uuid())
  title       String
  description String?
  subjectId   String
  subject     Subject  @relation(fields: [subjectId], references: [id])
  batchId     String?
  batch       Batch?   @relation(fields: [batchId], references: [id])
  dueDate     DateTime
  maxPoints   Int
  createdBy   String   // User ID (teacher)
  createdAt   DateTime @default(now())
}

model MockExam {
  id          String   @id @default(uuid())
  title       String
  subjectId   String
  subject     Subject  @relation(fields: [subjectId], references: [id])
  batchId     String?
  batch       Batch?   @relation(fields: [batchId], references: [id])
  startTime   DateTime
  endTime     DateTime
  totalMarks  Int
  createdBy   String   // User ID (teacher)
  createdAt   DateTime @default(now())
}

enum Role {
  ADMIN
  TEACHER
  STUDENT
}

enum StudentStatus {
  ACTIVE
  INACTIVE
  GRADUATED
  DROPPED
}

enum EnrollmentStatus {
  ACTIVE
  INACTIVE
  COMPLETED
}

enum FeeType {
  MONTHLY
  BULK
  PER_UNIT
}

enum PaymentType {
  MONTHLY
  MOCK
  BULK
  REGISTRATION
}

enum PaymentStatus {
  PENDING
  COMPLETED
  FAILED
  REFUNDED
}

enum AttendanceStatus {
  PRESENT
  LATE
  ABSENT
  EXCUSED
}

enum ResourceType {
  PDF
  VIDEO
  LINK
  AUDIO
}

enum AnnouncementType {
  HOMEWORK
  EXAM
  MOCK
  GENERAL
  REMINDER
}
```

## API Routes Structure
```
/api/auth/[...nextauth] - Authentication (NextAuth)
/api/users - User management
/api/students - Student CRUD
/api/teachers - Teacher CRUD
/api/subjects - Subject management
/api/units - Unit management
/api/batches - Batch management
/api/enrollments - Enrollment management
/api/resources - Resource upload/retrieval
/api/announcements - Announcement management
/api/payments - Payment processing
/api/attendance - Attendance tracking
/api/assignments - Assignment management
/api/mock-exams - Mock exam management
```

## Key Features Breakdown

### Teacher Portal
1. **Dashboard**
   - Overview statistics (active courses, today's classes, total students)
   - Quick metrics (home tuitions, online students, coaching students)
   - Today's upcoming class view
   - Upcoming exams/mocks
   - Calendar widget (week/month/year view)
   - Notification panel (urgent tasks with toggle completion)

2. **Students Management**
   - Search by student ID
   - Admit new student form (multi-step)
   - Student profile editing
   - Status management (active/inactive/graduated)
   - Fee editing
   - Bulk operations

3. **Routine Builder**
   - Batch creation with scheduling
   - Level/year/session/batch number selection
   - Visual schedule builder
   - Batch summary cards
   - Progress tracking (worksheets/exams completed)

4. **Resources Management**
   - File upload (PDF, video links)
   - Organization by subject/unit
   - Access control
   - Video lecture embedding

5. **Statistics & Analytics**
   - Performance metrics
   - Payment trends
   - Attendance analytics
   - Custom report generation

6. **Payment Management**
   - Fee collection
   - Receipt generation
   - WhatsApp integration
   - Bulk payment options
   - Payment history

7. **Finance**
   - Revenue dashboard
   - Monthly trends (6+ months)
   - Dual bar charts (due vs received)
   - Income source breakdown (home tuition/coaching/online)
   - Transaction history
   - Payment reminders

8. **Announcements**
   - Homework assignment with WhatsApp notification
   - Exam scheduling & notification
   - Mock exam scheduling
   - General announcements
   - Template system
   - Broadcast functionality

### Student Portal
1. **Dashboard**
   - Welcome message with username
   - Quick overview
   - Notification indicator

2. **Schedule**
   - Weekly calendar view
   - Class timings
   - Attendance marking

3. **Exam Board**
   - Upcoming exams details
   - Study materials
   - Syllabus information

4. **Enrolled Units**
   - Current enrollments
   - Syllabus progress
   - Homework/worksheet completion
   - Upcoming exams

5. **Resources**
   - Access to shared materials
   - Video lectures
   - Downloadable PDFs

6. **Grade Report**
   - Exam/mock scores history
   - Printable reports
   - Performance trends

7. **Attendance**
   - Monthly attendance view
   - Status tracking

8. **Mock Registration**
   - Time-bound registration
   - Fee information
   - PDF generation

## Authentication & Authorization
- **NextAuth.js** with JWT strategy
- **Roles**: ADMIN, TEACHER, STUDENT
- **Protected Routes**: Middleware to check authentication and role
- **Session Management**: JWT tokens stored in cookies
- **Password Security**: bcrypt hashing

## Docker Configuration
### Dockerfile
```dockerfile
# Use Node.js 18 alpine image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Prisma generate
RUN npx prisma generate

# Build Next.js app
RUN npm run build

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
```

### docker-compose.yml
```yaml
version: '3.8'
services:
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: haiders_classroom
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgres://postgres:postgres@db:5432/haiders_classroom
      NEXTAUTH_SECRET: your-secret-key
      NEXTAUTH_URL: http://localhost:3000
    depends_on:
      - db
    volumes:
      - .:/app
      - /app/node_modules

volumes:
  postgres_data:
```

## Environment Variables
```
# .env.local
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/haiders_classroom"
NEXTAUTH_SECRET="your-super-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# WhatsApp Business API (for notifications)
WHATSAPP_TOKEN="your_whatsapp_token"
WHATSAPP_PHONE_NUMBER_ID="your_phone_number_id"

# File upload (if using external storage)
# AWS_S3_ACCESS_KEY_ID=
# AWS_S3_SECRET_ACCESS_KEY=
# AWS_S3_BUCKET_NAME=
```

## Development Workflow
1. **Setup**
   ```bash
   npm install
   npx prisma generate
   npx prisma db push
   npm run dev
   ```

2. **Database Changes**
   ```bash
   npx prisma migrate dev --name "migration-name"
   npx prisma studio  # For data inspection
   ```

3. **Testing**
   ```bash
   npm run test
   npm run lint
   ```

4. **Production Build**
   ```bash
   npm run build
   npm start
   ```

5. **Docker Deployment**
   ```bash
   docker-compose up --build
   ```

## ZimaOS Deployment Notes
1. Place Dockerfile in project root
2. Ensure docker-compose.yml is present
3. ZimaOS will automatically detect and build the container
4. Configure port mapping in ZimaOS interface
5. Set up persistent storage for PostgreSQL data
6. Configure environment variables in ZimaOS interface

## Security Considerations
- HTTPS in production
- Rate limiting on API endpoints
- Input validation and sanitization
- CSRF protection
- Secure cookie settings
- File upload validation
- SQL injection prevention (Prisma handles this)
- XSS prevention (React auto-escaping)

## Performance Optimizations
- Next.js automatic code splitting
- Image optimization with next/image
- Database query optimization
- Caching strategies
- Lazy loading of components
- Server-side rendering where beneficial
- Static generation for public pages

## Future Enhancements
1. Mobile app (React Native)
2. Real-time notifications (WebSocket)
3. Advanced analytics dashboard
4. Integration with LMS systems
5. AI-powered study recommendations
6. Multi-language support
7. Parent portal access
8. Automated grading for objective tests

## Dependencies
### Core
- next@14
- react@18
- react-dom@18
- typescript@5
- @prisma/client
- prisma

### UI
- tailwindcss
- @radix-ui/react-icons
- class-variance-authority
- clsx
- lucide-react

### Authentication
- next-auth
- bcryptjs

### Forms & Validation
- react-hook-form
- zod
- @hookform/resolvers

### Data Visualization
- recharts
- chart.js

### Date Handling
- date-fns

### File Handling
- react-dropzone

## Implementation Phases
1. **Phase 1**: Project setup, authentication, basic user models
2. **Phase 2**: Core CRUD operations for subjects, units, batches
3. **Phase 3**: Enrollment system and student management
4. **Phase 4**: Teacher dashboard and resources
5. **Phase 5**: Payment and finance systems
6. **Phase 6**: Announcement and notification systems
7. **Phase 7**: Student portal development
8. **Phase 8**: Testing, bug fixes, and polish
9. **Phase 9**: Docker containerization and deployment preparation

## Success Criteria
- [ ] User authentication working for both roles
- [ ] Complete CRUD operations for all entities
- [ ] Teacher dashboard with all specified widgets
- [ ] Student dashboard with all specified features
- [ ] Payment processing with receipt generation
- [ ] Announcement system with WhatsApp integration
- [ ] Resource upload and access control
- [ ] Docker container builds successfully
- [ ] Application runs correctly in containerized environment
- [ ] Responsive design for various screen sizes