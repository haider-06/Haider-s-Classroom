# Haider's Classroom - Project Summary

This document provides an overview of the complete Haider's Classroom educational portal project structure and components.

## Project Overview

**Haider's Classroom** is a comprehensive educational portal built with Next.js 14, Prisma ORM, and PostgreSQL. It serves as a bridge between teachers and students, facilitating effective learning management, communication, and assessment.

## Technology Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Custom reusable components
- **Language**: TypeScript

### Backend
- **Runtime**: Node.js
- **API Routes**: Next.js API Routes
- **ORM**: Prisma with PostgreSQL
- **Authentication**: NextAuth.js with JWT strategy

### Infrastructure
- **Database**: PostgreSQL
- **Containerization**: Docker & Docker Compose
- **Deployment**: ZimaOS compatible

## Project Structure

```
haiders-classroom/
├── app/                              # Next.js app router directory
│   ├── (dashboard)/                  # Dashboard layouts
│   ├── api/                          # API routes
│   ├── teacher/                      # Teacher dashboard
│   │   ├── students/                 # Student management
│   │   ├── routine-builder/          # Class scheduling
│   │   ├── resources/                # Resource management
│   │   ├── payment/                  # Payment tracking
│   │   ├── finance/                  # Financial analytics
│   │   └── announcements/            # Announcements with WhatsApp integration
│   ├── student/                      # Student dashboard
│   │   ├── schedule/                 # Class schedule view
│   │   ├── exam-board/               # Exam information
│   │   ├── enrolled-units/           # Enrolled units tracking
│   │   ├── grade-report/             # Grade reports
│   │   ├── resources/                # Resource access
│   │   ├── attendance/               # Attendance tracking
│   │   └── mock-registration/        # Mock exam registration
│   ├── login/                        # Login page
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Home page
│   └── globals.css                   # Global styles
├── components/                       # Reusable components
│   ├── ui/                           # UI components
│   │   ├── button.tsx                # Button component
│   │   └── input.tsx                 # Input component
├── lib/                              # Utility functions
│   ├── prisma.ts                     # Prisma client initialization
│   └── utils.ts                      # Helper utilities
├── prisma/                           # Prisma configuration
│   └── schema.prisma                 # Database schema
├── public/                           # Static assets
├── Dockerfile                        # Docker configuration
├── docker-compose.yml                # Docker Compose configuration
├── package.json                      # Dependencies
├── tsconfig.json                     # TypeScript configuration
└── README.md                         # Project documentation
```

## Key Features

### Teacher Portal

#### 1. Student Management (app/teacher/students/)
- Search and filter students
- View student details
- Add new students
- Manage student enrollment status
- Export student data to CSV
- Quick stats on total, active, and inactive students

#### 2. Routine Builder (app/teacher/routine-builder/)
- Create and manage class schedules
- Batch-wise scheduling
- Day and time slot management
- Weekly schedule visualization
- Batch summary and analytics

#### 3. Resources Management (app/teacher/resources/)
- Upload learning materials (PDF, Video, Links)
- Organize by subject and unit
- Track downloads and views
- Filter and search resources
- Share resources with students

#### 4. Payment Processing (app/teacher/payment/)
- Record student payments
- Multiple payment methods (Cash, Bank Transfer, Online)
- Monthly and bulk payment options
- Payment history and receipts
- Financial tracking

#### 5. Financial Analytics (app/teacher/finance/)
- Income and expense tracking
- Revenue by source (Home Tuition, Coaching, Online)
- Monthly financial trends
- Pending dues management
- Financial reports and analytics

#### 6. Announcements (app/teacher/announcements/)
- Create announcements by type (Homework, Exam, General)
- WhatsApp integration for notifications
- Announcement templates
- Batch-wise targeting
- Announcement history

### Student Portal

#### 1. Schedule Management (app/student/schedule/)
- View daily, weekly, and monthly schedules
- Class timings and locations
- Teacher information
- Attendance marking

#### 2. Exam Board (app/student/exam-board/)
- Upcoming exam information
- Past exam results
- Syllabus coverage
- Study materials
- Performance analytics

#### 3. Enrolled Units (app/student/enrolled-units/)
- View enrolled courses
- Progress tracking
- Homework completion status
- Unit statistics
- Multiple view modes (List, Grid, Cards)

#### 4. Grade Reports (app/student/grade-report/)
- Exam results and scores
- Assignment marks
- Overall performance metrics
- Topic-wise feedback
- Printable reports

#### 5. Resources Access (app/student/resources/)
- Download study materials
- Watch lecture videos
- Search and filter resources
- Track learning materials

#### 6. Attendance Tracking (app/student/attendance/)
- Monthly attendance records
- Attendance rate percentage
- Status tracking (Present, Absent, Late)
- Attendance trends

