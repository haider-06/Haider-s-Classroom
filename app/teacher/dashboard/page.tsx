import { useState } from "react";

export default function TeacherDashboard() {
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
            <h2 className="text-xl font-semibold text-gray-900">Teacher Dashboard</h2>
          </div>
          <div className="flex items-center space-x-3">
            <img 
              src="/placeholder-avatar.jpg" 
              alt="Profile" 
              className="h-8 w-8 rounded-full"
            />
            <span className="text-sm font-medium text-gray-600">Teacher Name</span>
          </div>
        </div>
        
        <nav className="mt-6 space-y-1">
          <a 
            href="/teacher/dashboard" 
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
            href="/teacher/students" 
            className={`flex items-center px-4 py-2 text-sm font-medium 
                      ${sidebarCollapsed ? 'justify-center' : 'justify-start'} 
                      rounded-md hover:bg-gray-100 
                      ${sidebarCollapsed ? 'px-2' : ''}`}
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 4a1 1 0 10-2 0 1 1 0 002 0zm8-6a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 10-2 0 1 1 0 002 0z" clipRule="evenodd" />
            </svg>
            {!sidebarCollapsed && <span>Students</span>}
          </a>
          
          <a 
            href="/teacher/routine-builder" 
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
            {!sidebarCollapsed && <span>Routine Builder</span>}
          </a>
          
          <a 
            href="/teacher/resources" 
            className={`flex items-center px-4 py-2 text-sm font-medium 
                      ${sidebarCollapsed ? 'justify-center' : 'justify-start'} 
                      rounded-md hover:bg-gray-100 
                      ${sidebarCollapsed ? 'px-2' : ''}`}
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v1a1 1 0 001 1h1a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1h1a1 1 0 001-1V2z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M6 8a2 2 0 00-2 2v1a1 1 0 001 1h1a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1V9a1 1 0 011-1h1a1 1 0 001-1V8z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M6 14a2 2 0 00-2 2v1a1 1 0 001 1h1a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1v-1a1 1 0 011-1h1a1 1 0 001-1v-1z" clipRule="evenodd" />
            </svg>
            {!sidebarCollapsed && <span>Resources</span>}
          </a>
          
          <a 
            href="/teacher/statistics" 
            className={`flex items-center px-4 py-2 text-sm font-medium 
                      ${sidebarCollapsed ? 'justify-center' : 'justify-start'} 
                      rounded-md hover:bg-gray-100 
                      ${sidebarCollapsed ? 'px-2' : ''}`}
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 3a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V3zm5 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zm5 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" clipRule="evenodd" />
            </svg>
            {!sidebarCollapsed && <span>Statistics</span>}
          </a>
          
          <a 
            href="/teacher/payment" 
            className={`flex items-center px-4 py-2 text-sm font-medium 
                      ${sidebarCollapsed ? 'justify-center' : 'justify-start'} 
                      rounded-md hover:bg-gray-100 
                      ${sidebarCollapsed ? 'px-2' : ''}`}
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2 3a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V17a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm2 0a1 1 0 00-1 1v2h2V4a1 1 0 00-1-1zm5 0a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V17a1 1 0 01-1 1H9a1 1 0 01-1-1V3zm2 0a1 1 0 00-1 1v2h2V4a1 1 0 00-1-1zm5 0a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V17a1 1 0 01-1 1H14a1 1 0 01-1-1V3zm2 0a1 1 0 00-1 1v2h2V4a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {!sidebarCollapsed && <span>Payment</span>}
          </a>
          
          <a 
            href="/teacher/finance" 
            className={`flex items-center px-4 py-2 text-sm font-medium 
                      ${sidebarCollapsed ? 'justify-center' : 'justify-start'} 
                      rounded-md hover:bg-gray-100 
                      ${sidebarCollapsed ? 'px-2' : ''}`}
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zM9.5 6a.5.5 0 011 0v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3V6z" clipRule="evenodd" />
            </svg>
            {!sidebarCollapsed && <span>Finance</span>}
          </a>
          
          <a 
            href="/teacher/announcements" 
            className={`flex items-center px-4 py-2 text-sm font-medium 
                      ${sidebarCollapsed ? 'justify-center' : 'justify-start'} 
                      rounded-md hover:bg-gray-100 
                      ${sidebarCollapsed ? 'px-2' : ''}`}
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {!sidebarCollapsed && <span>Announcements</span>}
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
            <button 
              className="p-2 rounded hover:bg-gray-100"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 10-2 0 1 1 0 002 0zm0-2a1 1 0 10-2 0 1 1 0 002 0zM9 9a1 1 0 00-1 1v3a1 1 0 001 1h1v-1a1 1 0 011-1V9a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Active Courses</h3>
                <p className="text-2xl font-bold text-gray-900">12</p>
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
                <h3 className="text-sm font-medium text-gray-500">Classes Today</h3>
                <p className="text-2xl font-bold text-gray-900">5</p>
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
                <h3 className="text-sm font-medium text-gray-500">Total Students</h3>
                <p className="text-2xl font-bold text-gray-900">156</p>
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
                <h3 className="text-sm font-medium text-gray-500">Upcoming Exams</h3>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
              <div className="bg-orange-50 p-3 rounded-full">
                <svg className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Student Types</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Home Tuition</span>
                <span className="text-sm font-medium text-gray-900">45</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Online</span>
                <span className="text-sm font-medium text-gray-900">62</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Coaching</span>
                <span className="text-sm font-medium text-gray-900">49</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Today's Schedule</h3>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-gray-50 rounded">
                <div className="flex-shrink-0 h-8 w-8 bg-blue-100 rounded flex items-center justify-center">
                  <svg className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 12l2-2 4 4H7z" />
                  </svg>
                </div>
                <div className="flex-1 ml-3">
                  <p className="text-sm font-medium text-gray-900">Physics - AS Level</p>
                  <p className="text-xs text-gray-500">9:00 AM - 10:30 AM</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded">
                <div className="flex-shrink-0 h-8 w-8 bg-green-100 rounded flex items-center justify-center">
                  <svg className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 12l2-2 4 4H7z" />
                  </svg>
                </div>
                <div className="flex-1 ml-3">
                  <p className="text-sm font-medium text-gray-900">Math - P1</p>
                  <p className="text-xs text-gray-500">11:00 AM - 12:30 PM</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded">
                <div className="flex-shrink-0 h-8 w-8 bg-purple-100 rounded flex items-center justify-center">
                  <svg className="h-4 w-4 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 12l2-2 4 4H7z" />
                  </svg>
                </div>
                <div className="flex-1 ml-3">
                  <p className="text-sm font-medium text-gray-900">Physics - A2 Level</p>
                  <p className="text-xs text-gray-500">2:00 PM - 3:30 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Upcoming Exams & Mocks</h3>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-gray-50 rounded">
                <div className="flex-shrink-0 h-8 w-8 bg-red-100 rounded flex items-center justify-center">
                  <svg className="h-4 w-4 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 12l2-2 4 4H7z" />
                  </svg>
                </div>
                <div className="flex-1 ml-3">
                  <p className="text-sm font-medium text-gray-900">Physics Mock Exam</p>
                  <p className="text-xs text-gray-500">May 30, 2026</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded">
                <div className="flex-shrink-0 h-8 w-8 bg-yellow-100 rounded flex items-center justify-center">
                  <svg className="h-4 w-4 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 12l2-2 4 4H7z" />
                  </svg>
                </div>
                <div className="flex-1 ml-3">
                  <p className="text-sm font-medium text-gray-900">Math Final Exam</p>
                  <p className="text-xs text-gray-500">June 5, 2026</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded">
                <div className="flex-shrink-0 h-8 w-8 bg-blue-100 rounded flex items-center justify-center">
                  <svg className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 12l2-2 4 4H7z" />
                  </svg>
                </div>
                <div className="flex-1 ml-3">
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
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Calendar</h3>
                <div className="flex space-x-2">
                  <button 
                    className="px-3 py-1 text-sm font-medium rounded 
                            bg-blue-50 hover:bg-blue-100 text-blue-800"
                  >
                    Week
                  </button>
                  <button 
                    className="px-3 py-1 text-sm font-medium rounded 
                            bg-blue-50 hover:bg-blue-100 text-blue-800"
                  >
                    Month
                  </button>
                  <button 
                    className="px-3 py-1 text-sm font-medium rounded 
                            bg-blue-50 hover:bg-blue-100 text-blue-800"
                  >
                    Year
                  </button>
                </div>
              </div>
              <div className="h-96 bg-gray-50 rounded">
                {/* Calendar would go here */}
                <div className="flex h-full items-center justify-center text-gray-400">
                  Calendar View
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Urgent Tasks</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-gray-50 rounded">
                  <div className="flex-shrink-0 h-8 w-8 bg-yellow-100 rounded flex items-center justify-center">
                    <svg className="h-4 w-4 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 12l2-2 4 4H7z" />
                    </svg>
                  </div>
                  <div className="flex-1 ml-3">
                    <p className="text-sm font-medium text-gray-900">Print exam papers for upcoming exams</p>
                    <button 
                      onClick={() => {}}
                      className="mt-2 px-2 py-1 text-xs font-medium rounded 
                              bg-blue-50 hover:bg-blue-100 text-blue-800"
                    >
                      Mark as Done
                    </button>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded">
                  <div className="flex-shrink-0 h-8 w-8 bg-yellow-100 rounded flex items-center justify-center">
                    <svg className="h-4 w-4 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 12l2-2 4 4H7z" />
                    </svg>
                  </div>
                  <div className="flex-1 ml-3">
                    <p className="text-sm font-medium text-gray-900">Prepare worksheets for next week</p>
                    <button 
                      onClick={() => {}}
                      className="mt-2 px-2 py-1 text-xs font-medium rounded 
                              bg-blue-50 hover:bg-blue-100 text-blue-800"
                    >
                      Mark as Done
                    </button>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded">
                  <div className="flex-shrink-0 h-8 w-8 bg-yellow-100 rounded flex items-center justify-center">
                    <svg className="h-4 w-4 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 12l2-2 4 4H7z" />
                    </svg>
                  </div>
                  <div className="flex-1 ml-3">
                    <p className="text-sm font-medium text-gray-900">Submit grades for last mock</p>
                    <button 
                      onClick={() => {}}
                      className="mt-2 px-2 py-1 text-xs font-medium rounded 
                              bg-blue-50 hover:bg-blue-100 text-blue-800"
                    >
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