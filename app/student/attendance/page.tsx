import { useState } from "react";

export default function Attendance() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth().toString());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString());

  const attendanceData = [
    {
      date: "2026-05-01",
      day: "Friday",
      subject: "Physics",
      unit: "Unit 1",
      time: "9:00 AM - 10:30 AM",
      status: "Present",
      remarks: ""
    },
    {
      date: "2026-05-02",
      day: "Saturday",
      subject: "Mathematics",
      unit: "P1",
      time: "11:00 AM - 12:30 PM",
      status: "Present",
      remarks: ""
    },
    {
      date: "2026-05-03",
      day: "Sunday",
      subject: "Physics",
      unit: "Unit 2",
      time: "2:00 PM - 3:30 PM",
      status: "Absent",
      remarks: "Sick"
    },
    {
      date: "2026-05-04",
      day: "Monday",
      subject: "Physics",
      unit: "Unit 1",
      time: "9:00 AM - 10:30 AM",
      status: "Late",
      remarks: "Traffic"
    },
    {
      date: "2026-05-05",
      day: "Tuesday",
      subject: "Mathematics",
      unit: "P1",
      time: "11:00 AM - 12:30 PM",
      status: "Present",
      remarks: ""
    },
    {
      date: "2026-05-06",
      day: "Wednesday",
      subject: "Physics",
      unit: "Unit 2",
      time: "2:00 PM - 3:30 PM",
      status: "Present",
      remarks: ""
    },
    {
      date: "2026-05-07",
      day: "Thursday",
      subject: "Physics",
      unit: "Unit 3",
      time: "9:00 AM - 10:30 AM",
      status: "Present",
      remarks: ""
    },
    {
      date: "2026-05-08",
      day: "Friday",
      subject: "Mathematics",
      unit: "P2",
      time: "11:00 AM - 12:30 PM",
      status: "Present",
      remarks: ""
    }
  ];

  const months = [
    { value: "0", label: "January" },
    { value: "1", label: "February" },
    { value: "2", label: "March" },
    { value: "3", label: "April" },
    { value: "4", label: "May" },
    { value: "5", label: "June" },
    { value: "6", label: "July" },
    { value: "7", label: "August" },
    { value: "8", label: "September" },
    { value: "9", label: "October" },
    { value: "10", label: "November" },
    { value: "11", label: "December" }
  ];

  const years = [2024, 2025, 2026, 2027];

  const presentCount = attendanceData.filter(a => a.status === "Present").length;
  const absentCount = attendanceData.filter(a => a.status === "Absent").length;
  const lateCount = attendanceData.filter(a => a.status === "Late").length;
  const totalClasses = attendanceData.length;
  const attendancePercentage = Math.round((presentCount + lateCount) / totalClasses * 100);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Attendance</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Month:</label>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            >
              {months.map(month => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Year:</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2"
            >
              {years.map(year => (
                <option key={year} value={year.toString()}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        {/* Summary Cards */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Present</h3>
              <p className="text-2xl font-bold text-gray-900">{presentCount}</p>
            </div>
            <div className="bg-green-50 p-3 rounded-full">
              <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Absent</h3>
              <p className="text-2xl font-bold text-gray-900">{absentCount}</p>
            </div>
            <div className="bg-red-50 p-3 rounded-full">
              <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Late</h3>
              <p className="text-2xl font-bold text-gray-900">{lateCount}</p>
            </div>
            <div className="bg-yellow-50 p-3 rounded-full">
              <svg className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Attendance Rate</h3>
              <p className="text-2xl font-bold text-gray-900">{attendancePercentage}%</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-full">
              <svg className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-1.414-1.414a1 1 0 00-1.414 1.414L8.586 9.586V13a1 1 0 002 0V9.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Attendance Records</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remarks</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {attendanceData.map(record => (
                <tr key={record.date} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.day}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.unit}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full 
                            ${record.status === "Present" ? "bg-green-100 text-green-800" :
                              record.status === "Late" ? "bg-yellow-100 text-yellow-800" :
                              "bg-red-100 text-red-800"}`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.remarks || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Attendance Trend</h3>
          <div className="h-48 bg-gray-50 rounded">
            {/* Line chart would go here */}
            <div className="flex h-full items-center justify-center text-gray-400">
              Attendance Trend Chart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}