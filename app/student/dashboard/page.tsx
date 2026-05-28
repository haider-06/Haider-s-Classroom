"use client";

import { useState } from "react";

export default function StudentDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full w-64 bg-slate-950 text-white border-r border-slate-800 
                   transition-all duration-300 ${sidebarCollapsed ? '-translate-x-full' : ''} 
                   z-50`}
      >
        <div className="flex h-16 items-center justify-between px-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 ring-1 ring-white/10 text-lg font-semibold text-sky-300">
              S
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Student Portal</p>
              <p className="text-xs text-slate-400">Learning Dashboard</p>
            </div>
          </div>
          <button
            onClick={() => setSidebarCollapsed(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-slate-300 hover:bg-slate-800"
            aria-label="Close sidebar"
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l8 8M6 14L14 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        
        <nav className="space-y-1 p-4">
          <a 
            href="/student/dashboard" 
            className="group flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-slate-300 transition group-hover:bg-slate-800">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 11.5L12 4l9 7.5V20a1 1 0 01-1 1h-5v-5H9v5H4a1 1 0 01-1-1v-8.5z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {!sidebarCollapsed && <span>Dashboard</span>}
          </a>
          
          <a 
            href="/student/schedule" 
            className="group flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-slate-300 transition group-hover:bg-slate-800">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {!sidebarCollapsed && <span>Schedule</span>}
          </a>
          
          <a 
            href="/student/exam-board" 
            className="group flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-slate-300 transition group-hover:bg-slate-800">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {!sidebarCollapsed && <span>Exam Board</span>}
          </a>
          
          <a 
            href="/student/enrolled-units" 
            className="group flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-slate-300 transition group-hover:bg-slate-800">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {!sidebarCollapsed && <span>Enrolled Units</span>}
          </a>
          
          <a 
            href="/student/resources" 
            className="group flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-slate-300 transition group-hover:bg-slate-800">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 4.5A2.5 2.5 0 016.5 7H20v13" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 7v13" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {!sidebarCollapsed && <span>Resources</span>}
          </a>
          
          <a 
            href="/student/grade-report" 
            className="group flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-slate-300 transition group-hover:bg-slate-800">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19h16" strokeLinecap="round" />
                <path d="M7 15v4M12 11v8M17 7v12" strokeLinecap="round" />
              </svg>
            </span>
            {!sidebarCollapsed && <span>Grade Report</span>}
          </a>
          
          <a 
            href="/student/attendance" 
            className="group flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-slate-300 transition group-hover:bg-slate-800">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {!sidebarCollapsed && <span>Attendance</span>}
          </a>
          
          <a 
            href="/student/mock-registration" 
            className="group flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-slate-300 transition group-hover:bg-slate-800">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {!sidebarCollapsed && <span>Mock Registration</span>}
          </a>
        </nav>
        
        <div className="mt-auto p-4">
          <a
            href="/api/auth/signout"
            className="flex items-center justify-center rounded-3xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Sign Out
          </a>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className={`flex-1 ${sidebarCollapsed ? 'pl-0' : 'pl-64'} 
                      transition-all duration-300 overflow-y-auto p-6`}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Welcome back, Student!</h1>
            <p className="text-sm text-slate-500">Here's your personalized dashboard to track your learning progress.</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              className="p-2 rounded-xl bg-white border border-slate-200 shadow-sm hover:bg-slate-100 transition"
              aria-label="Notifications"
            >
              <svg className="h-5 w-5 text-slate-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zm0 16a2 2 0 002-2H8a2 2 0 002 2z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              className="p-2 rounded-xl bg-white border border-slate-200 shadow-sm hover:bg-slate-100 transition"
              aria-label="Help"
            >
              <svg className="h-5 w-5 text-slate-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7.25-2.5a1.75 1.75 0 10-3.5 0c0 .689.42 1.25 1 1.515V11a.75.75 0 001.5 0V9.015c.58-.265 1-.826 1-1.515zM10 13.5a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-slate-500">Enrolled Units</h3>
                <p className="text-2xl font-bold text-slate-900">4</p>
              </div>
              <div className="bg-sky-50 p-3 rounded-full">
                <svg className="h-5 w-5 text-sky-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-slate-500">Homework Completed</h3>
                <p className="text-2xl font-bold text-slate-900">85%</p>
              </div>
              <div className="bg-sky-50 p-3 rounded-full">
                <svg className="h-5 w-5 text-sky-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-slate-500">Attendance Rate</h3>
                <p className="text-2xl font-bold text-slate-900">92%</p>
              </div>
              <div className="bg-sky-50 p-3 rounded-full">
                <svg className="h-5 w-5 text-sky-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-slate-500">Payment Status</h3>
                <p className="text-2xl font-bold text-slate-900">Up to Date</p>
              </div>
              <div className="bg-sky-50 p-3 rounded-full">
                <svg className="h-5 w-5 text-sky-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4\">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-4 border-b border-slate-100">
              <div className="flex-shrink-0 w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center">
                <svg className="h-5 w-5 text-sky-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">Completed Physics homework</p>
                <p className="text-xs text-slate-500">Today, 2:30 PM</p>
              </div>
              <span className="text-xs font-semibold text-green-600">+10 points</span>
            </div>
            
            <div className="flex items-center gap-3 p-4 border-b border-slate-100">
              <div className="flex-shrink-0 w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center">
                <svg className="h-5 w-5 text-sky-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">Attended Math class</p>
                <p className="text-xs text-slate-500">Today, 10:00 AM</p>
              </div>
              <span className="text-xs font-semibold text-green-600">Present</span>
            </div>
            
            <div className="flex items-center gap-3 p-4 border-b border-slate-100">
              <div className="flex-shrink-0 w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center">
                <svg className="h-5 w-5 text-sky-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">Submitted Physics assignment</p>
                <p className="text-xs text-slate-500">Yesterday, 4:15 PM</p>
              </div>
              <span className="text-xs font-semibold text-sky-600">Grade: A</span>
            </div>
            
            <div className="flex items-center gap-3 p-4">
              <div className="flex-shrink-0 w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center">
                <svg className="h-5 w-5 text-sky-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">Upcoming Math test</p>
                <p className="text-xs text-slate-500">June 5, 2026</p>
              </div>
              <span className="text-xs font-semibold text-sky-600">Study materials available</span>
            </div>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <a 
                href="/student/resources" 
                className="block w-full text-left px-4 py-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">Access Study Materials</span>
                  <span className="text-xs text-gray-500">Notes, worksheets, videos</span>
                </div>
              </a>
              
              <a 
                href="/student/mock-registration" 
                className="block w-full text-left px-4 py-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">Register for Mock Exams</span>
                  <span className="text-xs text-gray-500">Check availability</span>
                </div>
              </a>
              
              <a 
                href="/student/grade-report" 
                className="block w-full text-left px-4 py-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">View Progress Report</span>
                  <span className="text-xs text-gray-500">Grades & attendance</span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              <div className="flex items-center p-3 border-b border-gray-200">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                  <svg className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 12l2-2 4 4H7z" />
                  </svg>
                </div>
                <div className="flex-1 ml-3">
                  <p className="text-sm font-medium text-gray-900">Physics Mock Exam</p>
                  <p className="text-xs text-gray-500">May 30, 2026</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 border-b border-gray-200">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                  <svg className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 12l2-2 4 4H7z" />
                  </svg>
                </div>
                <div className="flex-1 ml-3">
                  <p className="text-sm font-medium text-gray-900">Math Assignment Due</p>
                  <p className="text-xs text-gray-500">June 3, 2026</p>
                </div>
              </div>
              
              <div className="flex items-center p-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                  <svg className="h-4 w-4 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 12l2-2 4 4H7z" />
                  </svg>
                </div>
                <div className="flex-1 ml-3">
                  <p className="text-sm font-medium text-gray-900">Parent-Teacher Meeting</p>
                  <p className="text-xs text-gray-500">June 10, 2026</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Study Resources</h3>
            <div className="space-y-3">
              <div className="flex items-center p-3 border-b border-gray-200">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                  <svg className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 12l2-2 4 4H7z" />
                  </svg>
                </div>
                <div className="flex-1 ml-3">
                  <p className="text-sm font-medium text-gray-900">Physics Notes - Unit 1</p>
                  <p className="text-xs text-gray-500">PDF • 12 pages</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 border-b border-gray-200">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                  <svg className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 12l2-2 4 4H7z" />
                  </svg>
                </div>
                <div className="flex-1 ml-3">
                  <p className="text-sm font-medium text-gray-900">Math Worksheet - P1</p>
                  <p className="text-xs text-gray-500">PDF • 8 pages</p>
                </div>
              </div>
              
              <div className="flex items-center p-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                  <svg className="h-4 w-4 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 12l2-2 4 4H7z" />
                  </svg>
                </div>
                <div className="flex-1 ml-3">
                  <p className="text-sm font-medium text-gray-900">Physics Lecture Video</p>
                  <p className="text-xs text-gray-500">45 min • Unit 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}