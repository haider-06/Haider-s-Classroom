import { useState } from "react";

export default function StudentDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 
                   transition-all duration-300 ${sidebarCollapsed ? '-translate-x-full' : ''} 
                   z-50`}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-2 rounded hover:bg-gray-100"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
            <h2 className="text-xl font-semibold text-gray-900">Student Dashboard</h2>
          </div>
          <div className="flex items-center space-x-3">
            <img 
              src="/placeholder-avatar.jpg" 
              alt="Profile" 
              className="h-8 w-8 rounded-full"
            />
            <span className="text-sm font-medium text-gray-600">Student Name</span>
          </div>
        </div>
        
        <nav className="mt-6 space-y-1">
          <a 
            href="/student/dashboard" 
            className={`flex items-center px-4 py-2 text-sm font-medium 
                      ${sidebarCollapsed ? 'justify-center' : 'justify-start'} 
                      rounded-md hover:bg-gray-100 
                      ${sidebarCollapsed ? 'px-2' : ''}`}
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {!sidebarCollapsed && <span>Dashboard</span>}
          </a>
          
          <a 
            href="/student/schedule" 
            className={`flex items-center px-4 py-2 text-sm font-medium 
                      ${sidebarCollapsed ? 'justify-center' : 'justify-start'} 
                      rounded-md hover:bg-gray-100 
                      ${sidebarCollapsed ? 'px-2' : ''}`}
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 002-2V6a2 2 0 00-2-2H4z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M14 8a2 2 0 012-2v4a2 2 0 01-2 2V8z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M4 12a2 2 0 00-2 2v4a2 2 0 002 2v-4a2 2 0 00-2-2zm10 0a2 2 0 012-2v4a2 2 0 01-2 2v-4z" clipRule="evenodd" />
            </svg>
            {!sidebarCollapsed && <span>Schedule</span>}
          </a>
          
          <a 
            href="/student/exam-board" 
            className={`flex items-center px-4 py-2 text-sm font-medium 
                      ${sidebarCollapsed ? 'justify-center' : 'justify-start'} 
                      rounded-md hover:bg-gray-100 
                      ${sidebarCollapsed ? 'px-2' : ''}`}
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {!sidebarCollapsed && <span>Exam Board</span>}
          </a>
          
          <a 
            href="/student/enrolled-units" 
            className={`flex items-center px-4 py-2 text-sm font-medium 
                      ${sidebarCollapsed ? 'justify-center' : 'justify-start'} 
                      rounded-md hover:bg-gray-100 
                      ${sidebarCollapsed ? 'px-2' : ''}`}
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {!sidebarCollapsed && <span>Enrolled Units</span>}
          </a>
          
          <a 
            href="/student/resources" 
            className={`flex items-center px-4 py-2 text-sm font-medium 
                      ${sidebarCollapsed ? 'justify-center' : 'justify-start'} 
                      rounded-md hover:bg-gray-100 
                      ${sidebarCollapsed ? 'px-2' : ''}`}
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v1a1 1 0 001 1h1a1 1 0 001 1v3a1 1 0 001 1H3a1 1 0 01-1-1V3a1 1 0 011-1h1a1 1 0 001-1V2z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M6 8a2 2 0 00-2 2v1a1 1 0 001 1h1a1 1 0 001 1v3a1 1 0 001 1H3a1 1 0 01-1-1V9a1 1 0 011-1h1a1 1 0 001-1V8z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M6 14a2 2 0 00-2 2v1a1 1 0 001 1h1a1 1 0 001 1v3a1 1 0 001 1H3a1 1 0 01-1-1V9a1 1 0 011-1h1a1 1 0 001-1V8z" clipRule="evenodd" />
            </svg>
            {!sidebarCollapsed && <span>Resources</span>}
          </a>
          
          <a 
            href="/student/grade-report" 
            className={`flex items-center px-4 py-2 text-sm font-medium 
                      ${sidebarCollapsed ? 'justify-center' : 'justify-start'} 
                      rounded-md hover:bg-gray-100 
                      ${sidebarCollapsed ? 'px-2' : ''}`}
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {!sidebarCollapsed && <span>Grade Report</span>}
          </a>
          
          <a 
            href="/student/attendance" 
            className={`flex items-center px-4 py-2 text-sm font-medium 
                      ${sidebarCollapsed ? 'justify-center' : 'justify-start'} 
                      rounded-md hover:bg-gray-100 
                      ${sidebarCollapsed ? 'px-2' : ''}`}
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {!sidebarCollapsed && <span>Attendance</span>}
          </a>
          
          <a 
            href="/student/mock-registration" 
            className={`flex items-center px-4 py-2 text-sm font-medium 
                      ${sidebarCollapsed ? 'justify-center' : 'justify-start'} 
                      rounded-md hover:bg-gray-100 
                      ${sidebarCollapsed ? 'px-2' : ''}`}
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {!sidebarCollapsed && <span>Mock Registration</span>}
          </a>
        </nav>
        
        <div className="mt-auto pb-4">
          <a 
            href="/api/auth/signout" 
            className="block w-full text-center px-4 py-2 text-sm font-medium 
                    rounded-md bg-red-50 hover:bg-red-100 text-red-600"
          >
            Sign Out
          </a>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className={`flex-1 pl-64 ${sidebarCollapsed ? 'pl-0' : ''} 
                      transition-all duration-300 overflow-y-auto p-6`}>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 rounded hover:bg-gray-100"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 4a1 1 0 10-2 0 1 1 0 002 0zm8-6a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 10-2 0 1 1 0 002 0z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="relative">
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-red-500 rounded-full" />
              <button 
                className="p-2 rounded hover:bg-gray-100"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm.5-7.5a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H5a1 1 0 010-2h5v-5a1 1 0 011-0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Welcome Message */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Welcome back, <span className="text-primary">Student Name</span>!
          </h2>
          <p className="text-gray-600">
            Here's your personalized dashboard to track your learning progress.
          </p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Enrolled Units</h3>
                <p className="text-2xl font-bold text-gray-900">4</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-full">
                <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Homework Completed</h3>
                <p className="text-2xl font-bold text-gray-900">85%</p>
              </div>
              <div className="bg-green-50 p-3 rounded-full">
                <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Attendance Rate</h3>
                <p className="text-2xl font-bold text-gray-900">92%</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-full">
                <svg className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Payment Status</h3>
                <p className="text-2xl font-bold text-gray-900">Up to Date</p>
              </div>
              <div className="bg-orange-50 p-3 rounded-full">
                <svg className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center p-3 border-b border-gray-200">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                <svg className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 ml-3">
                <p className="text-sm font-medium text-gray-900">Completed Physics homework</p>
                <p className="text-xs text-gray-500">Today, 2:30 PM</p>
              </div>
              <span className="text-xs text-green-500">+10 points</span>
            </div>
            
            <div className="flex items-center p-3 border-b border-gray-200">
              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded flex items-center justify-center">
                <svg className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 ml-3">
                <p className="text-sm font-medium text-gray-900">Attended Math class</p>
                <p className="text-xs text-gray-500">Today, 10:00 AM</p>
              </div>
              <span className="text-xs text-green-500">Present</span>
            </div>
            
            <div className="flex items-center p-3 border-b border-gray-200">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded flex items-center justify-center">
                <svg className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 ml-3">
                <p className="text-sm font-medium text-gray-900">Submitted Physics assignment</p>
                <p className="text-xs text-gray-500">Yesterday, 4:15 PM</p>
              </div>
              <span className="text-xs text-blue-500">Grade: A</span>
            </div>
            
            <div className="flex items-center p-3">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded flex items-center justify-center">
                <svg className="h-5 w-5 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 ml-3">
                <p className="text-sm font-medium text-gray-900">Upcoming Math test</p>
                <p className="text-xs text-gray-500">June 5, 2026</p>
              </div>
              <span className="text-xs text-yellow-500">Study materials available</span>
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