#### 7. Mock Exam Registration (app/student/mock-registration/)
- Browse available mock exams
- Registration status
- Seat availability
- Fee information
- Registration deadline tracking

## Database Models

### Core Models
- **User**: Administrator, Teacher, Student
- **StudentProfile**: Student-specific information
- **TeacherProfile**: Teacher-specific information
- **Subject**: Physics, Mathematics, etc.
- **Unit**: Subject units (Physics U1-U6, Math P1-P4, etc.)
- **Batch**: Class batches with level, year, session, batch number

### Academic Models
- **Enrollment**: Student-Unit enrollment
- **Resource**: Learning materials
- **Assignment**: Teacher assignments
- **MockExam**: Mock exam configuration
- **ExamResult**: Student exam results

### Administrative Models
- **Attendance**: Attendance records
- **Payment**: Payment transactions
- **Announcement**: Announcements
- **Routine**: Class schedule

## API Routes

### Authentication
- `POST /api/auth/[...nextauth]` - NextAuth.js authentication

### User Management
- `GET/POST /api/users` - User CRUD operations
- `GET/POST /api/students` - Student management
- `GET/POST /api/teachers` - Teacher management

### Academic
- `GET/POST /api/subjects` - Subject management
- `GET/POST /api/units` - Unit management
- `GET/POST /api/enrollments` - Enrollment management
- `GET/POST /api/assignments` - Assignment management

### Resources & Materials
- `GET/POST /api/resources` - Resource management
- `GET/POST /api/mock-exams` - Mock exam management

### Administrative
- `GET/POST /api/batches` - Batch management
- `GET/POST /api/payments` - Payment processing
- `GET/POST /api/attendance` - Attendance tracking
- `GET/POST /api/announcements` - Announcement management

## Installation & Setup

### Prerequisites
- Node.js 18+
- PostgreSQL
- Docker (optional)

### Local Development

1. **Clone and Install**
   ```bash
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   Update `.env.local` with your database credentials and secrets.

3. **Database Setup**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000`

### Docker Deployment

```bash
docker-compose up --build
```

The application will be available at `http://localhost:3000`

## Environment Variables

```env
DATABASE_URL="postgresql://user:password@localhost:5432/haiders_classroom"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
WHATSAPP_API_KEY="your-whatsapp-api-key"
```

## Features in Development

- WhatsApp integration for announcements
- SMS notifications for payments
- Email system for reports
- Advanced analytics dashboard
- Parent/Guardian portal
- Mobile application
- Video conferencing integration
- Question bank management
- Performance analytics with ML insights

## Development Guidelines

### Component Structure
Components are organized by feature with reusable UI components in `/components/ui/`

### Styling
- Tailwind CSS for all styling
- Responsive design using Tailwind breakpoints
- Custom utility classes in `/styles/`

### Type Safety
- Full TypeScript implementation
- Prisma auto-generated types
- Type-safe API routes

### State Management
- React hooks for local state
- Server-side state with Prisma
- Context API for global state (future)

## Building for Production

```bash
npm run build
npm start
```

## Deployment to ZimaOS

1. Ensure `Dockerfile` is in project root
2. Ensure `docker-compose.yml` is present
3. ZimaOS will automatically detect and build the container
4. Configure port mapping in ZimaOS interface (typically 3000)
5. Set up persistent storage for PostgreSQL data
6. Configure environment variables in ZimaOS interface

## Testing

```bash
# Run unit tests (when implemented)
npm run test

# Run integration tests (when implemented)
npm run test:integration
```

## Performance Optimization

- Incremental Static Regeneration (ISR) for pages
- Image optimization with Next.js Image component
- Lazy loading of components
- Database query optimization with Prisma
- Caching strategies for API responses

## Security Measures

- NextAuth.js for secure authentication
- CORS configuration for API security
- Input validation and sanitization
- SQL injection prevention with Prisma
- CSRF protection
- Rate limiting (to be implemented)
- SSL/TLS encryption in production

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request
4. Follow the code style guidelines

## License

MIT License - See LICENSE file for details

## Support & Contact

For support or questions:
- Email: support@haidersclassroom.com
- Phone: +92-XXX-XXXXXXX
- Website: www.haidersclassroom.com

## Changelog

### Version 1.0.0 (Initial Release)
- Complete teacher portal with student management
- Full student portal with schedule and grades
- Payment and finance tracking
- Resource management system
- Announcement system with WhatsApp integration
- Attendance tracking
- Mock exam registration

### Planned Releases
- V1.1.0: Mobile app beta
- V1.2.0: Advanced analytics
- V1.3.0: Parent portal
- V2.0.0: AI-powered recommendations

---

**Last Updated**: May 2026
**Maintained By**: Haider's Classroom Development Team