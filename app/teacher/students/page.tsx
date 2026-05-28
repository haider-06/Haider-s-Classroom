"use client";
import { useState } from "react";

export default function TeacherStudents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock data - in a real app, this would come from the database
  const students = [
    {
      id: "STU001",
      name: "John Doe",
      email: "john@example.com",
      status: "active",
      phone: "+1234567890",
      enrolledCourses: ["Physics Unit 1", "Math P1"],
      lastSeen: "Today, 10:30 AM"
    },
    {
      id: "STU002",
      name: "Jane Smith",
      email: "jane@example.com",
      status: "active",
      phone: "+1234567891",
      enrolledCourses: ["Physics Unit 2", "Math P2"],
      lastSeen: "Yesterday, 3:15 PM"
    },
    {
      id: "STU003",
      name: "Bob Johnson",
      email: "bob@example.com",
      status: "inactive",
      phone: "+1234567892",
      enrolledCourses: ["Physics Unit 3"],
      lastSeen: "Last week"
    }
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === "all" || student.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 space-y-6 bg-background min-h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Students Directory</h1>
          <p className="text-muted-foreground">Manage and monitor your students' progress and status.</p>
        </div>
        <button 
          onClick={() => {}}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors font-medium shadow-sm"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add New Student
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-6 flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Total Students</p>
            <p className="text-2xl font-bold">{students.length}</p>
          </div>
        </div>
        
        <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-6 flex items-center gap-4">
          <div className="bg-green-100 p-3 rounded-lg">
            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Active Students</p>
            <p className="text-2xl font-bold">{students.filter(s => s.status === "active").length}</p>
          </div>
        </div>
        
        <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-6 flex items-center gap-4">
          <div className="bg-red-100 p-3 rounded-lg">
            <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2 4 4m6-5a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Inactive Students</p>
            <p className="text-2xl font-bold">{students.filter(s => s.status === "inactive").length}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-card text-card-foreground rounded-xl border shadow-sm overflow-hidden">
        <div className="p-6 border-b flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-80">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-primary transition-all"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="graduated">Graduated</option>
              <option value="dropped">Dropped</option>
            </select>
          </div>
          <button 
            onClick={() => {}}
            className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-secondary transition-colors font-medium"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Export CSV
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 text-muted-foreground uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-4">Student ID</th>
                <th className="px-6 py-4">Full Name</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Courses</th>
                <th className="px-6 py-4">Last Seen</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-muted/30 transition-colors group">
                  <td className="px-6 py-4 font-medium text-foreground">{student.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground">{student.name}</div>
                    <div className="text-xs text-muted-foreground">{student.email}</div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{student.phone}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {student.enrolledCourses.map((course, i) => (
                        <span key={i} className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded text-[10px] font-medium">
                          {course}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{student.lastSeen}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full 
                              ${student.status === "active" ? "bg-green-100 text-green-700" :
                                student.status === "inactive" ? "bg-red-100 text-red-700" :
                                "bg-gray-100 text-gray-700"}`}>
                      {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => {}}
                        className="p-2 hover:bg-secondary rounded-md text-primary transition-colors"
                        title="View Profile"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button 
                        onClick={() => {}}
                        className="p-2 hover:bg-secondary rounded-md text-muted-foreground hover:text-foreground transition-colors"
                        title="Edit Student"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              
              {filteredStudents.length === 0 && (
                <tr>
                  <td className="px-6 py-12 text-center text-muted-foreground" colSpan={7}>
                    <div className="flex flex-col items-center gap-2">
                      <svg className="h-12 w-12 text-muted-foreground/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p>No students found matching your criteria.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}