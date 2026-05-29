"use client";
import { useState } from "react";

export default function StudentSchedule() {
  const [view, setView] = useState("week");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const classes = [
    {
      id: "C001",
      subject: "Physics",
      unit: "Unit 1",
      topic: "Kinematics",
      time: "9:00 AM - 10:30 AM",
      day: "Monday",
      location: "Room 101",
      teacher: "Mr. Ahmed",
      attendance: "Present"
    },
    {
      id: "C002",
      subject: "Mathematics",
      unit: "P1",
      topic: "Algebra",
      time: "11:00 AM - 12:30 PM",
      day: "Monday",
      location: "Room 102",
      teacher: "Ms. Fatima",
      attendance: "Present"
    },
    {
      id: "C003",
      subject: "Physics",
      unit: "Unit 2",
      topic: "Dynamics",
      time: "2:00 PM - 3:30 PM",
      day: "Monday",
      location: "Room 101",
      teacher: "Mr. Ahmed",
      attendance: "Present"
    },
    {
      id: "C004",
      subject: "Physics",
      unit: "Unit 1",
      topic: "Kinematics",
      time: "9:00 AM - 10:30 AM",
      day: "Wednesday",
      location: "Room 101",
      teacher: "Mr. Ahmed",
      attendance: "Present"
    },
    {
      id: "C005",
      subject: "Mathematics",
      unit: "P1",
      topic: "Algebra",
      time: "11:00 AM - 12:30 PM",
      day: "Wednesday",
      location: "Room 102",
      teacher: "Ms. Fatima",
      attendance: "Present"
    },
    {
      id: "C006",
      subject: "Physics",
      unit: "Unit 2",
      topic: "Dynamics",
      time: "2:00 PM - 3:30 PM",
      day: "Wednesday",
      location: "Room 101",
      teacher: "Mr. Ahmed",
      attendance: "Present"
    },
    {
      id: "C007",
      subject: "Physics",
      unit: "Unit 3",
      topic: "Work and Energy",
      time: "9:00 AM - 10:30 AM",
      day: "Friday",
      location: "Room 101",
      teacher: "Mr. Ahmed",
      attendance: "Absent"
    },
    {
      id: "C008",
      subject: "Mathematics",
      unit: "P2",
      topic: "Calculus",
      time: "11:00 AM - 12:30 PM",
      day: "Friday",
      location: "Room 102",
      teacher: "Ms. Fatima",
      attendance: "Present"
    }
  ];

  const filteredClasses = classes.filter(cls => 
    cls.day.toLowerCase() === selectedDate.toLocaleString('default', { weekday: 'long' }).toLowerCase()
  );

  const handleAttendance = (classId: string, status: string) => {
    // In a real app, this would update the database
    alert(`Attendance marked as ${status} for class ${classId}`);
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Schedule</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">View:</label>
              <div className="flex space-x-1 bg-gray-100 p-0.5 rounded-lg">
              <button 
                onClick={() => setView("day")}
                className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition-all
                        ${view === "day" ? "bg-white text-primary shadow-sm" : "text-gray-600 hover:text-gray-800"}`}
              >
                Day
              </button>
              <button 
                onClick={() => setView("week")}
                className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition-all
                        ${view === "week" ? "bg-white text-primary shadow-sm" : "text-gray-600 hover:text-gray-800"}`}
              >
                Week
              </button>
              <button 
                onClick={() => setView("month")}
                className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition-all
                        ${view === "month" ? "bg-white text-primary shadow-sm" : "text-gray-600 hover:text-gray-800"}`}
              >
                Month
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Date:</label>
            <input
              type="date"
              value={selectedDate.toISOString().split('T')[0]}
              onChange={(e) => setSelectedDate(new Date(e.target.value))}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none bg-white"
            />
          </div>
        </div>
      </div>
      
      {view === "day" && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {selectedDate.toLocaleString('default', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
          </h2>
          
          <div className="space-y-3">
            {filteredClasses.map(cls => (
              <div key={cls.id} className="flex items-center p-4 border-b border-gray-100 last:border-none hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 12l2-2 4 4H7z" />
                  </svg>
                </div>
                <div className="flex-1 ml-3">
                  <h4 className="font-medium text-gray-900">{cls.subject} - {cls.unit}</h4>
                  <p className="text-sm text-gray-500">{cls.topic}</p>
                  <p className="text-sm text-gray-500">{cls.time} • {cls.location}</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleAttendance(cls.id, "Present")}
                      className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors
                              ${cls.attendance === "Present" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-500 hover:bg-green-50 hover:text-green-600"}`}
                    >
                      Present
                    </button>
                    <button 
                      onClick={() => handleAttendance(cls.id, "Late")}
                      className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors
                              ${cls.attendance === "Late" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-500 hover:bg-yellow-50 hover:text-yellow-600"}`}
                    >
                      Late
                    </button>
                    <button 
                      onClick={() => handleAttendance(cls.id, "Absent")}
                      className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors
                              ${cls.attendance === "Absent" ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-600"}`}
                    >
                      Absent
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredClasses.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No classes scheduled for this day.
              </div>
            )}
          </div>
        </div>
      )}
      
      {view === "week" && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Weekly Schedule</h2>
          
          {(() => {
            const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            const timeSlots = [
              { label: "8:00-10:00", times: ["9:00 AM - 10:30 AM"], bg: "bg-blue-50" },
              { label: "10:00-12:00", times: ["11:00 AM - 12:30 PM"], bg: "bg-green-50" },
              { label: "12:00-14:00", times: ["2:00 PM - 3:30 PM"], bg: "bg-purple-50" },
            ];
            
            const getClass = (day: string, time: string) =>
              classes.find(c => c.day === day && c.time === time);
            
            return (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
                      <th className="p-3 text-left w-20">Time</th>
                      {days.map(d => <th key={d} className="p-3 text-center">{d}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {timeSlots.map(slot => (
                      <tr key={slot.label}>
                        <td className="p-3 text-gray-700 font-medium">{slot.label}</td>
                        {days.map(day => {
                          const cls = getClass(day, slot.times[0]);
                          return (
                            <td key={day} className={`p-3 text-center rounded-lg ${cls ? slot.bg : "bg-gray-50"}`}>
                              {cls ? `${cls.subject} - ${cls.unit}` : "Free"}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          })()}
        </div>
      )}
      
      {view === "month" && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly Schedule</h2>
          <div className="h-96 bg-gray-50 rounded-lg border border-gray-100">
            <div className="flex h-full items-center justify-center text-gray-400">
              Monthly Calendar View
            </div>
          </div>
        </div>
      )}
    </div>
  );
}