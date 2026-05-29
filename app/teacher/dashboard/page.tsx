"use client";

import { useState } from "react";

export default function TeacherDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 transform bg-slate-950 text-white shadow-2xl transition duration-300 flex flex-col ${sidebarCollapsed ? '-translate-x-full' : 'translate-x-0'}`}
      >
        <div className="flex h-16 shrink-0 items-center justify-between px-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 text-lg font-semibold text-white shadow-lg">
              H
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Haider's Classroom</p>
              <p className="text-xs text-slate-400">Teacher Portal</p>
            </div>
          </div>
          <button
            onClick={() => setSidebarCollapsed(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800/50 text-slate-300 hover:bg-slate-700 transition-colors"
            aria-label="Close sidebar"
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l8 8M6 14L14 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-4">
          {[
            { href: "/teacher/dashboard", label: "Dashboard", icon: "home" },
            { href: "/teacher/students", label: "Students", icon: "users" },
            { href: "/teacher/routine-builder", label: "Routine", icon: "calendar" },
            { href: "/teacher/resources", label: "Resources", icon: "book" },
            { href: "/teacher/statistics", label: "Statistics", icon: "chart" },
            { href: "/teacher/payment", label: "Payments", icon: "wallet" },
            { href: "/teacher/finance", label: "Finance", icon: "currency" },
            { href: "/teacher/announcements", label: "Announcements", icon: "megaphone" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800/50 text-slate-300 transition group-hover:bg-slate-700 group-hover:text-sky-300">
                {item.icon === "home" && (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 11.5L12 4l9 7.5V20a1 1 0 01-1 1h-5v-5H9v5H4a1 1 0 01-1-1v-8.5z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {item.icon === "users" && (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 20h5v-1a4 4 0 00-4-4h-1" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 20H3v-1a4 4 0 014-4h1" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 11a4 4 0 100-8 4 4 0 000 8z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {item.icon === "calendar" && (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {item.icon === "book" && (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 4.5A2.5 2.5 0 016.5 7H20v13" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 7v13" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {item.icon === "chart" && (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19h16" strokeLinecap="round" />
                    <path d="M7 15v4M12 11v8M17 7v12" strokeLinecap="round" />
                  </svg>
                )}
                {item.icon === "wallet" && (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 7h16v10H4z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 7l4 0" strokeLinecap="round" />
                  </svg>
                )}
                {item.icon === "currency" && (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14" strokeLinecap="round" />
                    <path d="M10 7h4a2 2 0 110 4h-4a2 2 0 110-4z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {item.icon === "megaphone" && (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l13-4v12L3 16V8z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 8l4-2v10l-4-2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="shrink-0 p-4 border-t border-white/10">
          <a
            href="/api/auth/signout"
            className="flex items-center justify-center gap-2 rounded-xl bg-red-500/90 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Sign Out
          </a>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className={`flex-1 ${sidebarCollapsed ? 'pl-0' : 'pl-72'} 
                      transition-all duration-300 overflow-y-auto p-6`}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white border border-gray-200 shadow-sm hover:bg-gray-100 transition"
              aria-label="Toggle sidebar"
            >
              <svg className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, Haider</h1>
              <p className="text-sm text-gray-500">Review your schedule, student activity, and upcoming tasks.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              className="p-2 rounded-xl bg-white border border-gray-200 shadow-sm hover:bg-gray-100 transition"
              aria-label="Notifications"
            >
              <svg className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zm0 16a2 2 0 002-2H8a2 2 0 002 2z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              className="p-2 rounded-xl bg-white border border-gray-200 shadow-sm hover:bg-gray-100 transition"
              aria-label="Help"
            >
              <svg className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7.25-2.5a1.75 1.75 0 10-3.5 0c0 .689.42 1.25 1 1.515V11a.75.75 0 001.5 0V9.015c.58-.265 1-.826 1-1.515zM10 13.5a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Active Courses</h3>
                <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-xl">
                <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Classes Today</h3>
                <p className="text-2xl font-bold text-gray-900 mt-1">5</p>
              </div>
              <div className="bg-emerald-50 p-3 rounded-xl">
                <svg className="h-5 w-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Total Students</h3>
                <p className="text-2xl font-bold text-gray-900 mt-1">156</p>
              </div>
              <div className="bg-violet-50 p-3 rounded-xl">
                <svg className="h-5 w-5 text-violet-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 20h5v-1a4 4 0 00-4-4h-1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 20H3v-1a4 4 0 014-4h1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 11a4 4 0 100-8 4 4 0 000 8z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Upcoming Exams</h3>
                <p className="text-2xl font-bold text-gray-900 mt-1">3</p>
              </div>
              <div className="bg-amber-50 p-3 rounded-xl">
                <svg className="h-5 w-5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Student Types</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2.5 bg-blue-50/50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Home Tuition</span>
                <span className="text-sm font-bold text-gray-900">45</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-emerald-50/50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Online</span>
                <span className="text-sm font-bold text-gray-900">62</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-violet-50/50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Coaching</span>
                <span className="text-sm font-bold text-gray-900">49</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Today's Schedule</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50/50 transition-colors">
                <div className="flex-shrink-0 h-9 w-9 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">Physics - AS Level</p>
                  <p className="text-xs text-gray-500">9:00 AM - 10:30 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50/50 transition-colors">
                <div className="flex-shrink-0 h-9 w-9 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <svg className="h-4 w-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">Math - P1</p>
                  <p className="text-xs text-gray-500">11:00 AM - 12:30 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50/50 transition-colors">
                <div className="flex-shrink-0 h-9 w-9 bg-violet-100 rounded-lg flex items-center justify-center">
                  <svg className="h-4 w-4 text-violet-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">Physics - A2 Level</p>
                  <p className="text-xs text-gray-500">2:00 PM - 3:30 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Upcoming Exams & Mocks</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 bg-amber-50/50 rounded-lg">
                <div className="flex-shrink-0 h-9 w-9 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg className="h-4 w-4 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 2v4a1 1 0 002 2V6a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 00-2-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">Physics Mock Exam</p>
                  <p className="text-xs text-gray-500">May 30, 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-red-50/50 rounded-lg">
                <div className="flex-shrink-0 h-9 w-9 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="h-4 w-4 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 2v4a1 1 0 002 2V6a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 00-2-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">Math Final Exam</p>
                  <p className="text-xs text-gray-500">June 5, 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 h-9 w-9 bg-gray-200 rounded-lg flex items-center justify-center">
                  <svg className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 2v4a1 1 0 002 2V6a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 00-2-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">Physics Final Exam</p>
                  <p className="text-xs text-gray-500">June 12, 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Calendar and Notifications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Calendar</h3>
                <div className="flex gap-1.5">
                  <button className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    Week
                  </button>
                  <button className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                    Month
                  </button>
                  <button className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                    Year
                  </button>
                </div>
              </div>
              <div className="h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-100">
                <div className="flex h-full items-center justify-center text-gray-400">
                  <div className="text-center">
                    <svg className="h-12 w-12 mx-auto mb-2 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-sm font-medium">Calendar View</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Urgent Tasks</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-amber-50/50 rounded-lg border border-amber-100/50">
                  <div className="flex-shrink-0 h-8 w-8 bg-amber-100 rounded-lg flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">Print exam papers for upcoming exams</p>
                    <button onClick={() => {}} className="mt-2 px-2.5 py-1 text-xs font-medium rounded-lg bg-amber-100 text-amber-700 hover:bg-amber-200 transition-colors">
                      Mark as Done
                    </button>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-blue-50/50 rounded-lg border border-blue-100/50">
                  <div className="flex-shrink-0 h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 2v4a1 1 0 002 2V6a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 00-2-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">Prepare worksheets for next week</p>
                    <button onClick={() => {}} className="mt-2 px-2.5 py-1 text-xs font-medium rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">
                      Mark as Done
                    </button>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex-shrink-0 h-8 w-8 bg-gray-200 rounded-lg flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 2v4a1 1 0 002 2V6a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 00-2-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">Submit grades for last mock</p>
                    <button onClick={() => {}} className="mt-2 px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
                      Mark as Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}