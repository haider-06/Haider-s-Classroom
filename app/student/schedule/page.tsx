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
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Schedule</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">View:</label>
            <div className="flex space-x-1">
              <button 
                onClick={() => setView("day")}
                className={`px-3 py-1 text-sm font-medium rounded 
                        ${view === "day" ? "bg-primary text-primary-foreground" : "bg-gray-200 text-gray-600"}
                        hover:bg-primary/10 hover:text-primary`}
              >
                Day
              </button>
              <button 
                onClick={() => setView("week")}
                className={`px-3 py-1 text-sm font-medium rounded 
                        ${view === "week" ? "bg-primary text-primary-foreground" : "bg-gray-200 text-gray-600"}
                        hover:bg-primary/10 hover:text-primary`}
              >
                Week
              </button>
              <button 
                onClick={() => setView("month")}
                className={`px-3 py-1 text-sm font-medium rounded 
                        ${view === "month" ? "bg-primary text-primary-foreground" : "bg-gray-200 text-gray-600"}
                        hover:bg-primary/10 hover:text-primary`}
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
              className="border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>
      </div>
      
      {view === "day" && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {selectedDate.toLocaleString('default', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
          
          <div className="space-y-3">
            {filteredClasses.map(cls => (
              <div key={cls.id} className="flex items-center p-3 border-b border-gray-200">
                <div className="flex-shrink-0 w-10 h-10">
                  <div className="bg-blue-100 rounded flex items-center justify-center">
                    <svg className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 12l2-2 4 4H7z" />
                    </svg>
                  </div>
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
                      className={`px-2 py-1 text-xs rounded-full 
                              ${cls.attendance === "Present" ? "bg-green-100 text-green-800" : "bg-green-50 text-green-500"}`}
                    >
                      Present
                    </button>
                    <button 
                      onClick={() => handleAttendance(cls.id, "Late")}
                      className={`px-2 py-1 text-xs rounded-full 
                              ${cls.attendance === "Late" ? "bg-yellow-100 text-yellow-800" : "bg-yellow-50 text-yellow-500"}`}
                    >
                      Late
                    </button>
                    <button 
                      onClick={() => handleAttendance(cls.id, "Absent")}
                      className={`px-2 py-1 text-xs rounded-full 
                              ${cls.attendance === "Absent" ? "bg-red-100 text-red-800" : "bg-red-50 text-red-500"}`}
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
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Weekly Schedule</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm font-medium text-gray-500">
              <span>Time</span>
              <span>Monday</span>
              <span>Tuesday</span>
              <span>Wednesday</span>
              <span>Thursday</span>
              <span>Friday</span>
              <span>Saturday</span>
              <span>Sunday</span>
            </div>
            
            {/* Time slots */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="w-20 text-gray-700">8:00-10:00</span>
                <span className="flex-1 text-center px-2 
                        {filteredClasses.find(c => c.day === "Monday" && c.time === "9:00 AM - 10:30 AM") ? "bg-blue-50" : "bg-gray-100"} 
                        rounded">
                  {filteredClasses.find(c => c.day === "Monday" && c.time === "9:00 AM - 10:30 AM")?.subject} - {filteredClasses.find(c => c.day === "Monday" && c.time === "9:00 AM - 10:30 AM")?.unit}
                </span>
                <span className="flex-1 text-center px-2 
                        {filteredClasses.find(c => c.day === "Tuesday" && c.time === "9:00 AM - 10:30 AM") ? "bg-blue-50" : "bg-gray-100"} 
                        rounded">
                  {filteredClasses.find(c => c.day === "Tuesday" && c.time === "9:00 AM - 10:30 AM")?.subject} - {filteredClasses.find(c => c.day === "Tuesday" && c.time === "9:00 AM - 10:30 AM")?.unit}
                </span>
                <span className="flex-1 text-center px-2 
                        {filteredClasses.find(c => c.day === "Wednesday" && c.time === "9:00 AM - 10:30 AM") ? "bg-blue-50" : "bg-gray-100"} 
                        rounded">
                  {filteredClasses.find(c => c.day === "Wednesday" && c.time === "9:00 AM - 10:30 AM")?.subject} - {filteredClasses.find(c => c.day === "Wednesday" && c.time === "9:00 AM - 10:30 AM")?.unit}
                </span>
                <span className="flex-1 text-center px-2 
                        {filteredClasses.find(c => c.day === "Thursday" && c.time === "9:00 AM - 10:30 AM") ? "bg-blue-50" : "bg-gray-100"} 
                        rounded">
                  {filteredClasses.find(c => c.day === "Thursday" && c.time === "9:00 AM - 10:30 AM")?.subject} - {filteredClasses.find(c => c.day === "Thursday" && c.time === "9:00 AM - 10:30 AM")?.unit}
                </span>
                <span className="flex-1 text-center px-2 
                        {filteredClasses.find(c => c.day === "Friday" && c.time === "9:00 AM - 10:30 AM") ? "bg-blue-50" : "bg-gray-100"} 
                        rounded">
                  {filteredClasses.find(c => c.day === "Friday" && c.time === "9:00 AM - 10:30 AM")?.subject} - {filteredClasses.find(c => c.day === "Friday" && c.time === "9:00 AM - 10:30 AM")?.unit}
                </span>
                <span className="flex-1 text-center px-2 
                        {filteredClasses.find(c => c.day === "Saturday" && c.time === "9:00 AM - 10:30 AM") ? "bg-blue-50" : "bg-gray-100"} 
                        rounded">
                  {filteredClasses.find(c => c.day === "Saturday" && c.time === "9:00 AM - 10:30 AM")?.subject} - {filteredClasses.find(c => c.day === "Saturday" && c.time === "9:00 AM - 10:30 AM")?.unit}
                </span>
                <span className="flex-1 text-center px-2 
                        {filteredClasses.find(c => c.day === "Sunday" && c.time === "9:00 AM - 10:30 AM") ? "bg-blue-50" : "bg-gray-100"} 
                        rounded">
                  {filteredClasses.find(c => c.day === "Sunday" && c.time === "9:00 AM - 10:30 AM")?.subject} - {filteredClasses.find(c => c.day === "Sunday" && c.time === "9:00 AM - 10:30 AM")?.unit}
                </span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="w-20 text-gray-700">10:00-12:00</span>
                <span className="flex-1 text-center px-2 
                        {filteredClasses.find(c => c.day === "Monday" && c.time === "11:00 AM - 12:30 PM") ? "bg-green-50" : "bg-gray-100"} 
                        rounded">
                  {filteredClasses.find(c => c.day === "Monday" && c.time === "11:00 AM - 12:30 PM")?.subject} - {filteredClasses.find(c => c.day === "Monday" && c.time === "11:00 AM - 12:30 PM")?.unit}
                </span>
                <span className="flex-1 text-center px-2 
                        {filteredClasses.find(c => c.day === "Tuesday" && c.time === "11:00 AM - 12:30 PM") ? "bg-green-50" : "bg-gray-100"} 
                        rounded">
                  {filteredClasses.find(c => c.day === "Tuesday" && c.time === "11:00 AM - 12:30 PM")?.subject} - {filteredClasses.find(c => c.day === "Tuesday" && c.time === "11:00 AM - 12:30 PM")?.unit}
                </span>
                <span className="flex-1 text-center px-2 
                        {filteredClasses.find(c => c.day === "Wednesday" && c.time === "11:00 AM - 12:30 PM") ? "bg-green-50" : "bg-gray-100"} 
                        rounded">
                  {filteredClasses.find(c => c.day === "Wednesday" && c.time === "11:00 AM - 12:30 PM")?.subject} - {filteredClasses.find(c => c.day === "Wednesday" && c.time === "11:00 AM - 12:30 PM")?.unit}
                </span>
                <span className="flex-1 text-center px-2 
                        {filteredClasses.find(c => c.day === "Thursday" && c.time === "11:00 AM - 12:30 PM") ? "bg-green-50" : "bg-gray-100"} 
                        rounded">
                  {filteredClasses.find(c => c.day === "Thursday" && c.time === "11:00 AM - 12:30 PM")?.subject} - {filteredClasses.find(c => c.day === "Thursday" && c.time === "11:00 AM - 12:30 PM")?.unit}
                </span>
                <span className="flex-1 text-center px-2 
                        {filteredClasses.find(c => c.day === "Friday" && c.time === "11:00 AM - 12:30 PM") ? "bg-green-50" : "bg-gray-100"} 
                        rounded">
                  {filteredClasses.find(c => c.day === "Friday" && c.time === "11:00 AM - 12:30 PM")?.subject} - {filteredClasses.find(c => c.day === "Friday" && c.time === "11:00 AM - 12:30 PM")?.unit}
                </span>
                <span className="flex-1 text-center px-2 
                        {filteredClasses.find(c => c.day === "Saturday" && c.time === "11:00 AM - 12:30 PM") ? "bg-green-50" : "bg-gray-100"} 
                        rounded">
                  {filteredClasses.find(c => c.day === "Saturday" && c.time === "11:00 AM - 12:30 PM")?.subject} - {filteredClasses.find(c => c.day === "Saturday" && c.time === "11:00 AM - 12:30 PM")?.unit}
                </span>
                <span className="flex-1 text-center px-2 
                        {filteredClasses.find(c => c.day === "Sunday" && c.time === "11:00 AM - 12:30 PM") ? "bg-green-50" : "bg-gray-100"} 
                        rounded">
                  {filteredClasses.find(c => c.day === "Sunday" && c.time === "11:00 AM - 12:30 PM")?.subject} - {filteredClasses.find(c => c.day === "Sunday" && c.time === "11:00 AM - 12:30 PM")?.unit}
                </span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="w-20 text-gray-700">12:00-14:00</span>
                <span className="flex-1 text-center px-2 
                        {filteredClasses.find(c => c.day === "Monday" && c.time === "2:00 PM - 3:30 PM") ? "bg-purple-50" : "bg-gray-100"} 
                        rounded">
                  {filteredClasses.find(c => c.day === "Monday" && c.time === "2:00 PM - 3:30 PM")?.subject} - {filteredClasses.find(c => c.day === "Monday" && c.time === "2:00 PM - 3:30 PM")?.unit}
                </span>
                <span className="flex-1 text-center px-2 
                        {filteredClasses.find(c => c.day === "Tuesday" && c.time === "2:00 PM - 3:30 PM") ? "bg-purple-50" : "bg-gray-100"} 
                        rounded">
                  {filteredClasses.find(c => c.day === "Tuesday" && c.time === "2:00 PM - 3:30 PM")?.subject} - {filteredClasses.find(c => c.day === "Tuesday" && c.time === "2:00 PM - 3:30 PM")?.unit}
                </span>
                <span className="flex-1 text-center px-2 
                        {filteredClasses.find(c => c.day === "Wednesday" && c.time === "2:00 PM - 3:30 PM") ? "bg-purple-50" : "bg-gray-100"} 
                        rounded">
                  {filteredClasses.find(c => c.day === "Wednesday" && c.time === "2:00 PM - 3:30 PM")?.subject} - {filteredClasses.find(c => c.day === "Wednesday" && c.time === "2:00 PM - 3:30 PM")?.unit}
                </span>
                <span className="flex-1 text-center px-2 
                        {filteredClasses.find(c => c.day === "Thursday" && c.time === "2:00 PM - 3:30 PM") ? "bg-purple-50" : "bg-gray-100"} 
                        rounded">
                  {filteredClasses.find(c => c.day === "Thursday" && c.time === "2:00 PM - 3:30 PM")?.subject} - {filteredClasses.find(c => c.day === "Thursday" && c.time === "2:00 PM - 3:30 PM")?.unit}
                </span>
                <span className="flex-1 text-center px-2 
                        {filteredClasses.find(c => c.day === "Friday" && c.time === "2:00 PM - 3:30 PM") ? "bg-purple-50" : "bg-gray-100"} 
                        rounded">
                  {filteredClasses.find(c => c.day === "Friday" && c.time === "2:00 PM - 3:30 PM")?.subject} - {filteredClasses.find(c => c.day === "Friday" && c.time === "2:00 PM - 3:30 PM")?.unit}
                </span>
                <span className="flex-1 text-center px-2 
                        {filteredClasses.find(c => c.day === "Saturday" && c.time === "2:00 PM - 3:30 PM") ? "bg-purple-50" : "bg-gray-100"} 
                        rounded">
                  {filteredClasses.find(c => c.day === "Saturday" && c.time === "2:00 PM - 3:30 PM")?.subject} - {filteredClasses.find(c => c.day === "Saturday" && c.time === "2:00 PM - 3:30 PM")?.unit}
                </span>
                <span className="flex-1 text-center px-2 
                        {filteredClasses.find(c => c.day === "Sunday" && c.time === "2:00 PM - 3:30 PM") ? "bg-purple-50" : "bg-gray-100"} 
                        rounded">
                  {filteredClasses.find(c => c.day === "Sunday" && c.time === "2:00 PM - 3:30 PM")?.subject} - {filteredClasses.find(c => c.day === "Sunday" && c.time === "2:00 PM - 3:30 PM")?.unit}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {view === "month" && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly Schedule</h2>
          <div className="h-96 bg-gray-50 rounded">
            {/* Calendar would go here */}
            <div className="flex h-full items-center justify-center text-gray-400">
              Monthly Calendar View
            </div>
          </div>
        </div>
      )}
    </div>
  );
}