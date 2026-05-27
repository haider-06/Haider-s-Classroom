import { useState } from "react";

export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { label: "Total Students", value: "124", change: "+12%", color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Active Batches", value: "8", change: "0%", color: "text-green-600", bg: "bg-green-50" },
    { label: "Monthly Revenue", value: "Rs. 45,000", change: "+8%", color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Pending Dues", value: "Rs. 12,400", change: "-5%", color: "text-red-600", bg: "bg-red-50" },
  ];

  const recentActivities = [
    { id: 1, user: "Ahmed Ali", action: "Paid monthly fee", time: "2 hours ago", type: "payment" },
    { id: 2, user: "Sara Khan", action: "Registered for Mock Exam", time: "5 hours ago", type: "registration" },
    { id: 3, user: "Zainab Bibi", action: "Submitted Assignment", time: "1 day ago", type: "assignment" },
    { id: 4, user: "Hamza Noor", action: "Marked Absent", time: "1 day ago", type: "attendance" },
  ];

  const quickActions = [
    { label: "Add Student", path: "/teacher/students", icon: "👤" },
    { label: "Build Routine", path: "/teacher/routine-builder", icon: "📅" },
    { label: "Upload Resource", path: "/teacher/resources", icon: "📁" },
    { label: "Record Payment", path: "/teacher/payment", icon: "💰" },
    { label: "Send Announcement", path: "/teacher/announcements", icon: "📢" },
    { label: "View Finance", path: "/teacher/finance", icon: "📈" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Teacher Dashboard</h1>
          <p className="text-gray-500">Welcome back, Professor Haider. Here is your classroom overview.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right mr-4">
            <p className="text-sm font-medium text-gray-900">May 27, 2026</p>
            <p className="text-xs text-gray-500">Tuesday</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
            H
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-500">{stat.label}</span>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.color.replace('text', 'bg').replace('600', '100')} ${stat.color}`}>
                {stat.change}
              </span>
            </div>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <div className={`mt-2 h-1 w-full rounded-full ${stat.bg}`}>
              <div className={`h-full rounded-full ${stat.color.replace('text', 'bg')}`} style={{ width: '70%' }}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {quickActions.map((action, idx) => (
              <button 
                key={idx} 
                className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-100 hover:border-primary hover:bg-primary/5 transition-all group"
              >
                <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">{action.icon}</span>
                <span className="text-sm font-medium text-gray-700">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <div className={`mt-1 h-2 w-2 rounded-full ${
                  activity.type === 'payment' ? 'bg-green-500' :
                  activity.type === 'registration' ? 'bg-blue-500' :
                  activity.type === 'assignment' ? 'bg-purple-500' : 'bg-red-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                  <p className="text-xs text-gray-500">{activity.action}</p>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 text-sm text-primary font-medium hover:underline">
            View All Activity
          </button>
        </div>
      </div>

      {/* Today's Schedule Preview */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Today's Schedule</h2>
          <button className="text-sm text-primary hover:underline">View Full Routine</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <th className="pb-3">Time</th>
                <th className="pb-3">Batch</th>
                <th className="pb-3">Subject/Unit</th>
                <th className="pb-3">Room</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { time: "09:00 AM", batch: "B1-2026", subject: "Physics U1", room: "Room 101", status: "Completed" },
                { time: "11:00 AM", batch: "B2-2026", subject: "Math P1", room: "Room 204", status: "In Progress" },
                { time: "02:00 PM", batch: "B1-2026", subject: "Physics U2", room: "Room 101", status: "Upcoming" },
                { time: "04:00 PM", batch: "B3-2026", subject: "Math P2", room: "Room 205", status: "Upcoming" },
              ].map((row, idx) => (
                <tr key={idx} className="text-sm text-gray-700">
                  <td className="py-3 font-medium">{row.time}</td>
                  <td className="py-3">{row.batch}</td>
                  <td className="py-3">{row.subject}</td>
                  <td className="py-3">{row.room}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      row.status === 'Completed' ? 'bg-green-100 text-green-700' :
                      row.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}