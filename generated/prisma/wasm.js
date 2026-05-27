
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  name: 'name',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StudentProfileScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  studentId: 'studentId',
  phone: 'phone',
  address: 'address',
  dateOfBirth: 'dateOfBirth',
  enrollmentDate: 'enrollmentDate',
  status: 'status'
};

exports.Prisma.TeacherProfileScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  specialization: 'specialization',
  experience: 'experience',
  phone: 'phone'
};

exports.Prisma.SubjectScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description'
};

exports.Prisma.UnitScalarFieldEnum = {
  id: 'id',
  subjectId: 'subjectId',
  name: 'name',
  description: 'description'
};

exports.Prisma.BatchScalarFieldEnum = {
  id: 'id',
  name: 'name',
  level: 'level',
  year: 'year',
  session: 'session',
  batchNumber: 'batchNumber'
};

exports.Prisma.EnrollmentScalarFieldEnum = {
  id: 'id',
  studentId: 'studentId',
  unitId: 'unitId',
  startDate: 'startDate',
  endDate: 'endDate',
  status: 'status'
};

exports.Prisma.ResourceScalarFieldEnum = {
  id: 'id',
  title: 'title',
  type: 'type',
  url: 'url',
  fileSize: 'fileSize',
  duration: 'duration',
  subjectId: 'subjectId',
  unitId: 'unitId',
  teacherId: 'teacherId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  downloads: 'downloads',
  views: 'views'
};

exports.Prisma.AttendanceScalarFieldEnum = {
  id: 'id',
  studentId: 'studentId',
  date: 'date',
  status: 'status',
  remarks: 'remarks',
  routineId: 'routineId'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  studentId: 'studentId',
  amount: 'amount',
  date: 'date',
  month: 'month',
  year: 'year',
  feeType: 'feeType',
  method: 'method',
  status: 'status'
};

exports.Prisma.AnnouncementScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  type: 'type',
  batchId: 'batchId',
  sentViaWhatsApp: 'sentViaWhatsApp',
  createdAt: 'createdAt'
};

exports.Prisma.MockExamScalarFieldEnum = {
  id: 'id',
  title: 'title',
  subject: 'subject',
  level: 'level',
  date: 'date',
  time: 'time',
  duration: 'duration',
  fee: 'fee',
  maxSeats: 'maxSeats',
  registeredSeats: 'registeredSeats',
  status: 'status',
  registrationDeadline: 'registrationDeadline'
};

exports.Prisma.MockRegistrationScalarFieldEnum = {
  id: 'id',
  studentId: 'studentId',
  mockExamId: 'mockExamId',
  createdAt: 'createdAt'
};

exports.Prisma.RoutineScalarFieldEnum = {
  id: 'id',
  batchId: 'batchId',
  day: 'day',
  startTime: 'startTime',
  endTime: 'endTime',
  subjectId: 'subjectId',
  unitId: 'unitId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.UserRole = exports.$Enums.UserRole = {
  ADMIN: 'ADMIN',
  TEACHER: 'TEACHER',
  STUDENT: 'STUDENT'
};

exports.StudentStatus = exports.$Enums.StudentStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  GRADUATED: 'GRADUATED',
  DROPPED: 'DROPPED'
};

exports.ResourceType = exports.$Enums.ResourceType = {
  PDF: 'PDF',
  VIDEO: 'VIDEO',
  LINK: 'LINK'
};

exports.AttendanceStatus = exports.$Enums.AttendanceStatus = {
  PRESENT: 'PRESENT',
  ABSENT: 'ABSENT',
  LATE: 'LATE'
};

exports.Prisma.ModelName = {
  User: 'User',
  StudentProfile: 'StudentProfile',
  TeacherProfile: 'TeacherProfile',
  Subject: 'Subject',
  Unit: 'Unit',
  Batch: 'Batch',
  Enrollment: 'Enrollment',
  Resource: 'Resource',
  Attendance: 'Attendance',
  Payment: 'Payment',
  Announcement: 'Announcement',
  MockExam: 'MockExam',
  MockRegistration: 'MockRegistration',
  Routine: 'Routine'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
